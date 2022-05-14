import './App.css';
import { SearchBar } from './components/SearchBar';
import data from './data/mock.json';

function App() {
  return (
    <div className="container">
      <SearchBar data={data} placeholder={'Enter a product name...'} />

    </div>
  );
}

export default App;
