import React from 'react';

function LandingFooter() {
    return (
        <footer className="bg-[#3F3F46] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <img 
                    src="/images/unnamed-removebg-preview.png" 
                    alt="ClearStats Logo" 
                    className="h-12 w-auto mx-auto mb-6"
                />
                <p className="text-sm mb-4">
                    &copy; {new Date().getFullYear()} ClearStats. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6 text-sm">
                    <a href="#" className="hover:text-[#1B928C] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[#1B928C] transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-[#1B928C] transition-colors">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default LandingFooter;