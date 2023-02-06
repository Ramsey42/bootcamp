import React from 'react';
import Heropage from './components/Heropage/Heropage';
import {  Route, Routes } from 'react-router';

import { Provider } from "react-redux";
import store from './Redux/store';

import './App.css';
import General from './components/General/General';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div>
<Provider store={store}>
<Routes>
<Route  path="/" element={<Heropage/>} />
<Route  path="/info" element={<General/>} />
<Route  path="/experience" element={<Experience/>} />
</Routes>
</Provider>
</div>
  );
}

export default App;
