import React from 'react';
  // Import JobCard component
import './index.css';  // Styling for Home component
import Header from '../Header';  // Navigation bar component

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <div className="main-content">
                    <h1>Welcome to JobApp</h1>
                    <p>Find your dream job or let the job find you!</p>
                </div>
            </div>
        </>
    );
}

export default Home;
