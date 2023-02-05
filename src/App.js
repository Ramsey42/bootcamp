import React from 'react';
import Heropage from './components/Heropage/Heropage';
import {  Route, Routes } from 'react-router';

import './App.css';
import General from './components/General/General';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div>

<Routes>
<Route  path="/" element={<Heropage/>} />
<Route  path="/info" element={<General/>} />
<Route  path="/experience" element={<Experience/>} />
</Routes>
</div>
  );
}

export default App;
