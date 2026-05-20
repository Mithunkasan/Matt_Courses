'use client'
import React, { useState, useEffect, useRef } from 'react';

const PythonFullStackLanding = () => {
    const containerRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    // Custom hooks mimicking Framer Motion's useScroll and useTransform
    const useScroll = () => {
        useEffect(() => {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };

            const handleResize = () => {
                setWindowHeight(window.innerHeight);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleResize);

            // Initial setup
            handleScroll();
            handleResize();

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return { scrollY };
    };

    const useTransform = (
        value: number,
        inputRange: number[],
        outputRange: number[],
        options: { ease?: (t: number) => number } = {}
    ) => {
        const { ease = (t: number) => t } = options;

        // Clamp function
        const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

        // Interpolate function
        const interpolate = (value: number, inputRange: number[], outputRange: number[]) => {
            if (inputRange.length !== outputRange.length) return outputRange[0];

            for (let i = 0; i < inputRange.length - 1; i++) {
                if (value >= inputRange[i] && value <= inputRange[i + 1]) {
                    const progress = (value - inputRange[i]) / (inputRange[i + 1] - inputRange[i]);
                    const easedProgress = ease(progress);

                    if (typeof outputRange[i] === 'number' && typeof outputRange[i + 1] === 'number') {
                        return outputRange[i] + (outputRange[i + 1] - outputRange[i]) * easedProgress;
                    }

                    return outputRange[i];
                }
            }

            if (value <= inputRange[0]) return outputRange[0];
            if (value >= inputRange[inputRange.length - 1]) return outputRange[outputRange.length - 1];

            return outputRange[0];
        };

        return interpolate(value, inputRange, outputRange);
    };

    // Easing functions
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    const easeOutQuart = (t: number) => {
        const t1 = t - 1;
        return 1 - t1 * t1 * t1 * t1;
    };

    // Initialize scroll tracking
    const { scrollY: currentScrollY } = useScroll();

    // Calculate scroll progress for 7 stages (0-6)
    const totalHeight = windowHeight * 7;
    const scrollProgress = Math.min(scrollY / (totalHeight - windowHeight), 1);
    const currentStage = Math.floor(scrollProgress * 6);
    const stageProgress = (scrollProgress * 6) % 1;

    // Animation calculations for each stage

    // Stage 0-1: Image expansion (small to full screen)
    const imageScale = useTransform(
        scrollY,
        [0, windowHeight],
        [0.3, 1],
        { ease: easeInOutCubic }
    );

    const imageBorderRadius = useTransform(
        scrollY,
        [0, windowHeight],
        [20, 0],
        { ease: easeOutQuart }
    );

    const imageBottom = useTransform(
        scrollY,
        [0, windowHeight],
        [50, 0],
        { ease: easeInOutCubic }
    );

    // Stage 1-2: Python text animation (left to center)
    const pythonX = useTransform(
        scrollY,
        [windowHeight, windowHeight * 2],
        [-200, 0],
        { ease: easeInOutCubic }
    );

    const pythonOpacity = useTransform(
        scrollY,
        [windowHeight, windowHeight * 2],
        [0, 1],
        { ease: easeInOutCubic }
    );

    // Stage 2-3: Full Stack text animation (right to center)
    const fullStackX = useTransform(
        scrollY,
        [windowHeight * 1.5, windowHeight * 2.5],
        [200, 0],
        { ease: easeInOutCubic }
    );

    const fullStackOpacity = useTransform(
        scrollY,
        [windowHeight * 1.5, windowHeight * 2.5],
        [0, 1],
        { ease: easeInOutCubic }
    );

    // Stage 3-4: Text convergence
    const pythonConvergeX = useTransform(
        scrollY,
        [windowHeight * 2.5, windowHeight * 3.5],
        [0, -100],
        { ease: easeInOutCubic }
    );

    const fullStackConvergeX = useTransform(
        scrollY,
        [windowHeight * 2.5, windowHeight * 3.5],
        [0, 100],
        { ease: easeInOutCubic }
    );

    // Stage 4-5: Text reverse (Python left, Full Stack right)
    const pythonReverseX = useTransform(
        scrollY,
        [windowHeight * 3.5, windowHeight * 4.5],
        [-100, -300],
        { ease: easeInOutCubic }
    );

    const fullStackReverseX = useTransform(
        scrollY,
        [windowHeight * 3.5, windowHeight * 4.5],
        [100, 300],
        { ease: easeInOutCubic }
    );

    // Stage 5-6: Background image transition
    const backgroundOpacity = useTransform(
        scrollY,
        [windowHeight * 4.5, windowHeight * 5.5],
        [0, 1],
        { ease: easeInOutCubic }
    );

    // Stage 6-7: Registration form fade in
    const formOpacity = useTransform(
        scrollY,
        [windowHeight * 5.5, windowHeight * 6.5],
        [0, 1],
        { ease: easeInOutCubic }
    );

    const formScale = useTransform(
        scrollY,
        [windowHeight * 5.5, windowHeight * 6.5],
        [0.8, 1],
        { ease: easeOutQuart }
    );

    // Text dimming for final stage
    const textDimOpacity = useTransform(
        scrollY,
        [windowHeight * 5.5, windowHeight * 6.5],
        [1, 0.3],
        { ease: easeInOutCubic }
    );

    // Calculate final positions combining all transformations
    const finalPythonX = scrollY <= windowHeight ? pythonX :
        scrollY <= windowHeight * 2.5 ? 0 :
            scrollY <= windowHeight * 3.5 ? pythonConvergeX :
                pythonReverseX;

    const finalFullStackX = scrollY <= windowHeight * 1.5 ? fullStackX :
        scrollY <= windowHeight * 2.5 ? 0 :
            scrollY <= windowHeight * 3.5 ? fullStackConvergeX :
                fullStackReverseX;

    const finalPythonOpacity = scrollY <= windowHeight ? pythonOpacity :
        scrollY <= windowHeight * 5.5 ? 1 : textDimOpacity;

    const finalFullStackOpacity = scrollY <= windowHeight * 1.5 ? fullStackOpacity :
        scrollY <= windowHeight * 5.5 ? 1 : textDimOpacity;

    // Form submission handler
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.experience) {
            return;
        }
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);

            setTimeout(() => {
                setSubmitStatus('');
                setFormData({ name: '', email: '', phone: '', experience: '' });
            }, 3000);
        }, 1500);
    };

    return (
        <>
            <div className="relative ">
                {/* Scroll container - creates scrollable height */}
                <div style={{ height: `${totalHeight}px` }} />

                {/* Fixed viewport */}
                <div className="fixed inset-0 bg-white overflow-hidden">

                    {/* Main hero image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                            transform: `scale(${imageScale})`,
                            borderRadius: `${imageBorderRadius}px`,
                            bottom: `${imageBottom}px`,
                            transformOrigin: 'center bottom',
                        }}
                    />

                    {/* Background transition image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                            opacity: backgroundOpacity,
                        }}
                    />

                    {/* Python text */}
                    <div
                        className="absolute top-1/2 left-1/2 text-6xl md:text-8xl font-black text-white select-none"
                        style={{
                            transform: `translate(-50%, -80%) translateX(${finalPythonX}px)`,
                            opacity: finalPythonOpacity,
                            textShadow: '2px 2px 20px rgba(0,0,0,0.7)',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        PYTHON
                    </div>
                    
                    {/* Full Stack text */}
                    <div
                        className="absolute top-1/2 left-1/2 text-4xl md:text-6xl font-black text-white select-none"
                        style={{
                            transform: `translate(-50%, -20%) translateX(${finalFullStackX}px)`,
                            opacity: finalFullStackOpacity,
                            textShadow: '2px 2px 20px rgba(0,0,0,0.7)',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        FULL STACK
                    </div>

                    {/* Registration form */}
                    <div
                        className="absolute inset-0 flex items-center justify-center p-4"
                        style={{
                            opacity: formOpacity,
                            transform: `scale(${formScale})`,
                        }}
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    Join Python Full Stack
                                </h2>
                                <p className="text-gray-600">
                                    Start your journey to becoming a full-stack developer
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                                    >
                                        <option value="">Select Experience Level</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                        <option value="expert">Expert</option>
                                    </select>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : submitStatus === 'success'
                                            ? 'bg-green-500 hover:bg-green-600'
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] hover:shadow-lg'
                                        }`}
                                >
                                    {isSubmitting
                                        ? 'Processing...'
                                        : submitStatus === 'success'
                                            ? 'Welcome to Python Full Stack! ✨'
                                            : 'Start Your Journey'
                                    }
                                </button>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <p className="text-green-800 text-sm text-center">
                                        🎉 Registration successful! Check your email for next steps.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="fixed bottom-8 right-8 z-50">
                        <div className="bg-black/20 backdrop-blur-sm rounded-full p-3">
                            <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-white/80 transition-transform duration-300"
                                    style={{
                                        transform: `scale(${Math.min(scrollProgress * 6, 1)})`,
                                    }}
                                />
                            </div>
                            <div className="text-white/80 text-xs text-center mt-2 font-medium">
                                Stage {Math.min(Math.floor(scrollProgress * 6) + 1, 6)}
                            </div>
                        </div>
                    </div>

                    {/* Scroll hint - only visible initially */}
                    {scrollY < 100 && (
                        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 text-center animate-bounce">
                            <div className="text-sm mb-2">Scroll to explore</div>
                            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PythonFullStackLanding;