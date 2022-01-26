import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FitnessPage from './FitnessPage';
import NutritionPage from './NutritionPage';
import SleepPage from './SleepPage';
import MentalHealthPage from './MentalHealth';
import HomePage from './HomePage';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';

import Questions from './views/Questions/Questions.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>} />
      <Route path="/questions" element={<Questions/>} />
    </Routes>
  );
}

export default App;
