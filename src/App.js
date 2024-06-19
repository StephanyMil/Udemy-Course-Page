import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UdemyCourse from './components/UdemyCourse';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <div className="container d-flex justify-content-between align-items-center"> {/* Adiciona container para flexbox */}
          <a className="navbar-brand d-flex" href="/">
            <img src="./images/udemy.png" alt="Udemy logo" />
          </a>
          <h1 className="navbar-title d-flex">
            | Curso de React.js Completo
          </h1>
        </div>
      </nav>
      <main className="main-content">
        <UdemyCourse />
      </main>
    </div>
  );
}

export default App;