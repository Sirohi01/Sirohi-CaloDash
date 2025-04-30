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
            },
            moderate: {
                description: "For intermediate lifters focusing on progressive overload and muscle balance.",
                schedule: [
                {
                    day: 'Monday',
                    major: 'Chest',
                    minor: 'Triceps',
                    workout: [
                    { name: 'Incline Barbell Press', video: 'https://www.youtube.com/embed/8iPEnn-ltC8', sets: 4, reps: 10, theory: 'Targets the upper chest and shoulders with barbell control.' },
                    { name: 'Flat Dumbbell Press', video: 'https://www.youtube.com/embed/VmB1G1K7v94', sets: 4, reps: 8, theory: 'Enhances chest size and unilateral strength.' },
                    { name: 'Cable Crossover', video: 'https://www.youtube.com/embed/taI4XduLpTk', sets: 3, reps: 12, theory: 'Isolates the chest muscles through full range of motion.' },
                    { name: 'Close-Grip Bench Press', video: 'https://www.youtube.com/embed/LfyQBUKR8SE', sets: 3, reps: 10, theory: 'Works chest and triceps using a narrow grip.' },
                    { name: 'Triceps Dips', video: 'https://www.youtube.com/embed/0326dy_-CzM', sets: 3, reps: 12, theory: 'Effective bodyweight movement for triceps development.' }
                    ]
                },
                {
                    day: 'Tuesday',
                    major: 'Back',
                    minor: 'Biceps',
                    workout: [
                    { name: 'Deadlift', video: 'https://www.youtube.com/embed/op9kVnSso6Q', sets: 4, reps: 6, theory: 'Builds strength and mass in the posterior chain.' },
                    { name: 'Lat Pulldown', video: 'https://www.youtube.com/embed/CAwf7n6Luuc', sets: 4, reps: 10, theory: 'Targets the lats and upper back.' },
                    { name: 'Seated Row', video: 'https://www.youtube.com/embed/GZbfZ033f74', sets: 3, reps: 12, theory: 'Works the middle back and rhomboids.' },
                    { name: 'Barbell Curl', video: 'https://www.youtube.com/embed/kwG2ipFRgfo', sets: 3, reps: 10, theory: 'Mass builder for the biceps.' },
                    { name: 'Hammer Curl', video: 'https://www.youtube.com/embed/zC3nLlEvin4', sets: 3, reps: 12, theory: 'Targets the brachialis and enhances arm width.' }
                    ]
                },
                {
                    day: 'Wednesday',
                    major: 'Core WorkOut',
                    minor: 'Treadmill Walk',
                    workout: [
                        { name: 'Plank', video: 'https://www.youtube.com/embed/pSHjTRCQxIw', sets: 3, reps: '60 sec hold', theory: 'Builds core endurance and spinal stability.' },
                        { name: 'Russian Twists', video: 'https://www.youtube.com/embed/wkD8rjkodUI', sets: 3, reps: 20, theory: 'Engages obliques and improves rotational strength.' },
                        { name: 'Hanging Leg Raise', video: 'https://www.youtube.com/embed/l4kQd9eWclE', sets: 3, reps: 12, theory: 'Targets lower abs and hip flexors.' },
                        { name: 'Mountain Climbers', video: 'https://www.youtube.com/embed/cnyTQDSE884', sets: 3, reps: '30 sec', theory: 'Boosts cardiovascular endurance and core stability.' },
                        { name: 'Bicycle Crunches', video: 'https://www.youtube.com/embed/Iwyvozckjak', sets: 3, reps: 20, theory: 'Works both rectus abdominis and obliques effectively.' }
                    ]
                },
                {
                    day: 'Thursday',
                    major: 'Legs',
                    minor: '',
                    workout: [
                    { name: 'Barbell Squat', video: 'https://www.youtube.com/embed/ultWZbUMPL8', sets: 4, reps: 8, theory: 'Fundamental compound movement for leg strength and mass.' },
                    { name: 'Leg Press', video: 'https://www.youtube.com/embed/IZxyjW7MPJQ', sets: 4, reps: 10, theory: 'Targets quadriceps, glutes, and hamstrings under load.' },
                    { name: 'Leg Curl', video: 'https://www.youtube.com/embed/1Tq3QdYUuHs', sets: 3, reps: 12, theory: 'Isolates the hamstrings.' },
                    { name: 'Walking Lunges', video: 'https://www.youtube.com/embed/QOVaHwm-Q6U', sets: 3, reps: 20, theory: 'Enhances balance, coordination, and single-leg strength.' },
                    { name: 'Standing Calf Raise', video: 'https://www.youtube.com/embed/k8ipHzKeAkQ', sets: 4, reps: 15, theory: 'Strengthens and defines the calf muscles.' }
                    ]
                },
                {
                    day: 'Friday',
                    major: 'Shoulders',
                    minor: 'Traps',
                    workout: [
                    { name: 'Overhead Press', video: 'https://www.youtube.com/embed/qEwKCR5JCog', sets: 4, reps: 8, theory: 'Primary movement for shoulder mass and power.' },
                    { name: 'Lateral Raise', video: 'https://www.youtube.com/embed/3VcKaXpzqRo', sets: 3, reps: 12, theory: 'Targets the medial deltoids for width.' },
                    { name: 'Rear Delt Fly', video: 'https://www.youtube.com/embed/pYcpY20QaE8', sets: 3, reps: 12, theory: 'Strengthens posterior delts and improves posture.' },
                    { name: 'Barbell Shrug', video: 'https://www.youtube.com/embed/9efgcAjQe7E', sets: 4, reps: 15, theory: 'Builds trapezius muscles for upper back thickness.' },
                    { name: 'Front Raise', video: 'https://www.youtube.com/embed/-t7fuZ0KhDA', sets: 3, reps: 10, theory: 'Isolates the front delts and improves shoulder aesthetics.' }
                    ]
                },
                {
                    day: 'Saturday',
                    major: 'Arms',
                    minor: '',
                    workout: [
                    { name: 'EZ Bar Curl', video: 'https://www.youtube.com/embed/6LrOTcr595A', sets: 4, reps: 10, theory: 'Reduces wrist strain while targeting biceps.' },
                    { name: 'Skull Crushers', video: 'https://www.youtube.com/embed/d_KZxkY_0cM', sets: 4, reps: 10, theory: 'Isolates the triceps with controlled movement.' },
                    { name: 'Preacher Curl', video: 'https://www.youtube.com/embed/1Tq3QdYUuHs', sets: 3, reps: 12, theory: 'Eliminates momentum to focus on biceps.' },
                    { name: 'Cable Triceps Pushdown', video: 'https://www.youtube.com/embed/2-LAMcpzODU', sets: 3, reps: 12, theory: 'Adds constant resistance to the triceps.' },
                    { name: 'Concentration Curl', video: 'https://www.youtube.com/embed/0AUGkch3tzc', sets: 3, reps: 12, theory: 'Provides focused tension for peak contraction.' }
                    ]
                },
                {
                    day: 'Sunday',
                    major: 'Rest',
                    minor: 'Do Some Walking',
                    workout: []
                }
                ],
                stretching: [
                {
                    name: 'Hamstring Stretch',
                    image: 'https://cdn.mos.cms.futurecdn.net/FEyFsz4UsX7QvWf6RUsaAf.jpg',
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
            },
            advanced: {
                description: "Challenging routines for experienced lifters focused on hypertrophy and intensity techniques.",
                schedule: [
                {
                    day: 'Monday',
                    major: 'Chest',
                    minor: 'Triceps',
                    workout: [
                    { name: 'Flat Barbell Bench Press', video: 'https://www.youtube.com/embed/gRVjAtPip0Y', sets: 5, reps: 6, theory: 'Heavy compound for overall chest strength.' },
                    { name: 'Incline Dumbbell Press', video: 'https://www.youtube.com/embed/8iPEnn-ltC8', sets: 4, reps: 8, theory: 'Focuses on upper chest and stabilizer muscles.' },
                    { name: 'Chest Dips', video: 'https://www.youtube.com/embed/2z8JmcrW-As', sets: 3, reps: 12, theory: 'Bodyweight exercise that isolates the chest.' },
                    { name: 'Overhead Tricep Extension', video: 'https://www.youtube.com/embed/YbX7Wd8jQ-Q', sets: 4, reps: 10, theory: 'Isolates triceps, good for hypertrophy.' },
                    { name: 'Weighted Bench Dips', video: 'https://www.youtube.com/embed/HEeT2sbmcXc', sets: 4, reps: 10, theory: 'Advanced tricep and chest isolation with added load.' }
                    ]
                },
                {
                    "day": "Tuesday",
                    "major": "Back",
                    "minor": "Biceps",
                    "workout": [
                        { "name": "Deadlift", "video": "https://www.youtube.com/embed/ytGaGIn3SjE", "sets": 5, "reps": 5, "theory": "Full body compound lift emphasizing posterior chain." },
                        { "name": "Bent Over Barbell Row", "video": "https://www.youtube.com/embed/vT2GjY_Umpw", "sets": 4, "reps": 8, "theory": "Targets upper and mid-back." },
                        { "name": "Lat Pulldown", "video": "https://www.youtube.com/embed/CAwf7n6Luuc", "sets": 4, "reps": 10, "theory": "Focuses on lat development." },
                        { "name": "Barbell Curl", "video": "https://www.youtube.com/embed/kwG2ipFRgfo", "sets": 4, "reps": 10, "theory": "Builds overall bicep mass." },
                        { "name": "Concentration Curl", "video": "https://www.youtube.com/embed/kwG2ipFRgfo", "sets": 3, "reps": 12, "theory": "Isolates the biceps peak." }
                        ]
                    },
                    {
                        "day": "Wednesday",
                        "major": "Legs",
                        "minor": "Calves",
                        "workout": [
                        { "name": "Back Squat", "video": "https://www.youtube.com/embed/ultWZbUMPL8", "sets": 5, "reps": 6, "theory": "Primary compound for leg strength and growth." },
                        { "name": "Leg Press", "video": "https://www.youtube.com/embed/IZxyjW7MPJQ", "sets": 4, "reps": 10, "theory": "Builds quad and glute strength with heavy load." },
                        { "name": "Romanian Deadlift", "video": "https://www.youtube.com/embed/hQgFixeXdZo", "sets": 4, "reps": 8, "theory": "Focuses on hamstring and glute development." },
                        { "name": "Walking Lunges", "video": "https://www.youtube.com/embed/QOVaHwm-Q6U", "sets": 3, "reps": 12, "theory": "Enhances unilateral leg strength and balance." },
                        { "name": "Standing Calf Raises", "video": "https://www.youtube.com/embed/YMmgqO8Jo-k", "sets": 4, "reps": 15, "theory": "Targets calf muscles for growth and endurance." }
                        ]
                    },
                    {
                        "day": "Thursday",
                        "major": "Shoulders",
                        "minor": "Traps",
                        "workout": [
                        { "name": "Overhead Barbell Press", "video": "https://www.youtube.com/embed/2yjwXTZQDDI", "sets": 4, "reps": 8, "theory": "Primary shoulder press for size and strength." },
                        { "name": "Arnold Press", "video": "https://www.youtube.com/embed/vj2w851ZHRM", "sets": 4, "reps": 10, "theory": "Targets all heads of the deltoid." },
                        { "name": "Lateral Raises", "video": "https://www.youtube.com/embed/3VcKaXpzqRo", "sets": 4, "reps": 12, "theory": "Builds width by isolating the lateral deltoid." },
                        { "name": "Face Pulls", "video": "https://www.youtube.com/embed/rep-qVOkqgk", "sets": 3, "reps": 12, "theory": "Improves posture and targets rear delts." },
                        { "name": "Barbell Shrugs", "video": "https://www.youtube.com/embed/NAqCVe2mwzM", "sets": 4, "reps": 12, "theory": "Develops upper traps for a stronger neckline." }
                        ]
                    },
                    {
                        "day": "Friday",
                        "major": "Arms",
                        "minor": "Core",
                        "workout": [
                        { "name": "EZ Bar Curl", "video": "https://www.youtube.com/embed/6LrOTcr595A", "sets": 4, "reps": 10, "theory": "Reduces wrist strain while targeting biceps." },
                        { "name": "Skull Crushers", "video": "https://www.youtube.com/embed/d_KZxkY_0cM", "sets": 4, "reps": 10, "theory": "Targets triceps with isolated tension." },
                        { "name": "Preacher Curl", "video": "https://www.youtube.com/embed/fIWP-FRFNU0", "sets": 3, "reps": 12, "theory": "Emphasizes the bicep peak with strict form." },
                        { "name": "Cable Tricep Pushdown", "video": "https://www.youtube.com/embed/2-LAMcpzODU", "sets": 4, "reps": 12, "theory": "Great finisher for triceps." },
                        { "name": "Hanging Leg Raise", "video": "https://www.youtube.com/embed/gMICiXRHcL4", "sets": 4, "reps": 15, "theory": "Builds lower abs and hip flexors." }
                        ]
                    },
                    {
                        "day": "Saturday",
                            "major": "Cardio",
                            "minor": "Mobility & Core",
                            "workout": [
                                {
                                "name": "Treadmill HIIT",
                                "video": "https://www.youtube.com/embed/ml6cT4AZdqI",
                                "sets": 1,
                                "reps": "20 min",
                                "theory": "Boosts cardiovascular endurance and fat burning through intervals."
                                },
                                {
                                "name": "Kettlebell Swings",
                                "video": "https://www.youtube.com/embed/sSESeQAir2M",
                                "sets": 3,
                                "reps": 20,
                                "theory": "Explosive movement that enhances power and cardio fitness."
                                },
                                {
                                "name": "Mountain Climbers",
                                "video": "https://www.youtube.com/embed/cnyTQDSE884",
                                "sets": 3,
                                "reps": 30,
                                "theory": "Full-body movement focusing on cardio and core engagement."
                                },
                                {
                                "name": "Plank to Push-Up",
                                "video": "https://www.youtube.com/embed/56vUOad6Irs",
                                "sets": 3,
                                "reps": 12,
                                "theory": "Improves core strength and shoulder stability."
                                },
                                {
                                "name": "Yoga Flow or Mobility Routine",
                                "video": "https://www.youtube.com/embed/L_xrDAtykMI",
                                "sets": 1,
                                "reps": "15-20 min",
                                "theory": "Active recovery to enhance flexibility and reduce muscle soreness."
                                }
                        ] 
                    },
                    {
                        day: 'Sunday',
                        major: 'Rest',
                        minor: 'Do Some Walking',
                        workout: []
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