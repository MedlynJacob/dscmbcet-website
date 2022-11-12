import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './pages/events/Events';
import Home from './pages/home/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="events" element={<Events />} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </div>
    );
}

export default App;
