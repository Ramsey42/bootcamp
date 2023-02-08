import React from "react";
import Heropage from "./components/Heropage/Heropage";
import { Route, Routes } from "react-router";

import "./App.css";
import General from "./components/General/General";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Success from "./components/Success/Success";
import { store } from './Redux/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <div>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Heropage />} />
                    <Route path="/info" element={<General />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
