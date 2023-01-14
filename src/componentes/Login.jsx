import React,{useEffect,useState} from 'react'
import { iniciaSesion } from '../funciones/funciones'
import './login.css'

const Login = () =>{
const [miLogin, setLogin] = useState("false");
const [email, setEmail] = useState("");
const [pas, setPas] = useState("");

function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value; 
    var txtpas = document.getElementById("txtpas").value; 
    if(txtusu.length===0 || txtpas.length===0){
        alert("complete los datos faltantes!!")
    }else{
    }
}
    useEffect(()=>{
        iniciaSesion()
    },[])
    return (
        <div>
            <div className='general'>
                <h1>App Chat</h1>
                <form action="">
                    <img className='user-logo' src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png" alt="" />
                             
                <div className='div-correo'>
                    <label htmlFor="">Correo Electronico</label>
                    <input className='correo' type="email" onChange={ (e) => setEmail(e.target.value)} name='correo'/>
                </div>
                <div className='div-contraseña'>
                    <label htmlFor="">Contraseña</label>
                    <input className='contraseña' type="password" onChange={ (e) => setPas(e.target.value)} name='contraseña'/>
                </div>
                <div className='nueva-cuenta'><a href="/cuenta">Crear nueva cuenta</a></div>
                <div className='botones'>
                <button className='btn-login' type='submit'>Iniciar Sesion</button>
                <button className='btn-reset' type='reset'>Cancelar</button>
                </div>
                </form>
            </div>
            
        </div>
        
      )
}


export default Login