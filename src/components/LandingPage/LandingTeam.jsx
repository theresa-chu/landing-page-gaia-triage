import React from 'react';

function LandingTeam() {
    const teamMembers = [
        { name: "Adzrul", photo: "/images/A.jpg" },
        { name: "Eli", photo: "/images/E.jpg" },
        { name: "Hafizan", photo: "/images/H.jpg" },
        { name: "Jason", photo: "/images/J.jpg" },
        { name: "Theresa", photo: "/images/T.jpg" },
    ];

    return (
        <section id="team" className="py-20 bg-[#DEF2F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3F3F46] mb-4">
                        Meet Our Dedicated Team
                    </h2>
                    <p className="text-lg text-[#6B6B74] max-w-2xl mx-auto">
                        Behind ClearStats is a passionate team committed to revolutionizing healthcare data analysis.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[200px]">
                            <img 
                                src={member.photo} 
                                alt={member.name} 
                                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#1B928C]" // Placeholder styling
                            />
                            <h3 className="text-xl font-semibold text-[#3F3F46]">
                                {member.name}
                            </h3>
                            {/* You can add roles here later if desired */}
                            {/* <p className="text-sm text-[#6B6B74]">Role Title</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LandingTeam;