import React from 'react';
import LandingNavbar from '../components/LandingPage/LandingNavbar';
import LandingHero from '../components/LandingPage/LandingHero';
import LandingStats from '../components/LandingPage/LandingStats';
import LandingFeatures from '../components/LandingPage/LandingFeatures';
import LandingAbout from '../components/LandingPage/LandingAbout';
import LandingTeam from '../components/LandingPage/LandingTeam';
import LandingCallToAction from '../components/LandingPage/LandingCallToAction';
import LandingFooter from '../components/LandingPage/LandingFooter';

function LandingPage({ onLoginClick }) {
    return (
        <div className="min-h-screen bg-[#DEF2F1] font-sans">
            <LandingNavbar onLoginClick={onLoginClick} />
            <LandingHero onLoginClick={onLoginClick} />
            <LandingStats />
            <LandingFeatures />
            <LandingAbout />
            <LandingTeam />
            <LandingCallToAction onLoginClick={onLoginClick} />
            <LandingFooter />
        </div>
    );
}

export default LandingPage;