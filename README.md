# Tebib Labs — Official Corporate Website

> **"Be Wise."**  
> Software Engineering & Applied R&D  
> Computational Tools · Structural Reliability · Scientific Systems

---

## 1. Overview

This repository hosts the official corporate web application for **Tebib Labs**, developed by Founder & CEO **Neguse Solomon Mekonnen**.

Tebib Labs develops software products, computational tools, and applied research solutions that turn complex engineering and mathematical problems into practical technology. The company connects civil infrastructure risk assessment, uncertainty quantification, and Bayesian updating with modern full-stack software architecture.

---

## 2. Architecture & Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Routing**: React Router (DOM) with complete page routes and scroll restoration
- **Styling**: Tailwind CSS v4 with dark forest green / obsidian canvas (`#050D0A`), neon mint highlights (`#00F5A0`), and hairline structural borders (`#163024`)
- **Typography**: Plus Jakarta Sans (Display / Body) & JetBrains Mono (Technical / Tabular)
- **Visualizations**:
  - Interactive Canvas: Finite-element structural node stress field (`HeroMeshCanvas`)
  - Interactive SVG Calculator: Conjugate Bayesian updating of prior vs. posterior resistance distributions and $\beta$ index (`BayesianCurveInteractive`)
  - Real-Time Telemetry Concept: Multi-channel sensor-data ingestion sparkline (`SensorDashboardDemo`)
- **Icons**: Lucide React
- **Bundler & Tooling**: Vite 8, TypeScript 5+

---

## 3. Route Structure

All 13 routes are fully implemented with real content:

| Path | Purpose |
| :--- | :--- |
| `/` | **Home**: Hero with interactive mesh, principles, 4 service pillars, 2 featured projects, approach timeline, philosophy, CTAs |
| `/about` | **About**: Amharic etymology (ጠቢብ / Tebib), mission, vision, 6 values, founder profile & research foundation |
| `/services` | **Services**: 4 core disciplines (Custom Software, Scientific Computing, Data Systems, Applied R&D), deliverables, 5-stage engagement lifecycle |
| `/projects` | **Projects**: Filterable catalog of initiatives (Engineering Software, Applied Research, Planned Products) |
| `/projects/bayesian-reliability-engine` | **Project 001**: Bayesian Reliability Updating Engine (In Development) — problem statement, MCMC inference, interactive distribution plot, Zijlweg Viaduct case study |
| `/projects/structural-health-monitoring` | **Project 002**: Structural Health Monitoring Platform (Planned) — sensor ingestion, thermal filtering, synthetic telemetry dashboard |
| `/research` | **Research**: Master's dissertation details (UPC NoRISK), 6 research disciplines, translational research-to-code pipeline |
| `/insights` | **Insights**: Technical engineering journal with category filters and search |
| `/insights/:slug` | **Article Detail**: Individual reading view, unboxed metadata, copy link, and related articles |
| `/contact` | **Contact**: Validated project inquiry form with honeypot spam protection, copyable email, and backend configuration status |
| `/privacy` | **Privacy Policy**: Honest data controller, retention, cookie, and rights disclosures |
| `/terms` | **Terms of Use**: Intellectual property, limitations of engineering advice, project status notices |
| `*` | **404**: Custom branded missing page route |

---

## 4. Local Development & Build

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Server starts on port `3000` at `http://localhost:3000`.

### Type Checking & Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
Generates an optimized, tree-shaken static bundle in the `/dist` directory.

---

## 5. Deploying to GitHub Pages

1. Push this project to the `main` branch of your GitHub repository.
2. In the repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push.

The site is served at `https://<username>.github.io/<repo-name>/`. It uses hash-based routing (`/#/about`) and relative asset paths, so it works from any sub-path or custom domain.

> Pages must be set to **GitHub Actions**, not "Deploy from a branch". Deploying the raw source gives a blank white page because browsers cannot run the `.tsx` files.

---

## 6. Founder Approval Checklist

- [x] Official logo mark and banner integrated
- [x] Brand slogan verified: "Be Wise."
- [x] Founder academic biography accurate (UPC Erasmus Mundus NoRISK master's graduate)
- [x] Zijlweg Viaduct proof load testing reference included accurately
- [x] Bayesian Reliability Updating Engine marked as **In Development**
- [x] Structural Health Monitoring Platform marked as **Planned**
- [x] No fabricated commercial claims, client logos, or false testimonials
- [x] All 13 routes active and responsive from mobile (320px) to wide desktop (1920px)
- [x] WCAG AA contrast and zero-pill metadata typography enforced
- [ ] Founder review of Privacy Policy and legal jurisdiction prior to commercial filing
- [ ] Founder replacement of photo placeholder with official portrait
