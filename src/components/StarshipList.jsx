import StarshipCard from "./StarshipCard"

const StarshipList = (props) => {
    const { starships, count } = props
    console.log(starships)
    return (
        <section>
            <h2>Starships</h2>
            {/* <ul>
            {
                starships.map( (starship, index) => (
                    <li key={index}>
                        <h3>{starship.name}</h3>
                        <p>{starship.starship_class}</p>
                        <p>{starship.manufacturer}</p>
                        <p>{starship.model}</p>
                    </li>
                ))
            }
            </ul> */}
            <p>Number of result: {count}</p>
            <ul>
                {
                    starships.map((starship, index) => (
                        <StarshipCard key={index} starship={starship} />
                    ))
                }
            </ul>
        </section>
    )
}

export default StarshipList