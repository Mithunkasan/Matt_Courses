// app/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({
            email: '',
            fullName: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-4 px-3 sm:px-6 lg:px-8">
         <motion.div
    className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-3">
                    {/* Left Column - Contact Form */}
                    <div className="bg-white p-5 lg:col-span-7">
                        <div className="mb-4">
                            <h1 className="text-lg font-bold text-gray-900 mb-1">
                                Send us a Message
                            </h1>
                            <p className="text-xs text-gray-600">
                                We'll get back to you within 24 hours
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Tell us more about your requirements..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400 text-sm"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-all duration-200 hover:scale-[1.01] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 text-sm"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="bg-blue-900 p-5 lg:col-span-3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-3">
                                Contact Info
                            </h2>

                            <div className="relative mb-3 flex justify-center items-center h-24 bg-white/10 rounded-md p-2">
                                <img
                                    src="/logo.png"
                                    alt="MATT ACADEMY Logo"
                                    className="max-h-full max-w-full object-contain rounded-md transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="space-y-3 text-xs">
                                {/* Email */}
                                <div className="flex items-start space-x-2">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Email Us</h3>
                                        <p className="text-white font-medium mb-1">matt@mattengg.com</p>
                                        <p className="text-white opacity-90">Response: 2-4 hours</p>
                                    </div>
                                </div>

                                {/* Call */}
                                <div className="flex items-start space-x-2">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Call Us</h3>
                                        <p className="text-white font-medium mb-1">+91 7305197833</p>
                                        <p className="text-white opacity-90">Mon-Sat, 9 AM - 7 PM</p>
                                    </div>
                                </div>

                                {/* Visit */}
                                <div className="flex items-start space-x-2">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                                        <p className="text-white font-medium mb-1">
                                            3rd floor, Pillars Gate, Vadasery,
                                        </p>
                                        <p className="text-white opacity-90">
                                            Kanyakumari Dist, Tamil Nadu 629001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
