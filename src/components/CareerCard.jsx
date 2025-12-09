import React from 'react';
import { IconMap } from '../utils/icons';

const CareerCard = ({ data, onClick }) => {
    const Icon = IconMap(data.meta.icon_slug);
    return (
        <div 
            onClick={() => onClick(data)}
            className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                    <Icon size={24} strokeWidth={1.5} />
                </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{data.meta.title}</h3>
            <p className="text-sm text-slate-400 line-clamp-2">{data.meta.description}</p>
        </div>
    );
};

export default CareerCard;
