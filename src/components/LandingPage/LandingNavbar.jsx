import React from 'react';

function LandingNavbar({ onLoginClick }) {
    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <div className="flex items-center">
                        <img 
                            src="/images/unnamed-removebg-preview.png" 
                            alt="ClearStats Logo" 
                            className="h-10 md:h-14 w-auto"
                        />
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-[#3F3F46] hover:text-[#1B928C] font-medium transition-colors">Features</a>
                        <a href="#stats" className="text-[#3F3F46] hover:text-[#1B928C] font-medium transition-colors">Statistics</a>
                        <a href="#about" className="text-[#3F3F46] hover:text-[#1B928C] font-medium transition-colors">About</a>
                    </div>
                    <button 
                        onClick={onLoginClick}
                        className="px-6 py-2.5 bg-[#1B928C] text-white font-medium rounded-lg shadow-sm hover:bg-[#157872] transition-all duration-300 hover:shadow-md"
                    >
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default LandingNavbar;