import React, { useState } from 'react'
import Pensum from './data/pensum-base'
import Columna from './Columna';

const ContenedorPensum = ({ data }) => {
  const [materiaFocus, setMateriaFocus] = useState({})  
  return (
    <div className="columns">
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
  let data = Pensum

  if (localStorage.getItem('Pensum') !== null) {
    data = JSON.parse(localStorage.getItem('Pensum'))
    localStorage.setItem('materiaDisponibleCursar', true)
  } else {
    localStorage.setItem('Pensum', JSON.stringify(Pensum))
  }

  return (
    <div className="content p-5">
      <ContenedorPensum
        data={data} />
    </div>
  );
}

export default App;