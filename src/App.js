import React from 'react';
import './App.css';

// components
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import ProjectItems from './components/ProjectItems';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hashtag />
            <ProjectItems />
            <Footer />
        </div>
    );
}

export default App;
