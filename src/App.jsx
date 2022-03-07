import './App.css';
import Home from './components/home/Home.js';
import travelData from './data/db.json';

//task17

import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';
function App() {
  //send data to home to give it to tours throw props inside return
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={travelData} />} />
        <Route path="/city/:id" element={<TourDetails data={travelData} />} />
      </Routes>
   </>
  );}
  
export default App;