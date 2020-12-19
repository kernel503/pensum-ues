import React from 'react'

const inputCheckBox = (materia) => {
    const { aprobada } = materia
    let checkboxInput
    if (aprobada) {
        checkboxInput = <input type="checkbox" defaultChecked />
    }
    else {
        checkboxInput = <input type="checkbox" />
    }
    return checkboxInput
}

const obtenerEstiloCard = (materia, materiaFocus) => {
    const { identificador, aprobada } = materia
    const { identificador: identificadorFocus, requisito: requisitos } = materiaFocus
    let backgroundContent = 'has-background-grey-lighter'
    let colorText = 'has-text-dark'
    
    if (identificador !== undefined && requisitos !== undefined) {
        if (requisitos.includes(identificador)) {
            backgroundContent = 'has-background-info'
            colorText = 'has-text-white'            
            if (!aprobada) {
                localStorage.setItem('materiaDisponibleCursar', JSON.stringify(false))
            }
        }
        if (identificador === identificadorFocus) {
            if (JSON.parse(localStorage.getItem('materiaDisponibleCursar'))) {
                backgroundContent = 'has-background-primary-dark'
            } else {                
                backgroundContent = 'has-background-danger'
            }
            colorText = 'has-text-white'
        }
    }
    return [backgroundContent, colorText]
}

const onClickCheckbox = (materia) => (event) => {
    const { identificador } = materia
    let data = JSON.parse(localStorage.getItem('Pensum'))

    data.forEach(({ materias }, ciclo) => {
        materias.forEach((materia, indiceMateria) => {
            const { identificador: identificadorLocalStorage } = materia
            if (identificadorLocalStorage === identificador) {
                data[ciclo].materias[indiceMateria] = { ...materia, aprobada: event.target.checked }
            }
        })
    })

    localStorage.setItem('Pensum', JSON.stringify(data))
}

const CardMateria = ({ materia, materiaFocus, setMateriaFocus }) => {
    const { abreviatura } = materia
    const [backgroundContent, colorText] = obtenerEstiloCard(materia, materiaFocus)

    const onClickContentCard = (materia) => (event) => {
        setMateriaFocus(materia)
        localStorage.setItem('materiaDisponibleCursar', true)
    }

    return (
        <div className="card mt-2">
            <div
                className={"hoverTarget card-content py-3 px-0 " + backgroundContent}
                onClick={onClickContentCard(materia)}>
                <p
                    className={"subtitle has-text-centered is-family-sans-serif is-size-5 p-0 " + colorText}>
                    {abreviatura}
                </p>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item mx-0 my-0 py-3">
                    <i className="hoverTarget fas fa-eye"></i>
                </p>
                <p className="card-footer-item mx-0 my-0 py-3">
                    <label className="checkbox" onChange={onClickCheckbox(materia)}>
                        {inputCheckBox(materia)}
                    </label>
                </p>
            </footer>
        </div>
    )
}

export default CardMateria;