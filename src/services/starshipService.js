const BASE_URL = 'https://swapi.dev/api/starships/'
// starships?search=CR90 corvette

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        // console.log('Data: ', data)
        return data
    } catch (err) {
        console.log(err)
    }
}

const search = async (spaceshipName) => {
    try {
        const queryString = `?search=${spaceshipName}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        // console.log('Data: ', data)
        return data
    } catch (err) {
        console.log(err)
    }
}

export {index, search}