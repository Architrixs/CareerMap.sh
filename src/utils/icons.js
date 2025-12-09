import * as LucideIcons from "lucide-react";

export const IconMap = (slug) => {
    switch(slug) {
        case 'code': return LucideIcons.Code2;
        case 'database': return LucideIcons.Database;
        case 'cpu': return LucideIcons.Cpu;
        case 'shield': return LucideIcons.ShieldCheck;
        case 'link': return LucideIcons.Link;
        case 'cloud': return LucideIcons.Cloud;
        case 'trending-up': return LucideIcons.TrendingUp;
        case 'video': return LucideIcons.Video;
        case 'sun': return LucideIcons.Sun;
        case 'heart': return LucideIcons.Heart;
        default: return LucideIcons.Briefcase;
    }
};

export const NodeTypeIcon = (type) => {
    switch(type) {
        case 'education': return LucideIcons.GraduationCap;
        case 'exam': return LucideIcons.FileText;
        case 'degree': return LucideIcons.Award;
        case 'license': return LucideIcons.BadgeCheck;
        case 'work': return LucideIcons.Hammer;
        case 'job': return LucideIcons.Briefcase;
        case 'skill': return LucideIcons.Wrench;
        case 'concept': return LucideIcons.Lightbulb;
        default: return LucideIcons.Circle;
    }
};
