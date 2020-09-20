import React from 'react';
import './App.css';

// components
import Header from './components/Header'
import ProjectItems from './components/ProjectItems'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectItems />
      <Footer />
    </div>
  );
}

export default App;
