import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form action="http://localhost:3001/prueba" method="post">
        <input type="text" placeholder="Nombre" id="nombre" name="nombre" />
        <br/>
        <input type="text" placeholder="Nombre Hotel" id="hotel" name="hotel"/>
        <br/>
        <input type="email" placeholder="Correo" id="correo" name="correo"/>
        <br/>
        <textarea name="comentarios" id="comentarios" placeholder="Comentarios"></textarea>
        <br/>
        <input type="submit" value="Enviar" />
        <br/>
      </form>
    </div>
  );
}

export default App;
