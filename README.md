# Tebib Labs — Official Websites

> **"Be Wise."**
> Software Engineering & Applied R&D
> Computational Tools · Structural Reliability · Scientific Systems

**Live site**

- GitHub Pages: https://nguseyxc92.github.io/tebib-labs-website/
- Netlify: https://tebib-labs.netlify.app/

---

## 1. Overview

This repository contains the official corporate website of **Tebib Labs**, founded by **Neguse Solomon Mekonnen**.

Tebib Labs builds software products, computational tools and applied research solutions that turn complex engineering and mathematical problems into practical technology. The company connects civil infrastructure risk assessment, uncertainty quantification and Bayesian updating with modern full-stack software engineering.

The site is a static single-page application. It has no backend and needs no environment variables.

---

## 2. Tech Stack

- **Framework**: React 19 + TypeScript
- **Routing**: React Router with hash-based URLs (`/#/about`), so it works on any static host or sub-path
- **Styling**: Tailwind CSS v4, dark forest-green canvas (`#050D0A`), mint highlights (`#00F5A0`), hairline borders (`#163024`)
- **Typography**: Plus Jakarta Sans (display and body) and JetBrains Mono (technical)
- **Visualizations**
  - Canvas finite-element stress field (`HeroMeshCanvas`)
  - Interactive SVG Bayesian updating of prior vs. posterior resistance and the β index (`BayesianCurveInteractive`)
  - Multi-channel sensor telemetry concept (`SensorDashboardDemo`)
- **Icons**: Lucide React
- **Build tool**: Vite 8

---

## 3. Pages

| Route | Content |
| :--- | :--- |
| `/#/` | Home: hero, principles, four service areas, featured projects, approach, philosophy |
| `/#/about` | Meaning of the name (ጠቢብ / Tebib), mission, vision, values, founder profile |
| `/#/services` | Custom Software, Engineering & Scientific Computing, Data & Analytical Applications, Applied Research & Prototyping, plus the five-stage engagement process |
| `/#/projects` | Filterable project catalog |
| `/#/projects/bayesian-reliability-engine` | Bayesian Reliability Updating Engine (in development), with interactive plot and Zijlweg Viaduct case study |
| `/#/projects/structural-health-monitoring` | Structural Health Monitoring Platform (planned), with telemetry demo |
| `/#/research` | Master's research (UPC / Padua, NoRISK) and research disciplines |
| `/#/insights` | Technical articles with category filters and search |
| `/#/insights/:slug` | Article reading view and related articles |
| `/#/contact` | Project inquiry form (see note below) |
| `/#/privacy` | Privacy Policy |
| `/#/terms` | Terms of Use |
| any other path | Branded 404 page |

**Contact form:** it validates input and blocks bots with a honeypot field, but it does not send email. Visitors can copy or click the contact email address. To send inquiries automatically, connect a form service such as Formspree or Web3Forms.

---

## 4. Local Development

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run lint       # TypeScript type check
npm run build      # production build into /dist
```

---

## 5. Deployment

### GitHub Pages
1. Push to the `main` branch.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and publishes on every push.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

Because the site uses relative asset paths and hash routing, the same build works on both hosts and on a custom domain without extra configuration.

### Custom domain
Add a file named `CNAME` inside `public/` containing the domain (for example `tebiblabs.com`), then set the same domain in **Settings → Pages → Custom domain**.

---

## 6. Content Notes

- Official logo, banner and founder portrait are integrated.
- The Bayesian Reliability Updating Engine is marked **In Development** and the Structural Health Monitoring Platform is marked **Planned**.
- The site contains no client logos, testimonials or commercial claims.
- Responsive from 320 px phones to wide desktops, with WCAG AA contrast.
- Before commercial filing, review the Privacy Policy and Terms for the correct legal jurisdiction.

---

© Tebib Labs. All rights reserved.
