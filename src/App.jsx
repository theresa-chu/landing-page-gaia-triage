import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';

function App() {
    const [currentPage, setCurrentPage] = useState('landing');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleLoginClick = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage('login');
            setIsTransitioning(false);
        }, 500); // Transition duration
    };

    const handleBackToLanding = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage('landing');
            setIsTransitioning(false);
        }, 500); // Transition duration
    };

    return (
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentPage === 'landing' ? (
                <LandingPage onLoginClick={handleLoginClick} />
            ) : (
                <LoginPage onBackClick={handleBackToLanding} />
            )}
        </div>
    );
}

export default App;