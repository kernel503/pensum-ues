const CardMateria = ({ materia, columna }) => {
    const { abreviatura, aprobada, identificador } = materia
    let inputCheckboxAprobada;

    if (aprobada) {
        inputCheckboxAprobada = <input type="checkbox" defaultChecked />
    }
    else {
        inputCheckboxAprobada = <input type="checkbox" />
    }

    const onClickCheckbox = (identificador) => (event) => {
        console.log(event)
        console.log(identificador)
        console.log(columna)
    }

    return (
        <div className="card mt-2">
            <div className="hoverTarget card-content has-background-grey-lighter py-3 px-0">
                <p className="subtitle has-text-centered is-family-sans-serif is-size-5 p-0">
                    {abreviatura}
                </p>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item mx-0 my-0 py-3">
                    <i className="hoverTarget fas fa-eye"></i>
                </p>
                <p className="card-footer-item mx-0 my-0 py-3">
                    <label className="checkbox" onChange={onClickCheckbox(columna)}>
                        {inputCheckboxAprobada}
                    </label>
                </p>
            </footer>
        </div>
    )
}

export default CardMateria;