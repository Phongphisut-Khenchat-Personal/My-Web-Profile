# Phongphisut Khenchat — Portfolio

[![Live Site](https://img.shields.io/badge/Live-mywebprofile--9ee72.web.app-EA580C?style=for-the-badge&logo=firebase&logoColor=white)](https://mywebprofile-9ee72.web.app/)
[![GitHub](https://img.shields.io/badge/GitHub-My--Web--Profile-111827?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Phongphisut-Khenchat-Personal/My-Web-Profile)

> **Software Engineering Graduate** · Burapha University · **Open to Associate Software Engineer & Software Developer roles**

Personal portfolio website showcasing academic background, internship experience, industry projects, and technical skills — built as a static site with bilingual support (EN/TH) and deployed on Firebase Hosting.

---

## Live Demo

**https://mywebprofile-9ee72.web.app**

---

## Highlights

| | |
|---|---|
| **Education** | B.Sc. Software Engineering, Burapha University (GPA 2.98) |
| **Experience** | TheDB-QA internship · PRAMERN & WMS industry projects |
| **Focus** | Web Development · Software QA · API Integration |
| **Languages** | Thai (Native) · English (Intermediate) |

---

## Features

- **Bilingual UI** — English / Thai toggle with `localStorage` persistence
- **Responsive design** — optimized for desktop, tablet, and mobile (min. 16px font size)
- **Hero section** — professional introduction with transparent graduation photo
- **Education & Experience** — timeline layout with internship and industry project details
- **Skills** — technical and soft skills with adaptability note for new technologies
- **Project carousels** — featured work and GitHub repositories with auto-scroll
- **Certificates & documents** — downloadable CV, Resume, Transcript, and credentials
- **Contact** — email, phone, social links, and LinkedIn integration
- **SEO & sharing** — Open Graph, Twitter Card, favicon, and semantic HTML

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | CSS Grid, Flexbox, Custom Properties, Font Awesome 6 |
| **Fonts** | DM Sans, Noto Sans Thai (Google Fonts) |
| **Hosting** | Firebase Hosting |
| **Tools** | Git, Firebase CLI |

---

## Site Sections

1. **Home** — Hero with profile, status, and call-to-action buttons
2. **About** — Bio, focus areas, education summary, and career goal
3. **Education** — Degree, GPA, and academic focus
4. **Experience** — TheDB-QA, PRAMERN, and WMS project timelines
5. **Skills** — Programming languages, frameworks, databases, tools, soft skills
6. **Projects** — Featured carousel + additional GitHub repositories
7. **Certificates** — Coursera, OSSD Boostcamp, and document downloads
8. **Contact** — Direct contact info and social media links

---

## Project Structure

```
My-Web-Profile/
├── README.md
└── MyProjecProfile/
    ├── .firebaserc
    ├── firebase.json
    └── public/
        ├── index.html
        ├── styles.css
        ├── scripts.js
        ├── assets/
        │   ├── profile.png
        │   ├── og-image.png
        │   └── favicon.svg
        └── file/
            ├── Download/
            │   ├── CV.pdf
            │   ├── Resume.pdf
            │   ├── Transcript.pdf
            │   └── Certificate-*.pdf
            └── Project/
                ├── WangNganHR.png
                ├── All-Work.png
                ├── TheDB-QA.png
                └── ...
```

---

## Getting Started

### Prerequisites

- A modern web browser
- [Node.js](https://nodejs.org/) (optional, for Firebase CLI deployment)

### Run locally

```bash
git clone https://github.com/Phongphisut-Khenchat-Personal/My-Web-Profile.git
cd My-Web-Profile/MyProjecProfile/public
```

Serve the `public` folder with any static server, for example:

```bash
npx serve .
```

Then open `http://localhost:3000` in your browser.

> **Note:** Open via a local server rather than double-clicking `index.html` so asset paths resolve correctly.

---

## Deployment

This project is deployed with [Firebase Hosting](https://firebase.google.com/docs/hosting).

```bash
cd MyProjecProfile
firebase login
firebase deploy --only hosting
```

Live URL: **https://mywebprofile-9ee72.web.app**

---

## Design

Inspired by graduation regalia colors:

| Token | Color | Usage |
|-------|-------|-------|
| Navy | `#0B1220` – `#111827` | Header, hero, contact backgrounds |
| Orange | `#EA580C` | Accents, badges, highlights |
| Blue | `#2563EB` | Icons, links, secondary accents |
| Grey | `#F1F5F9` – `#475569` | Section backgrounds, body text |

---

## Contact

| | |
|---|---|
| **Email** | [chokun0988@gmail.com](mailto:chokun0988@gmail.com) |
| **Phone** | [098-872-9076](tel:+66988729076) |
| **LinkedIn** | [phongphisut-khenchat](https://www.linkedin.com/in/phongphisut-khenchat-a4673a402/) |
| **GitHub** | [Phongphisut-Khenchat-Personal](https://github.com/Phongphisut-Khenchat-Personal) |
| **Location** | Bueng Sriracha, Chonburi 20230, Thailand |

---

<p align="center">
  Built with HTML, CSS & JavaScript · Deployed on Firebase<br/>
  © 2026 Phongphisut Khenchat
</p>
