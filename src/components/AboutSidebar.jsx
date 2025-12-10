import React, { useEffect } from 'react';
import * as LucideIcons from "lucide-react";

const AboutSidebar = ({ isOpen, onClose }) => {
    const { Info, Github, Heart, MessageSquare, Share2, X, Coffee } = LucideIcons;

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />
            
            {/* Sidebar */}
            <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-slate-900 border-l border-slate-800 z-[70] transform transition-transform duration-300 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/95 backdrop-blur">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Info className="text-blue-500" size={20} />
                            About CareerMap.sh
                        </h2>
                        <button 
                            onClick={onClose}
                            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        {/* Mission */}
                        <div>
                            <h3 className="text-white font-bold mb-2">Why this project?</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Navigating career options in India can be overwhelming. Information is scattered across thousands of websites, often outdated or misleading. 
                                <br/><br/>
                                <strong>CareerMap.sh</strong> aims to be the single source of truth—providing structured, data-backed roadmaps for every profession, from traditional paths like Engineering to modern roles like Content Creation.
                            </p>
                        </div>

                        {/* Contribute */}
                        <div>
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Github size={16} className="text-purple-400"/>
                                Contribute
                            </h3>
                            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                <p className="text-slate-400 text-xs mb-4">
                                    This project is open-source! You can help by adding new careers, fixing data, or improving the code.
                                </p>
                                <div className="flex gap-2">
                                    <a 
                                        href="https://github.com/Architrixs/CareerMap.sh" 
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg transition-colors"
                                    >
                                        <Github size={14} /> Star on GitHub
                                    </a>
                                    <a 
                                        href="https://github.com/Architrixs/CareerMap.sh/issues" 
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg transition-colors"
                                    >
                                        <MessageSquare size={14} /> Report Issue
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Heart size={16} className="text-red-400"/>
                                Support
                            </h3>
                            <p className="text-slate-400 text-xs mb-4">
                                If you find this useful, please share it with students and job seekers who might benefit from it.
                            </p>
                            
                            <div className="space-y-3">
                                <button 
                                    onClick={() => {
                                        const shareUrl = 'https://architrixs.github.io/CareerMap.sh/';
                                        if (navigator.share) {
                                            navigator.share({
                                                title: 'CareerMap.sh',
                                                text: 'Check out CareerMap.sh - The definitive guide to careers in India.',
                                                url: shareUrl,
                                            });
                                        } else {
                                            navigator.clipboard.writeText(shareUrl);
                                            alert('Link copied to clipboard!');
                                        }
                                    }}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    <Share2 size={16} /> Share with Friends
                                </button>

                                <div className="grid grid-cols-2 gap-3">
                                    <a 
                                        href="https://github.com/sponsors/Architrixs" 
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-pink-900/30 border border-slate-700 hover:border-pink-500/50 text-pink-400 hover:text-pink-300 text-xs font-medium rounded-lg transition-all"
                                    >
                                        <Heart size={14} /> Sponsor
                                    </a>
                                    <a 
                                        href="https://buymeacoffee.com/architrixs" 
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-yellow-900/30 border border-slate-700 hover:border-yellow-500/50 text-yellow-400 hover:text-yellow-300 text-xs font-medium rounded-lg transition-all"
                                    >
                                        <Coffee size={14} /> Buy Coffee
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="pt-8 border-t border-slate-800 text-center">
                            <p className="text-slate-500 text-xs">
                                Built with 💜 in India
                                <br/>
                                &copy; {new Date().getFullYear()} CareerMap.sh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSidebar;
