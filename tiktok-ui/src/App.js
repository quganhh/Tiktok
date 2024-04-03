import './App.css';
// import Login from './components/Login';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detailpage';
import Cart from './pages/Cartpage';

function App() {
    const [name, setName] = useState('Apple Flagship Store');
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Detail name={name} />} />
                <Route path="/cart" element={<Cart name={name} />} />
            </Routes>
        </div>
    );
}

export default App;
