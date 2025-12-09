import React, { useState, useEffect, useMemo } from 'react';
import * as LucideIcons from "lucide-react";
import CareerCard from './components/CareerCard';
import { RoadmapNode, BranchLayer } from './components/RoadmapNode';
import RoadmapHeader from './components/RoadmapHeader';
import ResourceSidebar from './components/ResourceSidebar';
import AboutSidebar from './components/AboutSidebar';

const App = () => {
    const [view, setView] = useState('home'); // home | roadmap
    const [activeRoadmap, setActiveRoadmap] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    
    // State for Data Fetching
    const [careerIndex, setCareerIndex] = useState([]); // Lightweight index
    const [categories, setCategories] = useState([]);
    const [roadmapCache, setRoadmapCache] = useState({}); // Cache for full roadmaps
    const [loading, setLoading] = useState(true);
    const [loadingRoadmap, setLoadingRoadmap] = useState(false);
    const [error, setError] = useState(null);

    const { Search, Map, Loader2, AlertTriangle, X, Info } = LucideIcons;

    // Fetch Index on Mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the lightweight index file
                const response = await fetch(`data/index.json?t=${Date.now()}`);
                if (!response.ok) {
                    throw new Error(`Failed to load data (${response.status}). Ensure json file is served locally.`);
                }
                const data = await response.json();
                setCareerIndex(data);

                // Fetch categories
                const catResponse = await fetch(`data/categories.json?t=${Date.now()}`);
                if (catResponse.ok) {
                    const catData = await catResponse.json();
                    setCategories(catData.categories || []);
                }
            } catch (err) {
                console.error("Data Fetch Error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const handleCareerClick = async (indexItem) => {
        // Check cache first
        if (roadmapCache[indexItem.roadmap_id]) {
            setActiveRoadmap(roadmapCache[indexItem.roadmap_id]);
            setView('roadmap');
            window.scrollTo(0,0);
            return;
        }

        setLoadingRoadmap(true);
        try {
            // Fetch the specific category file
            const response = await fetch(`data/${indexItem.source_file}`);
            if (!response.ok) throw new Error("Failed to load roadmap data");
            
            const categoryData = await response.json();
            
            // Find the specific roadmap
            const fullRoadmap = categoryData.find(r => r.roadmap_id === indexItem.roadmap_id);
            
            if (fullRoadmap) {
                // Update cache
                setRoadmapCache(prev => ({
                    ...prev,
                    [fullRoadmap.roadmap_id]: fullRoadmap
                }));
                
                setActiveRoadmap(fullRoadmap);
                setView('roadmap');
                window.scrollTo(0,0);
            } else {
                throw new Error("Roadmap not found in source file");
            }
        } catch (err) {
            console.error("Error loading roadmap:", err);
            alert("Failed to load roadmap details. Please try again.");
        } finally {
            setLoadingRoadmap(false);
        }
    };

    const filteredData = careerIndex.filter(item => {
        const matchesSearch = item.meta.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.meta.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.meta.category === selectedCategory;
        const matchesDifficulty = selectedDifficulty === 'All' || item.meta.difficulty_level.includes(selectedDifficulty);
        
        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    // Group nodes by layer (Moved up to avoid conditional hook call error)
    const groupedNodes = useMemo(() => {
        if (!activeRoadmap) return {};
        const groups = {};
        activeRoadmap.graph.nodes.forEach(node => {
            // Ensure layer is treated as a number, default to 0 if missing
            const layer = (node.layer !== undefined && node.layer !== null) ? Number(node.layer) : 0;
            if (!groups[layer]) groups[layer] = [];
            groups[layer].push(node);
        });
        console.log("Grouped Nodes:", groups); // Debugging
        return groups;
    }, [activeRoadmap]);

    const sortedLayers = Object.keys(groupedNodes).sort((a, b) => parseInt(a) - parseInt(b));

    // -- LOADING STATE --
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-400">
                <Loader2 className="animate-spin mb-4" size={40} />
                <p>Loading Career Data...</p>
            </div>
        );
    }

    // -- ROADMAP LOADING STATE --
    if (loadingRoadmap) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-400">
                <Loader2 className="animate-spin mb-4" size={40} />
                <p>Loading Roadmap Details...</p>
            </div>
        );
    }

    // -- ERROR STATE --
    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-4 text-center">
                <AlertTriangle className="text-red-500 mb-4" size={40} />
                <h2 className="text-xl font-bold text-white mb-2">Error Loading Data</h2>
                <p className="text-red-400 mb-4">{error}</p>
                <p className="text-sm max-w-md bg-slate-800 p-4 rounded">
                    Note: If you are running this file directly from your hard drive, 
                    browsers block file access. Please run this via a local server (e.g., Live Server in VS Code).
                </p>
            </div>
        );
    }

    // -- HOME VIEW --
    if (view === 'home') {
        return (
            <div className="min-h-screen pb-20">
                <AboutSidebar isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

                {/* Hero */}
                <div className="bg-slate-900 border-b border-slate-800 pt-20 pb-16 px-4 relative">
                    {/* Top Navigation */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-3">
                        <button 
                            onClick={() => setIsAboutOpen(true)}
                            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs sm:text-sm font-medium transition-colors border border-slate-700"
                        >
                            <Info size={16} />
                            <span className="hidden sm:inline">About</span>
                        </button>
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
                            <Map size={14} /> 
                            <span>Interactive Career Graphs</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                            Career<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Map.sh</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            The definitive guide to careers in India. 
                            Real salary data, Indian entrance exams, and step-by-step 
                            learning paths.
                        </p>
                        
                        {/* Search */}
                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search for 'AI', 'Doctor', 'Blockchain'..."
                                className="w-full pl-12 pr-12 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-2xl"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            {searchTerm && (
                                <button 
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>

                        {/* Filters */}
                        <div className="mt-6 max-w-4xl mx-auto">
                            {/* Categories */}
                            <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                                <button
                                    onClick={() => setSelectedCategory('All')}
                                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
                                        selectedCategory === 'All' 
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                                    }`}
                                >
                                    All
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
                                            selectedCategory === cat.name 
                                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                                        }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                            {/* Difficulty */}
                            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs">
                                <span className="text-slate-500 mr-1">Difficulty:</span>
                                {['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'].map(level => (
                                    <button
                                        key={level}
                                        onClick={() => setSelectedDifficulty(level)}
                                        className={`px-2 py-1 rounded-lg transition-colors border border-transparent ${
                                            selectedDifficulty === level
                                            ? 'bg-slate-700 text-white font-medium border-slate-600'
                                            : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'
                                        }`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredData.map(item => (
                            <CareerCard
                                key={item.roadmap_id}
                                data={item}
                                onClick={handleCareerClick}
                            />
                        ))}
                    </div>
                    
                    {filteredData.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                                <Search className="text-slate-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No careers found</h3>
                            <p className="text-slate-400 max-w-md mx-auto mb-6">
                                We couldn't find any careers matching your current filters. 
                                Try adjusting your search or category selection.
                            </p>
                            <button 
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                    setSelectedDifficulty('All');
                                }}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // -- ROADMAP VIEW --
    if (view === 'roadmap' && activeRoadmap) {
        return (
            <div className="min-h-screen bg-slate-950">
                <RoadmapHeader
                    meta={activeRoadmap.meta}
                    onBack={() => setView('home')}
                    onOpenResources={() => setIsSidebarOpen(true)}
                />

                <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-14 md:py-16 lg:py-20">
                    <div className="relative">
                        {/* Vertical Center Line - Desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
                        
                        {/* Vertical Line - Mobile (left side) */}
                        <div className="md:hidden absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-slate-800"></div>
                        
                        {/* Animated Flow Line - Desktop */}
                        <svg className="hidden md:block absolute left-1/2 top-0 h-full overflow-visible pointer-events-none -translate-x-1/2" style={{width: '2px'}}>
                            <line
                                x1="1" y1="0" x2="1" y2="100%"
                                stroke="#3b82f6"
                                strokeWidth="1"
                                className="flow-line opacity-30"
                            />
                        </svg>

                        {/* Nodes */}
                        {sortedLayers.map((layerKey, index) => {
                            const nodes = groupedNodes[layerKey];
                            const isLast = index === sortedLayers.length - 1;
                            
                            if (nodes.length > 1) {
                                return (
                                    <BranchLayer 
                                        key={layerKey} 
                                        nodes={nodes} 
                                        onSelect={(n) => console.log(n)} 
                                    />
                                );
                            } else {
                                return (
                                    <RoadmapNode
                                        key={nodes[0].id}
                                        node={nodes[0]}
                                        isLeft={index % 2 === 0}
                                        isLast={isLast}
                                        onSelect={(n) => console.log(n)}
                                    />
                                );
                            }
                        })}

                        {/* End Marker */}
                        <div className="flex justify-center pt-6 sm:pt-8 md:pt-12">
                            <div className="bg-slate-900/80 backdrop-blur border-2 border-dashed border-slate-700 text-slate-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-mono">
                                ~ End of Roadmap ~
                            </div>
                        </div>
                    </div>
                    
                    {/* Resources Sidebar */}
                    <ResourceSidebar 
                        isOpen={isSidebarOpen} 
                        onClose={() => setIsSidebarOpen(false)} 
                        resources={activeRoadmap.resources} 
                    />
                </div>
            </div>
        );
    }
};

export default App;
