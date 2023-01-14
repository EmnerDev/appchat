import axios from "axios";

const iniciaSesion = async () => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    console.log(peticion)

}

export{
    iniciaSesion
}