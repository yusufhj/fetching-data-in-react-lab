import { useState } from "react"

const StarshipSearch = (props) => {
    const [spaceshipName, setSpaceshipName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.fetchData(spaceshipName)
        setSpaceshipName('')
    }

    return (
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="spaceshipName">Search Term: </label>
                <input
                    type="text"
                    id="spaceshipName"
                    name="spaceshipName"
                    value={spaceshipName}
                    onChange={(e) => setSpaceshipName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default StarshipSearch