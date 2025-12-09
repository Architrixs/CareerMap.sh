import React from 'react';
import * as LucideIcons from "lucide-react";
import { IconMap } from '../utils/icons';

const RoadmapHeader = ({ meta, onBack, onOpenResources }) => {
    const Icon = IconMap(meta.icon_slug);
    const { ChevronLeft, Building2, TrendingUp, IndianRupee, BookOpen } = LucideIcons;

    return (
        <div className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 pb-6 sm:pb-8 pt-3 sm:pt-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <button 
                        onClick={onBack}
                        className="flex items-center text-slate-400 hover:text-white text-xs sm:text-sm hover:underline transition-colors"
                    >
                        <ChevronLeft size={14} className="sm:w-4 sm:h-4 mr-1"/> Back to Careers
                    </button>

                    <button
                        onClick={onOpenResources}
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-lg shadow-blue-500/20"
                    >
                        <BookOpen size={16} />
                        <span className="hidden sm:inline">Resources</span>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Title Section */}
                    <div className="flex-1">
                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0">
                                <Icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" color="white" />
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight">{meta.title}</h1>
                                <span className="inline-block px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] sm:text-xs text-slate-300">
                                    {meta.category}
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                            {meta.description}
                        </p>
                    </div>

                    {/* Market Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full lg:w-auto lg:min-w-[320px] lg:max-w-[50%]">
                        <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-700/50">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-green-400 mb-1">
                                <IndianRupee size={14} className="sm:w-4 sm:h-4" />
                                <span className="text-[10px] sm:text-xs font-bold uppercase">Avg Salary</span>
                            </div>
                            <div className="text-base sm:text-lg lg:text-xl font-mono font-bold text-white">₹{meta.market_stats.average_salary_lpa} LPA</div>
                            <div className="text-[10px] sm:text-xs text-slate-500">{meta.market_stats.salary_range}</div>
                        </div>

                        <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-700/50">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-purple-400 mb-1">
                                <Building2 size={14} className="sm:w-4 sm:h-4" />
                                <span className="text-[10px] sm:text-xs font-bold uppercase">Top Recruiters</span>
                            </div>
                            <div className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                                {meta.market_stats.top_hiring_companies.slice(0,3).join(", ")}
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-slate-500 mt-1">
                                +{meta.market_stats.top_hiring_companies.length - 3} more
                            </div>
                        </div>
                        
                        <div className="col-span-2 bg-slate-800/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-700/50">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-orange-400 mb-2">
                                <TrendingUp size={14} className="sm:w-4 sm:h-4" />
                                <span className="text-[10px] sm:text-xs font-bold uppercase">Future Scope</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {meta.market_stats.future_scope.slice(0,3).map((scope, i) => (
                                    <span key={i} className="text-[9px] sm:text-[10px] px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-400 whitespace-nowrap">
                                        {scope}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapHeader;
