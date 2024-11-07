
const StarshipCard = (props) => {
    const { starship } = props
    return (
                <li>
                    <h2>{starship.name}</h2>
                    <p><strong>Model:</strong> {starship.model}</p>
                    <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
                    <p><strong>Class:</strong> {starship.starship_class}</p>
                </li>
    )
}

export default StarshipCard