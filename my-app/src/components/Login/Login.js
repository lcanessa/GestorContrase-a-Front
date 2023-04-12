import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../../styles/styles.css"

function Login() {

  const [mensajeError, setMensajeError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Ejemplo de usuario para login (desp va a una api)
  const usuarios = [
    {
      nombreUsuario: "user1",
      password: "pass1"
    },
    {
      nombreUsuario: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    user: "Usuario incorrecto",
    pass: "Contraseña incorrecta"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { user, pass } = document.forms[0];

    
    const userData = usuarios.find((us) => us.nombreUsuario === user.value);

   
    if (userData) {
      if (userData.password !== pass.value) {        
        setMensajeError({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {     
      setMensajeError({ name: "user", message: errors.user });
    }
  };

  // codigo para el error
  const renderErrorMessage = (name) =>
    name === mensajeError.name && (
      <div className="error">{mensajeError.message}</div>
    );

  // codigo render del formulario para el login
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="user" required />
          {renderErrorMessage("user")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Iniciar Sesión</div>
        {isSubmitted ? <div>Usuario ha iniciado sesión correctamente</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
