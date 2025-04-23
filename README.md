https://sirohi01.github.io/Sirohi-CaloDash/
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Sirohi-CaloDash
This project is a full-stack web application built with React, Redux, and CSS to manage and track daily calorie intake. The application allows users to log their food items, track calories, view historical data, and analyze their diet trends.
Key Features:

Calorie Tracker: Users can log daily food intake with calories, which are stored and tracked by date.

Detailed Item Breakdown: Click on specific dates to see a breakdown of the foods consumed with images and their calorie values.

Visual Data Representation: Includes a Bar Chart to show daily calorie consumption, updated dynamically.

Responsive Dashboard: Optimized for both mobile and desktop views with a clean and user-friendly interface.

Search and Edit Functionality: Users can search for past entries, edit them, and remove incorrect logs.

Customizable UI: The interface is styled using CSS with an orange and white color palette for a modern, clean look.

Technologies Used:
Frontend:

React: For building the user interface and managing state.

Redux: For global state management and handling data flow across the app.

CSS: For styling and UI design.

Chart.js: For generating dynamic charts to visualize the calorie data.

Project Goals:
Track and manage daily calorie intake: Provide users with an easy way to monitor their daily food consumption and calorie intake.

Data visualization: Display calorie intake trends through charts and summaries to help users make informed decisions about their health.

Personalized experience: Allow users to edit, delete, and track their food logs with images and detailed information.

How it Works:
User Input: Users can enter food items and their calorie values through a simple form interface.

Data Storage: Calorie data is saved and organized by date.

Charting and Visualization: A Bar Chart shows the total calories for each day, and a summary page provides an overview of total calorie consumption for each date.

Detailed Breakdown: When clicking on any date in the summary, users can view detailed information on the foods consumed with images.

Edit and Delete: Users have the ability to edit or delete their entries as needed.

Challenge: Managing a dynamic dataset of calorie entries, especially displaying data in an organized and scalable manner.

Solution: Utilized Redux for global state management to ensure smooth handling of the entries and ensure real-time updates on the dashboard.

Challenge: Visualizing calorie data efficiently while maintaining responsiveness across different devices.

Solution: Employed responsive design principles and used Chart.js for an interactive and visually appealing chart.

Key Learnings:
State Management with Redux: Gained experience in managing global states and dispatching actions across components.

Data Visualization: Used Chart.js to build an intuitive chart that tracks user progress.

UI/UX Design: Focused on creating a clean, modern, and user-friendly interface with a simple color scheme and smooth interactions.

Responsive Design: Ensured the app is mobile-friendly, providing users with an optimal experience across all devices.
>>>>>>> 2f72807bc3bc975a5f2dfefc663d6d2abd7fcf0e
