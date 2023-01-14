import axios from "axios";

const iniciaSesion = async () => {
    const peticion = await axios.get('https://reqres.in/api/login')
    console.log(peticion.data.data)

    
}

export{
    iniciaSesion
}