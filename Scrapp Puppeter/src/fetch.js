//Da resultado
fetch("https://saa.ues.edu.sv/estudiantes/planes", {
  "headers": {
    "accept": "*/*",
    "accept-language": "es-419,es;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-october-request-handler": "onRequestApi",
    "x-october-request-partials": "",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://saa.ues.edu.sv/estudiantes/planes",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "value=E10101-2015-Especialidad+M%C3%A9dica+en+Cirug%C3%ADa+General-7.00-7.00-21-PR-118-300-0-Especialidad-POSTGRADO",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(response => response.json()).then(result => console.log(result));

