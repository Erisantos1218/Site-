import React from 'react'
import './cardLogin.css'
function cardLogin() {
  return (
    <div class ='right-login'>
        <div class="card-login">
        <h1>LOGIN</h1>
        <div class="textfield">
               <label for= "usuario">Usuario</label>
               <input type="text" name="name" placeholder="usuario" />
    </div>
    <div class="textfield">
        <label for= "senha">senha</label>
        <input type="password" name="senha" placeholder="senha" />
</div>
<button class="btn-login">LOGIN</button>
</div>
    </div>
  )
}

export default cardLogin