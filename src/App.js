import React, { useState } from 'react';
import './App.css';

// components
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import ProjectItems from './components/ProjectItems';
import Footer from './components/Footer';

function App() {
    const [selectItem, setSelectItem] = useState('all');
    return (
        <div className="App">
            <Header />
            <Hashtag selectItem={selectItem} setSelectItem={setSelectItem} />
            <ProjectItems selectItem={selectItem} />
            <Footer />
        </div>
    );
}

export default App;
