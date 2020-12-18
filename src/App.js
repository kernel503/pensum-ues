import data from './data/pensum-base'

console.log(data);
const ContenedorPensum = ({ data }) => {
  return (
    <div className="columns is-mobile m-2">

    </div>
  )
}

function App() {
  return (
    <div className="content p-5">
      <ContenedorPensum
        data={data} />
    </div>
  );
}

export default App;
