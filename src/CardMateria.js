import React, { useState } from 'react'
import ModalMateria from './ModalMateria'

const inputCheckBox = ({ aprobada }) => {
    return aprobada ? <input type="checkbox" defaultChecked /> : <input type="checkbox" />
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
            if (materia.hasOwnProperty('uv')) {
                let UnidadesValorativasObtenidas = localStorage.getItem('TotalUnidadesValorativas')
                if (+UnidadesValorativasObtenidas >= materia.uv) {
                    backgroundContent = 'has-background-primary-dark'
                } else {
                    backgroundContent = 'has-background-danger'                     
                    console.log((`Unidades valorativas  ${UnidadesValorativasObtenidas} / ${materia.uv}`))
                }
            }
        }
    }
    return [backgroundContent, colorText]
}

const onClickCheckbox = (materia, setMateriaFocus) => (event) => {
    const { identificador } = materia
    let data = JSON.parse(localStorage.getItem('Pensum'))
    let totalUnidadesValorativas = 0
    data.forEach(({ materias }, ciclo) => {
        materias.forEach((materia, indiceMateria) => {
            const { identificador: identificadorLocalStorage, unidadValorativa, aprobada } = materia
            if (identificadorLocalStorage === identificador) {
                data[ciclo].materias[indiceMateria] = { ...materia, aprobada: event.target.checked }
                totalUnidadesValorativas += unidadValorativa
            }
            if (aprobada) {
                totalUnidadesValorativas += unidadValorativa
            }
        })
    })
    setMateriaFocus({})
    localStorage.setItem('Pensum', JSON.stringify(data))
    localStorage.setItem('TotalUnidadesValorativas', totalUnidadesValorativas)
}

const CardMateria = ({ materia, materiaFocus, setMateriaFocus }) => {
    const { abreviatura } = materia
    const [backgroundContent, colorText] = obtenerEstiloCard(materia, materiaFocus)
    const [visibilidadModal, setVisibilidadModal] = useState(false)

    const onClickContentCard = (materia) => (event) => {
        setMateriaFocus((oldMateria) => {
            if (JSON.stringify(oldMateria) === JSON.stringify(materia)) {
                setMateriaFocus({})
            } else {
                setMateriaFocus(materia)
            }
        })
        localStorage.setItem('materiaDisponibleCursar', true)
    }

    let desplegarModal = <div></div>;
    if (visibilidadModal) {
        desplegarModal = <ModalMateria materia={materia} setVisibilidadModal={setVisibilidadModal} />
    }

    const mostrarModal = () => (event) => {
        setVisibilidadModal(true)
    }

    return (
        <div className="card mt-2" style={{ width: '100px' }}>
            <div
                className={"hoverTarget card-content py-3 px-0 " + backgroundContent}
                onClick={onClickContentCard(materia)}>
                <p
                    className={"subtitle has-text-centered is-family-sans-serif is-size-5 p-0 " + colorText}>
                    {abreviatura}
                </p>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item mx-0 my-0 py-2">
                    <i className="hoverTarget mt-1" onClick={mostrarModal(materia)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                            <circle cx="8" cy="4.5" r="1" />
                        </svg>
                    </i>
                </p>
                <p className="card-footer-item mx-0 my-0 py-2">
                    <label className="checkbox" onChange={onClickCheckbox(materia, setMateriaFocus)}>
                        {inputCheckBox(materia)}
                    </label>
                </p>
            </footer>
            {desplegarModal}
        </div>
    )
}

export default CardMateria;