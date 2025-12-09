import React, { useEffect } from 'react';
import * as LucideIcons from "lucide-react";

const ResourceSidebar = ({ isOpen, onClose, resources }) => {
    const { BookOpen, Globe, Wrench, Users, Youtube, X, ExternalLink } = LucideIcons;
    
    // Lock body scroll when sidebar is open
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

    if (!resources) return null;

    // Helper for sidebar groups
    const SidebarGroup = ({ title, items, icon: Icon }) => {
        if (!items || items.length === 0) return null;
        return (
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                    <Icon size={16} />
                    <h3 className="text-xs font-bold uppercase tracking-wider">{title}</h3>
                </div>
                <div className="space-y-3">
                    {items.map((item, i) => (
                        <a 
                            key={i} 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block p-3 bg-slate-800/50 border border-slate-700/50 hover:border-blue-500 rounded-lg transition-all hover:bg-slate-800 group"
                        >
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-medium text-slate-200 text-sm group-hover:text-blue-400 transition-colors line-clamp-1">{item.name}</h4>
                                <ExternalLink size={12} className="text-slate-600 group-hover:text-blue-500" />
                            </div>
                            {item.description && (
                                <p className="text-[11px] text-slate-500 line-clamp-2 group-hover:text-slate-400">{item.description}</p>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        );
    };

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
                            <BookOpen className="text-blue-500" size={20} />
                            Resources
                        </h2>
                        <button 
                            onClick={onClose}
                            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <SidebarGroup title="External Roadmaps" items={resources.roadmaps_external} icon={Globe} />
                        <SidebarGroup title="Study Platforms" items={resources.study_platforms} icon={BookOpen} />
                        <SidebarGroup title="Tools & Practice" items={resources.tools_and_practice} icon={Wrench} />
                        <SidebarGroup title="Communities" items={resources.communities} icon={Users} />
                        <SidebarGroup title="YouTube Channels" items={resources.youtube_channels} icon={Youtube} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResourceSidebar;
