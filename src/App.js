import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UdemyCourse from './components/UdemyCourse';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <a className="navbar-brand" href="/">
          <img src="./images/udemy.png" alt="Udemy logo" />
        </a>
        <h1 className="course-title">
          | Curso de React.js Completo
        </h1>
      </nav>
      <main className="main-content">
        <UdemyCourse />
      </main>
    </div>
  );
}

export default App;
