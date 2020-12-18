import data from './data/pensum-base'
import Columna from './Columna';

const ContenedorPensum = ({ data }) => {
  return (
    <div className="columns">
      {data.map((columna, index) => <Columna key={index} columna={index} {...columna} />)}
    </div>
  )
}

const App = () => {
  return (
    <div className="content p-5">
      <ContenedorPensum
        data={data} />
    </div>
  );
}

export default App;