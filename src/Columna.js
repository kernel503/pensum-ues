import React from 'react'
import CardMateria from './CardMateria';

const Columna = ({ ciclo, materias, materiaFocus, setMateriaFocus }) => {    
    return (
        <div className="column is-justify-content-center">
            <p className='has-text-weight-bold has-text-centered'>{ciclo}</p>
            {materias.map((materia) =>
                <CardMateria
                    key={materia.identificador}
                    materia={materia}
                    materiaFocus={materiaFocus}
                    setMateriaFocus={setMateriaFocus}
                />)
            }
        </div>
    )
}

export default Columna;