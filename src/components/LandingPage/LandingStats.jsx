import React from 'react';

function LandingStats() {
    const stats = [
        { value: "500+", label: "Healthcare Facilities" },
        { value: "1M+", label: "Data Points Analyzed" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Support Available" }
    ];

    return (
        <section id="stats" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B928C] mb-2">
                                {stat.value}
                            </div>
                            <div className="text-[#6B6B74] font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LandingStats;