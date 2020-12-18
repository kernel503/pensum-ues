import CardMateria from './CardMateria';

const Columna = ({ ciclo, materias, columna }) => {
    return (
        <div className="column">
            <p className='has-text-weight-bold has-text-centered'>{ciclo}</p>
            {materias.map((cardMateria, index) => <CardMateria key={cardMateria.identificador} fila={index} columna={columna} materia={cardMateria} />)}
        </div>
    )
}

export default Columna;