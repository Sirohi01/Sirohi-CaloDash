  import React, { useEffect, useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import Sidebar from './components/Sidebar';
  import Header from './components/Header';
  import CalorieForm from './components/CalorieForm';
  import CalorieList from './components/CalorieList';
  import DateSelector from './components/DateSelector';
  import CalorieChart from './components/CalorieChart';
  import SummaryPage from './components/SummaryPage';
  import WaterTracker from './components/WaterTracker';
  import WeightTracker from './components/WeightTracker';
  import BodyMeasurements from './components/BodyMeasurementForm';
  import GymModeWorkoutPage from './components/GymModeWorkoutPage';
  import Login from './components/auth/Login';
  import Signup from './components/auth/Signup';
  import dayjs from 'dayjs';
  import './styles/styles.css';
  import { setUser, logoutUser } from './features/user/userSlice';
  import { auth, onAuthStateChanged } from '../src/components/auth/firebase';

  function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [view, setView] = useState('tracker');
    const [authView, setAuthView] = useState('login');

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          }));
        } else {
          dispatch(logoutUser());
        }
      });

      return unsubscribe;
    }, [dispatch]);

    if (!user) {
      return authView === 'login' ? (
        <Login switchToSignup={() => setAuthView('signup')} />
      ) : (
        <Signup switchToLogin={() => setAuthView('login')} />
      );
    }

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
          {view === 'measurement' && <BodyMeasurements date={date} />}
          {view === 'gym' && <GymModeWorkoutPage />}
        </div>
      </div>
    );
  }

  export default App;