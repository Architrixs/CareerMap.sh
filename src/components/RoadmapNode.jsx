import React from 'react';
import { NodeTypeIcon } from '../utils/icons';

export const RoadmapNode = ({ node, isLeft, isLast, onSelect }) => {
    const Icon = NodeTypeIcon(node.type);
    
    return (
        <div 
            className="relative mb-12 sm:mb-14 md:mb-16 lg:mb-20 node-enter"
        >
            {/* Center Line Marker - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full z-20 ring-4 ring-slate-950 shadow-lg shadow-blue-500/50"></div>
            
            {/* Mobile Line Marker */}
            <div className="md:hidden absolute left-3 sm:left-4 top-8 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full z-20 ring-4 ring-slate-950 shadow-lg shadow-blue-500/50"></div>
            
            {/* Content Card - Mobile: Always on right, Desktop: Alternating */}
            <div className={`
                ml-10 sm:ml-12 md:ml-0
                md:w-[calc(50%-2rem)]
                ${isLeft ? 'md:mr-auto md:pt-1' : 'md:ml-auto md:pt-1'}
            `}>
                <div 
                    onClick={() => onSelect(node)}
                    className="
                        bg-slate-800/90 backdrop-blur-sm border-2 border-slate-700 
                        p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl
                        hover:border-blue-500 hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/20 
                        transition-all duration-300 cursor-pointer group
                        relative
                    "
                >
                    {/* Connecting Line to Center - Desktop only */}
                    <div className={`
                        hidden md:block absolute top-8 w-8 h-0.5 bg-slate-700 group-hover:bg-blue-500 transition-colors
                        ${isLeft ? '-right-8' : '-left-8'}
                    `}></div>
                    
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="p-1.5 sm:p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                            <Icon size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-400 px-2 py-0.5 sm:py-1 bg-blue-500/10 rounded whitespace-nowrap">
                            {node.type}
                        </span>
                    </div>
                    <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg mb-1 group-hover:text-blue-400 transition-colors leading-tight">
                        {node.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{node.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export const BranchLayer = ({ nodes, onSelect }) => {
    // Calculate offset for the horizontal lines to start/end at the center of the first/last items
    // With flex-1 and w-full, each item is exactly 100% / N wide.
    // The center of the first item is at (100% / N) * 0.5 = 50 / N %.
    const sideOffset = 50 / nodes.length;

    return (
        <div className="relative mb-20 w-full">
            {/* Label - Positioned higher to avoid overlap */}
            <div className="absolute left-1/2 -top-16 -translate-x-1/2 z-20 whitespace-nowrap">
                 <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] uppercase tracking-widest text-slate-400 shadow-xl">
                    Specialization Paths
                </div>
            </div>

            {/* SHARED CONNECTORS (Desktop Only) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
                {/* Central Junction Point on the Main Spine */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full z-10 ring-4 ring-slate-950 shadow-lg shadow-blue-500/50"></div>

                {/* Top Horizontal Bus - Left Side */}
                <div className="absolute top-0 h-0.5 bg-slate-700 overflow-hidden"
                     style={{ left: `${sideOffset}%`, right: '50%' }}>
                    <div className="w-full h-full flow-dashed-horizontal-l"></div>
                </div>
                {/* Top Horizontal Bus - Right Side */}
                <div className="absolute top-0 h-0.5 bg-slate-700 overflow-hidden"
                     style={{ left: '50%', right: `${sideOffset}%` }}>
                    <div className="w-full h-full flow-dashed-horizontal-r"></div>
                </div>

                {/* Bottom Horizontal Bus - Left Side */}
                <div className="absolute -bottom-8 h-0.5 bg-slate-700 overflow-hidden"
                     style={{ left: `${sideOffset}%`, right: '50%' }}>
                    <div className="w-full h-full flow-dashed-horizontal-r"></div>
                </div>
                {/* Bottom Horizontal Bus - Right Side */}
                <div className="absolute -bottom-8 h-0.5 bg-slate-700 overflow-hidden"
                     style={{ left: '50%', right: `${sideOffset}%` }}>
                    <div className="w-full h-full flow-dashed-horizontal-l"></div>
                </div>
                
                {/* Bottom Junction Point */}
                <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-700 rounded-full z-10"></div>
            </div>

            {/* Container - w-full to ensure percentage math works */}
            <div className="flex flex-col md:flex-row items-stretch w-full pt-8">
                {nodes.map((node, index) => {
                    const Icon = NodeTypeIcon(node.type);
                    
                    return (
                        <div key={node.id} className="relative flex-1 px-2 md:px-4 mb-4 md:mb-0">
                            {/* INDIVIDUAL VERTICAL CONNECTORS (Desktop Only) */}
                            <div className="hidden md:block absolute -top-8 left-0 right-0 h-8 pointer-events-none">
                                {/* Vertical Line Down to Card */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-700">
                                    <div className="w-full h-full flow-dashed-vertical"></div>
                                </div>
                            </div>

                            {/* CARD */}
                            <div 
                                onClick={() => onSelect(node)}
                                className="
                                    h-full
                                    bg-slate-800/90 backdrop-blur-sm border-2 border-slate-700 
                                    p-5 rounded-xl
                                    hover:border-blue-500 hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/20 
                                    transition-all duration-300 cursor-pointer group
                                    flex flex-col relative overflow-hidden
                                    z-10
                                "
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Icon size={64} />
                                </div>
                                
                                <div className="flex items-center gap-3 mb-3 relative z-10">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <Icon size={18} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 px-2 py-1 bg-blue-500/10 rounded">
                                        {node.type}
                                    </span>
                                </div>
                                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-blue-400 transition-colors relative z-10">
                                    {node.label}
                                </h4>
                                <p className="text-sm text-slate-400 relative z-10">{node.subtitle}</p>
                            </div>

                            {/* BOTTOM CONNECTORS (Desktop Only) */}
                            <div className="hidden md:block absolute -bottom-8 left-0 right-0 h-8 pointer-events-none">
                                {/* Vertical Line Up from Card */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-700">
                                    <div className="w-full h-full flow-dashed-vertical"></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
