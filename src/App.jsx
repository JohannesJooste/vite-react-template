import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PersonProfile from './pages/PersonProfile/PersonProfile';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='person/' element={<PersonProfile/>} />
                <Route path='privacy-policy/' element={<PrivacyPolicy />}/>
            </Routes>
        </Router>
    );
};

export default App;
