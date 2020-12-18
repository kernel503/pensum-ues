const CardMateria = ({materia}) => {
    return (
        <div className="card mt-2">
            <div className="hoverTarget card-content has-background-grey-lighter py-3">
                <p contenteditable="true" className="subtitle has-text-centered is-family-sans-serif is-size-5 p-0">
                    ANS115
            </p>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                    <i className="hoverTarget fas fa-eye"></i>
                </p>
                <p className="card-footer-item mx-0 my-0 py-0">
                    <label className="checkbox">
                        <input type="checkbox" checked />
                    </label>
                </p>
            </footer>
        </div>
    )
}

export default CardMateria;