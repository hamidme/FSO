
import data from './components/data';
import Notes from './components/Notes'

function App() {
  return (
    <div>
      {data.map((data) =><Notes key={data.id} {...data}/>)}
    </div>
  );
}

export default App;
