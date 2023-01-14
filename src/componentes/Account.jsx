import React from 'react'

const Account = () => {
  return (
    <div>
        <div className='general'>
                <h1>Crear Cuenta</h1>
                <form action="">
                <div className='subir-foto'>
                    <label htmlFor="">Foto</label>
                    <input className='foto' type="file" />
                </div>   
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
                <div className='botones'>
                <button className='btn-login' type='submit'>Crear</button>                
                <a type='button' href="/">Atras</a>
                
                </div>
                </form>
            </div>
    </div>
  )
}

export default Account