const puppeteer = require('puppeteer')
const fs = require('fs')

const baseUrl = 'https://saa.ues.edu.sv/estudiantes/planes'

const fetchData = (async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setRequestInterception(true)

  let solicitudDeFacultades = null

  page.on('request', request => {
    if (
      request.resourceType() === 'xhr' &&
      request.method() === 'POST' &&
      request.url() === baseUrl
    ) {
      solicitudDeFacultades = request
    }
    request.continue()
  })

  await page.goto(baseUrl)

  if (!solicitudDeFacultades) {
    throw Error('Error al obtener los datos de las facultades! 😾')
  }

  const response = await solicitudDeFacultades.response()
  let { data: facultadesUniversitarias } = await response.json()

  let indiceFacultad = 0

  for (const { id: idFacultad } of facultadesUniversitarias) {
    const carrerasImpartidasPorFacultad = await fetchPostCrossSite(
      idFacultad,
      page,
      true
    )

    if (Array.isArray(carrerasImpartidasPorFacultad.data)) {
      let indiceCarreraEnFacultad = 0
      for (const carrera of carrerasImpartidasPorFacultad.data) {
        const materiasDeLaCarrera = await fetchPostCrossSite(
          getValueCarrera(carrera),
          page
        )
        carrerasImpartidasPorFacultad.data[indiceCarreraEnFacultad].ciclos =
          materiasDeLaCarrera.data
        indiceCarreraEnFacultad++
      }
    }
    facultadesUniversitarias[indiceFacultad].carreras =
      carrerasImpartidasPorFacultad.data
    indiceFacultad++
  }

  fs.writeFileSync(
    'Carreras-UES.json',
    JSON.stringify(facultadesUniversitarias, null, 2)
  )

  await browser.close()
})()

const getValueCarrera = carrera => {
  const {
    codigo,
    plan,
    nombre,
    cum,
    minima,
    obligatorias,
    modalidad,
    total_uv,
    social,
    electivas,
    tipo,
    grado
  } = carrera
  return encodeURI(
    [
      codigo,
      plan,
      nombre,
      cum,
      minima,
      obligatorias,
      modalidad,
      total_uv,
      social,
      electivas,
      tipo,
      grado
    ]
      .join('-')
      .replace(/ /g, '+')
  )
}

const fetchPostCrossSite = (id, page, isCarrera = false) => {
  const optionsFetch = {
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': 'es-419,es;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-october-request-handler': `${
        isCarrera ? 'onRequestApiCar' : 'onRequestApi'
      }`,
      'x-october-request-partials': '',
      'x-requested-with': 'XMLHttpRequest'
    },
    referrer: 'https://saa.ues.edu.sv/estudiantes/planes',
    referrerPolicy: 'strict-origin-when-cross-origin',
    mode: 'cors',
    credentials: 'include'
  }

  return page.evaluate(
    async (id, url, optionsFetch) => {
      const options = { ...optionsFetch, body: `value=${id}` }
      return await fetch(url, options).then(response => response.json())
    },
    id,
    baseUrl,
    optionsFetch
  )
}
