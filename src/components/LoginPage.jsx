import React, { useState } from 'react';

function LoginPage({ onBackClick }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    // Basic email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in both email and password.');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (email === 'doctor@hospital.gov.my' && password === 'password123') {
            // alert('Login successful! Welcome, ' + email + '!');
            // In a real app, you'd redirect or set user state here
            window.location.href = 'https://gaia-triage-system.vercel.app/'; // Redirect
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    const handleGoogleSignIn = () => {
        alert('Google Sign-In initiated!');
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        alert('Forgot Password? A reset link would be sent to your email.');
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col md:flex-row w-screen min-h-screen relative font-sans">
            {/* Left Side - Branding */}
            <div
                className="relative w-full md:w-1/2 flex flex-col justify-between"
                style={{
                    backgroundImage: "url('/images/hospital-hallway-with-motion-effect.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 bg-[rgba(27,146,140,0.2)] z-10" />
                <div className="relative z-20 flex flex-col items-center p-6 md:p-10 gap-2 mt-12 md:mt-48 bg-white/50 rounded-xl shadow-lg mx-auto max-w-md">
                    <img src="/images/unnamed-removebg-preview.png" alt="Logo" className="w-full max-w-[300px] md:max-w-[569px]" />
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-[#DEF2F1] py-12 md:py-0 relative">
                {/* Back button */}
                <button 
                    onClick={onBackClick}
                    className="absolute top-6 left-6 md:top-8 md:left-8 p-2 rounded-full bg-white shadow-md text-[#1B928C] hover:bg-gray-100 transition-colors z-30"
                    aria-label="Back to landing page"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                </button>

                <div className="flex flex-col justify-center items-center p-6 md:p-12 gap-12 w-full max-w-[640px] min-h-[200px] bg-white border border-gray-200 rounded-xl shadow-sm mx-4 md:mx-0">
                    <div className="flex flex-col items-start gap-4 w-full max-w-[400px]">
                        <h1 className="text-3xl font-bold text-[#3F3F46]">Welcome!</h1>
                        <p className="font-semibold text-[#6B6B74]">Please enter your details to continue.</p>
                    </div>
                    <form className="flex flex-col justify-center items-center gap-8 w-full max-w-[400px]" onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[400px]">
                            {/* Email Input */}
                            <div className="flex flex-col items-start gap-1.5 w-full">
                                <label htmlFor="email" className="font-semibold text-sm text-[#6B6B74]">Email</label>
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-lg text-[#3F3F46] placeholder-[#6B6B74] focus:outline-none focus:border-[#1B928C] focus:ring-4 focus:ring-[#1B928C]/20"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input with Toggle */}
                            <div className="flex flex-col items-start gap-1.5 w-full">
                                <label htmlFor="password" className="font-semibold text-sm text-[#6B6B74]">Password</label>
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-lg text-[#3F3F46] placeholder-[#6B6B74] pr-11 focus:outline-none focus:border-[#1B928C] focus:ring-4 focus:ring-[#1B928C]/20"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#1B928C] rounded"
                                        onClick={togglePasswordVisibility}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            // Eye Slash Icon (password visible)
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" stroke="#6B6B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        ) : (
                                            // Eye Icon (password hidden)
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="#6B6B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="#6B6B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="flex items-center p-3 gap-2 w-full bg-red-50 rounded-md text-red-600 text-sm">
                                    <span>{error}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[400px]">
                            {/* Login Button */}
                            <button type="submit" className="w-full h-11 rounded-lg bg-[#1B928C] border border-[#1B928C] text-white font-medium text-lg shadow-sm hover:bg-[#157872] transition-colors">
                                Sign In
                            </button>

                            {/* Divider */}
                            <div className="w-full text-center text-sm text-[#6B6B74]">OR</div>

                            {/* Google Sign In */}
                            <button type="button" className="w-full h-11 rounded-lg bg-white border border-gray-200 text-[#3F3F46] font-medium text-lg shadow-sm hover:bg-gray-50 transition-colors" onClick={handleGoogleSignIn}>
                                <svg className="w-6 h-6 mr-2 inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                <span className="align-middle">Sign in with Google</span>
                            </button>
                        </div>

                        {/* Forgot Password Link */}
                        <a href="#" className="w-full text-center text-sm text-[#2563EB] hover:text-[#1D4ED8] hover:underline" onClick={handleForgotPassword}>
                            Forgot password?
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;