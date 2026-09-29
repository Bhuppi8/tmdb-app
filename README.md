🎬 TMDB Movie App — React

A movie browsing application built with React.js using real-world movie data from The Movie Database (TMDB) API.

This project was created as a practical React learning project to understand how a real-world React application is structured, how components communicate, how API data is fetched and displayed, and how application state and routing work together.

🚀 Features
🎥 Browse movies using real movie data
🔥 Display popular and currently playing movies
🎞️ Reusable movie card components
🔄 Fetch movie data from the TMDB API
🧭 Client-side page routing
🔍 Movie search functionality
📱 Responsive movie browsing layout
🎨 Styled using Tailwind CSS
🗃️ Global state management with Redux Toolkit
🖱️ Horizontal movie-list scrolling using mouse wheel
▶️ Movie/trailer viewing experience
🛠️ Tech Stack
React.js
JavaScript
Redux Toolkit
React Router
Tailwind CSS
TMDB API
Vite
Node.js
📚 React Concepts Covered

This project helped me practice and understand several important React concepts:

JSX

Using JSX to describe the UI and combine JavaScript logic with HTML-like syntax.

Components

Breaking the application into reusable components such as:

MovieCard
MovieList
Header
Sidebar
MainContainer
SecondaryContainer
Props

Passing data from parent components to child components.

For example:

<MovieCard
  posterPath={movie.poster_path}
  title={movie.title}
/>
State

Managing changing application data and UI state using React state and Redux.

Conditional Rendering

Rendering different UI elements depending on the current application state.

Array .map()

Rendering multiple movie cards from API data:

movies.map((movie) => (
  <MovieCard
    key={movie.id}
    posterPath={movie.poster_path}
    title={movie.title}
  />
))
useEffect

Handling side effects such as fetching movie data from an API when a component loads.

API Integration

Fetching real movie information from TMDB and displaying the returned data in the application.

React Router

Creating different pages/routes and navigating between them without a full page reload.

Redux Toolkit

Using Redux for global application state, including movie data and trailer information.

📂 Project Structure
src/
├── components/
│   ├── Body.jsx
│   ├── Browse.jsx
│   ├── Header.jsx
│   ├── MainContainer.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── SecondaryContainer.jsx
│
├── utils/
│   ├── constants.js
│   ├── moviesSlice.js
│   └── appStore.js
│
├── App.jsx
└── main.jsx

The exact folder structure may vary depending on the current version of the project.

⚙️ Getting Started
1. Clone the repository
git clone <your-repository-url>
2. Navigate to the project
cd <project-folder>
3. Install dependencies
npm install
4. Configure TMDB API

Create the required API configuration/environment variables for TMDB.

Example:

VITE_TMDB_API_KEY=your_api_key

Do not commit your API key or other secrets to GitHub.

5. Start the development server
npm run dev

The application will be available at the local development URL provided by Vite.

🎞️ API

Movie data is provided by The Movie Database (TMDB).

Official website:

https://www.themoviedb.org/