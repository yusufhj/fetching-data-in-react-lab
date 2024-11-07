import './app.css'
import { useEffect, useState } from 'react';
import * as starshipServices from './services/starshipService'
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';


const App = () => {
  const [starships, setStarships] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipServices.index()
      const starships = data.results.map((starship) => ({
        name: starship.name,
        starship_class: starship.starship_class,
        manufacturer: starship.manufacturer,
        model: starship.model,
      }))
      setCount(data.count)
      setStarships(starships)
      // console.log('Starships: ', starships)
    }
    fetchDefaultData()
    
  }, []);

  const fetchData = async (spaceshipName) => {
    const data = await starshipServices.search(spaceshipName)
    const starships = data.results.map((starship) => ({
      name: starship.name,
      starship_class: starship.starship_class,
      manufacturer: starship.manufacturer,
      model: starship.model,
    }))
    setCount(data.count)
    setStarships(starships)
    // console.log('Starships: ', starships)
  }


  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starships={starships} count={count} />
    </main>
  );
}

export default App