import React from 'react';

function LandingCallToAction({ onLoginClick }) {
    return (
        <section className="py-20 bg-[#1B928C] text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to See Your Data Clearly?
                </h2>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    Join hundreds of healthcare professionals who are transforming their operations with ClearStats.
                    Sign up today and unlock the power of your data.
                </p>
                <button 
                    onClick={onLoginClick}
                    className="px-10 py-4 bg-white text-[#1B928C] font-semibold text-xl rounded-lg shadow-lg hover:bg-[#DEF2F1] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                    Start Your Journey
                </button>
            </div>
        </section>
    );
}

export default LandingCallToAction;