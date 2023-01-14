import React,{useEffect} from 'react'
import { iniciaSesion } from '../funciones/funciones'
import './login.css'

const Login = () =>{

    useEffect(()=>{
        iniciaSesion()
    },[])
    return (
        <div>
            <div className='general'>
                <h1>App Chat</h1>
                <form action="">
                    <img className='user-logo' src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png" alt="" />
                <div className='div-usuario'>
                    <label htmlFor="">Nombre de Usuario</label>            
                    <input className='usuario' type="text" name="" id="" />
                </div>
                <div className='div-correo'>
                    <label htmlFor="">Correo Electronico</label>
                    <input className='correo' type="email"/>
                </div>
                <div className='div-contraseña'>
                    <label htmlFor="">Contraseña</label>
                    <input className='contraseña' type="password" />
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