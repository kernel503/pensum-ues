import React, { useState } from 'react'
import Pensum from './data/pensum-base'
import Columna from './Columna';

const ContenedorPensum = ({ data, materiaFocus, setMateriaFocus }) => {
  return (
    <div className="columns is-flex-mobile" style={{ overflow: 'auto' }}>
      {
        data.map((ciclo, index) =>
          <Columna
            key={index}
            {...ciclo}
            materiaFocus={materiaFocus}
            setMateriaFocus={setMateriaFocus}
          />)
      }
    </div>
  )
}

const App = () => {
  const [materiaFocus, setMateriaFocus] = useState({})
  let data = Pensum

  if (localStorage.getItem('Pensum') !== null) {
    data = JSON.parse(localStorage.getItem('Pensum'))
    localStorage.setItem('materiaDisponibleCursar', true)    
  } else {
    localStorage.setItem('Pensum', JSON.stringify(Pensum))
    localStorage.setItem('TotalUnidadesValorativas', 0)
  }

  const limparStorage = () => (event) => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="content p-5">
      <p className="title is-2 has-text-centered">Ingeniería de Sistemas Informáticos - UES</p>
      <ContenedorPensum
        data={data}
        materiaFocus={materiaFocus}
        setMateriaFocus={setMateriaFocus}
      />
      <button title="Limpiar datos almacenados" onClick={limparStorage()} className="button is-danger is-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hoverTarget bi bi-trash-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
        </svg>
      </button>
    </div>
  );
}

export default App;