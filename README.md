# CareerCompass India 🇮🇳

> The definitive guide to careers in India - from sweeper to IAS, with real data, exam info, and curated learning paths.

[![Status](https://img.shields.io/badge/status-active_development-blue)]()
[![Careers](https://img.shields.io/badge/careers-30+-green)]()
[![Phase](https://img.shields.io/badge/phase-1_in_progress-yellow)]()

---

## 🎯 Project Vision

Build a comprehensive, curated roadmap platform for **every profession in India** with:
- 📊 Real salary data and market stats
- 🎓 Complete exam information and eligibility criteria
- 📚 Links to study resources, books, and learning platforms
- 🛤️ Step-by-step roadmaps with branching career paths
- 🌐 Official websites and registration portals
- 👥 Active communities and support networks

**Inspired by** [roadmap.sh](https://roadmap.sh) but tailored for the Indian education and employment ecosystem.

---

## 📂 Project Structure

```
career.sh/
├── index.html           # Frontend application (React via CDN)
├── data.json           # All career roadmaps data (enhanced schema)
├── schema.json         # JSON schema specification (v2.0)
├── plan.md             # Development roadmap (6 phases)
├── PHASE1_SUMMARY.md   # Phase 1 progress tracking
└── README.md           # This file
```

---

## 🚀 Quick Start

### Run Locally

```powershell
# Start a local server
python -m http.server 8000

# Open in browser
http://localhost:8000
```

### View Live
[Coming Soon - Will be deployed to GitHub Pages]

---

## 📊 Current Coverage

### By Category (15 Categories)

| Category | Careers | Status |
|----------|---------|--------|
| **Technology & IT** | 7 | ✅ Categories normalized, 1 fully enhanced |
| **Government & Public Service** | 4 | ✅ Categories normalized, 1 fully enhanced (IAS) |
| **Engineering** | 4 | ✅ Categories normalized |
| **Healthcare & Medical** | 2 | ✅ Categories normalized |
| **Finance & Commerce** | 2 | ✅ Categories normalized |
| **Legal & Governance** | 1 | ✅ Categories normalized |
| **Creative & Media** | 2 | ✅ Categories normalized |
| **Design & Architecture** | 2 | ✅ Categories normalized |
| **Hospitality & Tourism** | 2 | ✅ Categories normalized |
| **Defense & Specialized Services** | 2 | ✅ Categories normalized |
| **Agriculture & Allied** | 1 | ✅ Categories normalized |
| **Education & Research** | 1 | ✅ Categories normalized |
| **Business & Entrepreneurship** | 1 | ✅ Categories normalized |
| **Essential Services** | 1 | ✅ Categories normalized |

**Total:** 30 careers (target: 60+)

### Fully Enhanced Careers (with resources, exams, branching)
1. ✅ **IAS & Civil Services** - Government & Public Service
2. ✅ **IT & Software Development** - Technology & IT (with branching)

---

## 🏗️ Development Phases

### Phase 1: Schema Enhancement ✅ 75% COMPLETE
- [x] Define enhanced JSON schema
- [x] Normalize all categories (15 standard categories)
- [x] Add resources & exam details to sample careers
- [ ] Update all 30 careers with new fields
- [ ] Implement branching in 5 key careers
- [ ] Update frontend for new schema

### Phase 2: Career Coverage Expansion (Planned)
- [ ] Add 20+ missing high-priority careers
- [ ] Research and validate all data sources
- [ ] Add deep resources to all careers

### Phase 3: Data Organization (Planned)
- [ ] Decide on file structure (single vs. split files)
- [ ] Create supporting data files
- [ ] Optimize for performance

### Phase 4: UI/UX Enhancements (Planned)
- [ ] Resource sidebar/modal
- [ ] Branching visualization
- [ ] Advanced filtering
- [ ] Career comparison tool

### Phase 5: Content Quality (Planned)
- [ ] Validate salary data (2024-25)
- [ ] Verify all exam information
- [ ] Add regional variations

### Phase 6: Technical Improvements (Planned)
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Progressive Web App

**[View Detailed Plan](./plan.md)**

---

## 🎨 Features

### Current
- ✅ 30 curated career roadmaps
- ✅ Interactive step-by-step visualization
- ✅ Real Indian salary data
- ✅ Top hiring companies
- ✅ Future scope insights
- ✅ Search functionality
- ✅ Responsive design (mobile-first)
- ✅ roadmap.sh inspired UI

### Coming Soon
- 🔄 Resources modal (official sites, study platforms, books)
- 🔄 Branching career paths visualization
- 🔄 Exam details section (pattern, cutoffs, dates)
- 🔄 Community links (Reddit, Telegram, Discord)
- 🔄 Career comparison tool
- 🔄 Advanced filtering (salary, difficulty, time to job)
- 🔄 Alternative career paths & pivots

---

## 📖 Schema Overview

### Enhanced Schema v2.0

Each career roadmap includes:

```json
{
  "roadmap_id": "unique-id",
  "meta": {
    "title": "Career Title",
    "category": "Normalized Category",
    "difficulty_level": "Beginner/Intermediate/Advanced/Expert",
    "time_to_job": "X years",
    "success_rate": "Percentage or ratio",
    "market_stats": { /* salary, companies, trends */ }
  },
  "resources": {
    "official_sites": [ /* govt websites, exam portals */ ],
    "study_platforms": [ /* Coursera, Unacademy, NPTEL */ ],
    "roadmaps_external": [ /* roadmap.sh links */ ],
    "books": [ /* textbooks, references */ ],
    "communities": [ /* Reddit, Telegram */ ],
    "youtube_channels": [ /* educational content */ ]
  },
  "exam_details": {
    "exams": [ /* comprehensive exam info */ ]
  },
  "graph": {
    "nodes": [ /* roadmap steps with duration */ ],
    "edges": [ /* connections with branching support */ ]
  },
  "alternatives_and_pivots": [ /* related career transitions */ ]
}
```

**[View Full Schema](./schema.json)**

---

## 🌟 Highlighted Careers

### Government & Public Service
- **IAS & Civil Services** (Fully Enhanced) - UPSC CSE roadmap with complete resources
- Police & Law Enforcement
- Government Clerk
- Indian Railways

### Technology & IT
- **IT & Software Development** (Fully Enhanced with Branching) - Frontend/Backend/Full Stack paths
- Data Science & Analytics
- AI & Machine Learning
- Cybersecurity
- Cloud Computing & DevOps
- Blockchain Technology

### Healthcare
- Medical & Healthcare (MBBS path)
- Pharmacy

### Finance
- Chartered Accountancy (CA)
- Banking & Finance

### Others
- Law & Legal Services
- Architecture
- Teaching & Education
- Agriculture
- And 15+ more...

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 1. Add New Careers
Use `IAS` or `IT/Software` in `data.json` as templates.

### 2. Enhance Existing Careers
Add resources, exam details, or update salary data.

### 3. Verify Information
Check official websites, validate exam patterns, confirm cutoffs.

### 4. Suggest Features
Open an issue with your ideas!

**Contribution Guidelines:** [Coming Soon]

---

## 📚 Data Sources

We use verified sources for all information:

- **Salary Data:** Glassdoor India, AmbitionBox, PayScale, LinkedIn Salary
- **Exam Info:** Official websites (UPSC, NTA, SSC, RRB, State PSCs)
- **Market Trends:** NASSCOM reports, Government statistics, Industry reports
- **Resources:** Curated from roadmap.sh, official education portals, community recommendations

---

## 🛠️ Tech Stack

- **Frontend:** React 18 (via CDN), TailwindCSS
- **Icons:** Lucide React
- **Data Format:** JSON
- **Hosting:** GitHub Pages (planned)
- **No Build Step:** Pure HTML/JS for simplicity

---

## 📊 Project Stats

- **Lines of Code:** ~2000+
- **Data Size:** 1611 lines of JSON
- **Careers Covered:** 30 (growing to 60+)
- **Resources Added:** 50+ (target: 500+)
- **Development Time:** Active since Dec 2025

---

## 📝 License

[MIT License](./LICENSE) - Free to use, modify, and distribute.

---

## 🙏 Acknowledgments

- Inspired by [roadmap.sh](https://roadmap.sh)
- UI design influenced by roadmap.sh's clean, developer-friendly aesthetic
- Data sourced from official Indian government websites and verified platforms
- Community feedback from r/Indian_Academia, r/developersIndia, r/UPSC

---

## 📞 Contact & Support

- **GitHub Issues:** [Report bugs or suggest features]
- **Discussions:** [Coming Soon]
- **Email:** [Your Email]

---

## 🗺️ Roadmap

**Current Sprint (Sprint 1):** Schema Enhancement ✅ 75% Done

**Next Sprint (Sprint 2):**
- Add 10 high-priority missing careers
- Complete resources for all tech careers
- Implement branching visualization

**Vision (6 months):**
- 60+ careers fully documented
- Hindi language support
- User accounts & personalized paths
- Crowdsourced updates

---

## ⚡ Updates

**Latest (Dec 8, 2025):**
- ✅ Enhanced schema v2.0 complete
- ✅ All 30 careers normalized to 15 categories
- ✅ IAS career fully enhanced with resources
- ✅ IT/Software career enhanced with branching paths
- ✅ Phase 1 is 75% complete

---

**Built with ❤️ for Indian students, job seekers, and career changers.**

*Making career planning accessible, accurate, and actionable.*
