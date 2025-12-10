import React from 'react';

function LandingHero({ onLoginClick }) {
    return (
        <section className="relative pt-20 md:pt-24">
            <div 
                className="relative min-h-[600px] md:min-h-[700px] flex items-center"
                style={{
                    backgroundImage: "url('/images/hospital-hallway-with-motion-effect.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(27,146,140,0.85)] to-[rgba(27,146,140,0.6)]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                            <img 
                                src="/images/unnamed-removebg-preview.png" 
                                alt="ClearStats Logo" 
                                className="w-48 md:w-64 mb-6"
                            />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Transform Healthcare Data Into 
                                <span className="text-[#DEF2F1]"> Clear Insights</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                                Empower your healthcare facility with advanced analytics and real-time statistics. 
                                Make informed decisions that improve patient outcomes and operational efficiency.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={onLoginClick}
                                    className="px-8 py-4 bg-white text-[#1B928C] font-semibold text-lg rounded-lg shadow-lg hover:bg-[#DEF2F1] transition-all duration-300 hover:shadow-xl transform mx-auto block"
                                >
                                    Get Started
                                </button>
                                {/* <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all duration-300">
                                    Learn More
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingHero;