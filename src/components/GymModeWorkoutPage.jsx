    // GymModeWorkoutPage.jsx
    import React, { useState, useEffect } from 'react';
    import { FaDumbbell, FaPlay, FaPause, FaStopwatch } from 'react-icons/fa';
    import './GymModeWorkoutPage.css';

    const gymModes = {
    beginner: {
        description: "Ideal for newcomers. Focus on basic compound movements and proper form.",
        schedule: [
        {
            day: 'Monday',
            major: 'Chest',
            minor: 'Triceps',
            workout: [
            { name: 'Push Ups', video: 'https://www.youtube.com/embed/IODxDxX7oi4', sets: 3, reps: 12, theory: 'Push-ups strengthen the chest, shoulders, and triceps, enhancing upper body strength.' },
            { name: 'Chest Press (Machine)', video: 'https://www.youtube.com/embed/2z8JmcrW-As', sets: 3, reps: 10, theory: 'Chest presses target the pectoral muscles, aiding in building chest mass.' },
            { name: 'Incline Dumbbell Press', video: 'https://www.youtube.com/embed/8iPEnn-ltC8', sets: 3, reps: 10, theory: 'This exercise emphasizes the upper chest and shoulders.' },
            { name: 'Dumbbell Flys', video: 'https://www.youtube.com/embed/eozdVDA78K0', sets: 3, reps: 12, theory: 'Dumbbell flys isolate the chest muscles, promoting muscle growth.' },
            { name: 'Overhead Tricep Extension', video: 'https://www.youtube.com/embed/YbX7Wd8jQ-Q', sets: 3, reps: 10, theory: 'This movement targets the triceps, enhancing arm strength.' },
            { name: 'Tricep Kickbacks', video: 'https://www.youtube.com/embed/6SS6K3lAwZ8', sets: 3, reps: 12, theory: 'Tricep kickbacks isolate the triceps, improving muscle tone.' }
            ]
        },
        {
            day: 'Tuesday',
            major: 'Legs',
            minor: 'Core',
            workout: [
            { name: 'Bodyweight Squats', video: 'https://www.youtube.com/embed/aclHkVaku9U', sets: 3, reps: 15, theory: 'Squats develop lower body strength and stability.' },
            { name: 'Leg Press', video: 'https://www.youtube.com/embed/IZxyjW7MPJQ', sets: 3, reps: 12, theory: 'Targets quads, hamstrings, and glutes using machine support.' },
            { name: 'Lunges', video: 'https://www.youtube.com/embed/QOVaHwm-Q6U', sets: 3, reps: 12, theory: 'Improves balance and strengthens the legs.' },
            { name: 'Calf Raises', video: 'https://www.youtube.com/embed/-M4-G8p8fmc', sets: 3, reps: 20, theory: 'Strengthens the calf muscles for ankle and foot support.' },
            { name: 'Plank', video: 'https://www.youtube.com/embed/pSHjTRCQxIw', sets: 3, reps: '30s hold', theory: 'Activates the core for stability and strength.' },
            { name: 'Crunches', video: 'https://www.youtube.com/embed/Xyd_fa5zoEU', sets: 3, reps: 15, theory: 'Targets abdominal muscles to build core strength.' }
            ]
        },
        {
            day: 'Wednesday',
            major: 'Back',
            minor: 'Biceps',
            workout: [
            { name: 'Lat Pulldown', video: 'https://www.youtube.com/embed/CAwf7n6Luuc', sets: 3, reps: 12, theory: 'Builds upper back and lat muscles.' },
            { name: 'Seated Cable Row', video: 'https://www.youtube.com/embed/GZbfZ033f74', sets: 3, reps: 12, theory: 'Strengthens the mid-back and posture muscles.' },
            { name: 'Barbell Row', video: 'https://www.youtube.com/embed/vT2GjY_Umpw', sets: 3, reps: 10, theory: 'Works on back thickness and strength.' },
            { name: 'Dumbbell Curl', video: 'https://www.youtube.com/embed/sAq_ocpRh_I', sets: 3, reps: 12, theory: 'Isolates the biceps for arm definition.' },
            { name: 'Hammer Curl', video: 'https://www.youtube.com/embed/zC3nLlEvin4', sets: 3, reps: 12, theory: 'Targets both the biceps and forearms.' },
            { name: 'Chin-up', video: 'https://www.youtube.com/embed/T78xCiw_R6g', sets: 3, reps: 8, theory: 'Great compound movement that works both the back and biceps.' }
                ]
        },
        {
            day: 'Thursday',
            major: 'Chest',
            minor: 'Triceps',
            workout: [
            { name: 'Flat Bench Press', video: 'https://www.youtube.com/embed/gRVjAtPip0Y', sets: 3, reps: 10, theory: 'Strengthens the mid-pecs and triceps.' },
            { name: 'Incline Machine Press', video: 'https://www.youtube.com/embed/QZEqB6wUPxQ', sets: 3, reps: 10, theory: 'Emphasizes the upper chest.' },
            { name: 'Cable Crossover', video: 'https://www.youtube.com/embed/taI4XduLpTk', sets: 3, reps: 15, theory: 'Provides isolation and range for the chest.' },
            { name: 'Skull Crushers', video: 'https://www.youtube.com/embed/d_KZxkY_0cM', sets: 3, reps: 12, theory: 'Targets the triceps with controlled elbow movement.' },
            { name: 'Rope Tricep Pushdown', video: 'https://www.youtube.com/embed/2-LAMcpzODU', sets: 3, reps: 12, theory: 'Isolates the triceps with focus on the long head.' }
            ]
        },
        {
            day: 'Friday',
            major: 'Legs',
            minor: 'Shoulders',
            workout: [
            { name: 'Front Squats', video: 'https://www.youtube.com/embed/VfBOBhwXbro', sets: 3, reps: 12, theory: 'Focuses on quads and core balance.' },
            { name: 'Leg Curls', video: 'https://www.youtube.com/embed/SbSNUXPRkc8', sets: 3, reps: 12, theory: 'Strengthens hamstrings.' },
            { name: 'Shoulder Press', video: 'https://www.youtube.com/embed/B-aVuyhvLHU', sets: 3, reps: 10, theory: 'Targets the deltoid muscles.' },
            { name: 'Lateral Raises', video: 'https://www.youtube.com/embed/3VcKaXpzqRo', sets: 3, reps: 12, theory: 'Emphasizes side delts for broader shoulders.' },
            { name: 'Rear Delt Fly', video: 'https://www.youtube.com/embed/pYcpY20QaE8', sets: 3, reps: 12, theory: 'Hits rear delts and upper back.' }
            ]
        },
        {
            day: 'Saturday',
            major: 'Back',
            minor: 'Biceps',
            workout: [
            { name: 'Lat Pulldown', video: 'https://www.youtube.com/embed/SALxEARiMkw', sets: 3, reps: 10, theory: 'Targets the lats and helps improve upper back width.' },
            { name: 'Deadlifts', video: 'https://www.youtube.com/embed/op9kVnSso6Q', sets: 3, reps: 6, theory: 'Full-body movement that targets posterior chain and grip strength.' },
            { name: 'T-Bar Row', video: 'https://www.youtube.com/embed/KDEl3AmZbVE', sets: 3, reps: 10, theory: 'Builds thickness in the middle back.' },
            { name: 'Preacher Curl', video: 'https://www.youtube.com/embed/fIWP-FRFNU0', sets: 3, reps: 12, theory: 'Isolates the biceps with strict form.' },
            { name: 'EZ Bar Curl', video: 'https://www.youtube.com/embed/6LrOTcr595A', sets: 3, reps: 12, theory: 'Reduces wrist strain while hitting biceps.' }
            ]
        }
        ],
        stretching: [
            {
                name: 'Hamstring Stretch',
                image: '	https://cdn.mos.cms.futurecdn.net/FEyFsz4UsX7QvWf6RUsaAf.jpg',
                theory: 'Improves flexibility in the back of the thigh and reduces lower back pain.'
                },
                {
                name: 'Shoulder Stretch',
                image: 'https://tse1.mm.bing.net/th/id/OIP.0J9k3qB7_1XehZfMj-SFZgHaE8?rs=1&pid=ImgDetMain',
                theory: 'Enhances shoulder mobility and alleviates tension.'
                },
                {
                name: 'Quadriceps Stretch',
                image: 'https://tse3.mm.bing.net/th/id/OIP.MBeZjzmy9JF8vJc1GSDXugHaD4?w=768&h=403&rs=1&pid=ImgDetMain',
                theory: 'Stretches the front thigh muscles, improving flexibility.'
                },
                {
                name: 'Triceps Stretch',
                image: 'https://cdn.shopify.com/s/files/1/0090/4773/6378/files/Overhead_Tricep_Stretch.jpg?v=1669045972',
                theory: 'Targets the triceps, enhancing arm flexibility.'
                }
            ]

        
    }

    
    };

    const GymModeWorkoutPage = () => {
    const [selectedMode, setSelectedMode] = useState('beginner');
    const [timerRunning, setTimerRunning] = useState(false);
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let interval = null;
        if (timerRunning) {
        interval = setInterval(() => {
            setSeconds(prev => {
            if (prev <= 1) {
                clearInterval(interval);
                setTimerRunning(false);
                return 60;
            }
            return prev - 1;
            });
        }, 1000);
        }
        return () => clearInterval(interval);
    }, [timerRunning]);

    const mode = gymModes[selectedMode];

    return (
        <div className="gym-mode-container">
        <h1><FaDumbbell /> Choose Your Gym Mode</h1>
        <div className="mode-select-buttons">
            {Object.keys(gymModes).map((modeKey) => (
            <button
                key={modeKey}
                onClick={() => setSelectedMode(modeKey)}
                className={selectedMode === modeKey ? 'active' : ''}
            >
                {modeKey.charAt(0).toUpperCase() + modeKey.slice(1)}
            </button>
            ))}
        </div>

        <p className="mode-description">{mode.description}</p>

        <div className="routine">
            {mode.schedule.map((day) => (
            <div key={day.day} className="day-card">
                <h3>{day.day}</h3>
                <p><strong>Major:</strong> {day.major} | <strong>Minor:</strong> {day.minor}</p>
                {day.workout.map((exercise, i) => (
                <div key={i} className="exercise-block">
                    <h4>{exercise.name}</h4>
                    <iframe src={exercise.video} title={exercise.name} allowFullScreen></iframe>
                    <p>{exercise.sets} sets x {exercise.reps} reps</p>
                    <p className="exercise-theory">{exercise.theory}</p>
                </div>
                ))}
            </div>
            ))}
        </div>

        <h2>Stretching Guide</h2>
        <div className="stretching-guide">
            {mode.stretching.map((stretch, index) => (
            <div key={index} className="stretch-block">
                <img src={stretch.image} alt={stretch.name} />
                <p><strong>{stretch.name}</strong></p>
                <p>{stretch.theory}</p>
            </div>
            ))}
        </div>

        <div className="timer-section">
            <h2><FaStopwatch /> Rest Timer: {seconds}s</h2>
            <button onClick={() => setTimerRunning(!timerRunning)} className="timer-button">
            {timerRunning ? <FaPause /> : <FaPlay />} {timerRunning ? 'Pause' : 'Start'} Timer
            </button>
        </div>
        </div>
    );
    };

    export default GymModeWorkoutPage;