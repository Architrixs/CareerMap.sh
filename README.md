# CareerMap.sh

> The definitive guide to careers in India - from sweeper to IAS, with real data, exam info, and curated learning paths.

[![Status](https://img.shields.io/badge/status-active_development-blue)]()
[![Careers](https://img.shields.io/badge/careers-30+-green)]()

---

## Project Vision

Build a comprehensive, curated roadmap platform for **every profession in India** with:
- Real salary data and market stats
- Complete exam information and eligibility criteria
- Links to study resources, books, and learning platforms
- Step-by-step roadmaps with branching career paths
- Official websites and registration portals

**Inspired by** [roadmap.sh](https://roadmap.sh) but tailored for the Indian education and employment ecosystem.

---

## Project Structure

```
career.sh/
├── public/             # Static assets (data json files)
├── src/
│   ├── components/     # UI Components (Sidebar, Cards, etc.)
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main Application Logic
│   ├── main.jsx        # Entry point
│   └── index.css       # Global Styles (Tailwind)
├── index.html          # HTML Entry point
├── package.json        # Dependencies & Scripts
└── vite.config.js      # Vite Configuration
```

---

## Quick Start

### Run Locally

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:5173
```

---

## Current Coverage

We currently cover **30+ careers** across 15 categories including:
- Technology & IT (Software, Data Science, AI)
- Government Services (IAS, Police, Railways)
- Engineering (Civil, Mechanical, Electrical)
- Healthcare (Medical, Pharmacy)
- Finance (CA, Banking)
- And many more...

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

## Features

- ✅ 30 curated career roadmaps
- ✅ Interactive step-by-step visualization
- ✅ Real Indian salary data
- ✅ Top hiring companies
- ✅ Future scope insights
- ✅ Search functionality
- ✅ Responsive design (mobile-first)

---

## Contributing

We welcome contributions! Here's how you can help:

1. **Add New Careers:** Use `IAS` or `IT/Software` in `data.json` as templates.
2. **Enhance Existing Careers:** Add resources, exam details, or update salary data.
3. **Verify Information:** Check official websites, validate exam patterns, confirm cutoffs.

---

## Tech Stack

- **Frontend:** React 18 (via CDN), TailwindCSS
- **Icons:** Lucide React
- **Data Format:** JSON
- **Hosting:** GitHub Pages

---

## License

[MIT License](./LICENSE)

---

**Built with ❤️ for Indian students, job seekers, and career changers.**
