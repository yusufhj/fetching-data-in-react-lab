import './app.css'
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { useState } from 'react';

const App = () => {
  const [starships, setStarships] = useState([])

  return (
    <h1>Hello world!</h1>
  );
}

export default App