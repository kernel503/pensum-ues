import React from 'react'

const ModalMateria = ({ materia, setVisibilidadModal }) => {
    console.log(materia)
    const { identificador, unidadValorativa, abreviatura, nombreMateria, aprobada, requisito } = materia
    const cerrarModal = () => (event) => {
        setVisibilidadModal(false)
    }

    let textoAprobada = ''
    aprobada ? textoAprobada = 'Aprobada' : textoAprobada = 'No Aprobada'

    let textoRequisito = ''
    if (requisito.length) {
        textoRequisito = requisito.join(', ')
    } else {
        textoRequisito = 'Sin requisito'
    }
    if (materia.hasOwnProperty('uv')) {
        textoRequisito = materia.uv + ' unidades valorativas'
    }


    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={cerrarModal()}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title pb-0 mb-0 has-text-centered">{abreviatura}</p>
                    <button onClick={cerrarModal()} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <p className="subtitle is-5">Identificador: {identificador}</p>
                    <p className="subtitle is-5">Unidades Valorativas: {unidadValorativa}</p>
                    <p className="subtitle is-5">Nombre Materia: {nombreMateria}</p>
                    <p className="subtitle is-5">Estado: {textoAprobada}</p>
                    <p className="subtitle is-5">Requisito: {textoRequisito}</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-info is-light" onClick={cerrarModal()} >Cerrar</button>
                </footer>
            </div>
        </div>
    )
}

export default ModalMateria