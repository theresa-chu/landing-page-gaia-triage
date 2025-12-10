import React from 'react';

function LandingAbout() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#3F3F46] mb-6">
                            Why Choose ClearStats?
                        </h2>
                        <p className="text-lg text-[#6B6B74] mb-6 leading-relaxed">
                            ClearStats is built by healthcare professionals for healthcare professionals. 
                            We understand the unique challenges of managing healthcare data and have created 
                            a solution that makes complex statistics clear and actionable.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Intuitive dashboard designed for busy healthcare workers",
                                "Customizable reports tailored to your facility's needs",
                                "Integration with existing hospital management systems",
                                "Dedicated support team with healthcare expertise"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-[#1B928C] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[#3F3F46]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="bg-[#DEF2F1] rounded-2xl p-8 md:p-12">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="font-semibold text-[#3F3F46]">Monthly Overview</h4>
                                    <span className="text-sm text-[#1B928C] font-medium">+12.5%</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-3 bg-[#DEF2F1] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1B928C] rounded-full" style={{width: '75%'}}></div>
                                    </div>
                                    <div className="h-3 bg-[#DEF2F1] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1B928C] rounded-full" style={{width: '60%'}}></div>
                                    </div>
                                    <div className="h-3 bg-[#DEF2F1] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1B928C] rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-[#1B928C]">847</div>
                                        <div className="text-sm text-[#6B6B74]">Patients</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[#1B928C]">120</div>
                                        <div className="text-sm text-[#6B6B74]">Admissions</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[#1B928C]">95%</div>
                                        <div className="text-sm text-[#6B6B74]">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingAbout;