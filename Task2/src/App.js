import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './route';
import React from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        const Page = route.page;
                        return <Route key={index} path={route.path} element={<Page/>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
