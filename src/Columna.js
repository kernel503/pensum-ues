import CardMateria from './CardMateria';

const Columna = ({ ciclo, materias }) => {    
    return (
        <div className="column">
            {materias.map((cardMateria) => <CardMateria key={cardMateria.identificador} materia={cardMateria} />)}
        </div>
    )
}

export default Columna;