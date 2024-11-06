const BASE_URL = 'https://swapi.dev/api/starships/'

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        console.log('Data: ', data)
        return data
    } catch (err) {
        console.log(err)
    }
}

export {index}