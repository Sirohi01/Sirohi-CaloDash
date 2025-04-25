import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CalorieForm from './components/CalorieForm';
import CalorieList from './components/CalorieList';
import DateSelector from './components/DateSelector';
import CalorieChart from './components/CalorieChart';
import SummaryPage from './components/SummaryPage';
import WaterTracker from './components/WaterTracker';
import WeightTracker from './components/weightTracker';
import dayjs from 'dayjs';
import './styles/styles.css';
function App() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [view, setView] = useState('tracker');

  return (
    <div className="dashboard">
      <Sidebar setView={setView} view={view} />
      <div className="main">
        <Header />
        {view === 'tracker' && (
          <>
            <DateSelector date={date} setDate={setDate} />
            <CalorieForm date={date} />
            <CalorieList date={date} />
            <CalorieChart />
          </>
        )}
        {view === 'summary' && <SummaryPage />}
        {view === 'water' && <WaterTracker />}
        {view === 'weight' && <WeightTracker />}
      </div>
    </div>
  );
}

export default App;
