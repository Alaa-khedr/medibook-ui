# MediBook – UI Project

MediBook is a medical booking platform (Vezeeta-like) developed as a **Graduation Project** under the **DEPI Scholarship**.  
This repository contains the **UI implementation only** using:

- HTML5
- CSS3
- Bootstrap 5 (CDN)
- Font Awesome (CDN)
- Google Font: Inter

The project is structured to be **React-ready** and easily migratable to **React + Vite** in later phases.

---

## 📌 Project Scope (UI Only)

This phase focuses on:
- UI/UX implementation
- Responsive layouts
- Consistent design system
- Clean and scalable folder structure

❌ No JavaScript logic  
❌ No backend integration  
❌ No React in this phase

---

## 👥 Team Members & Responsibilities

### 👤 Eng. Alaa 
- All Admin Screens
- Project structure & organization
- UI consistency & review

### 👤 Eng. Nourhan
- Patient Screens: 1, 2, 3, 4, 8, 9, 10
- Doctors button in navbar

### 👤 Eng. Abdelrhman
- Patient Screens: 5, 6, 7, 11, 12, 13, 14, 15

### 👤 Eng. Mohamed
- Doctor Screens: 1 → 8
- Doctor Login Page

### 👤 Eng. Anwar
- Doctor Screens: 9 → 17

---

## 📁 Project Structure

```

medibook-ui/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   ├── main.css          # Global styles, variables, typography
│   │   ├── layout.css        # Navbar, footer, grids
│   │   ├── components.css    # Cards, tables, buttons, modals
│   │   └── responsive.css    # Media queries only
│   │
│   ├── images/
│   │   ├── logo
│   │   ├── doctors/
│   │   ├── patients/
│   │   └── admin/
│   │
│   └── fonts/ (optional)
│
├── partials/
│   ├── navbar.html
│   ├── footer.html
│   └── admin-sidebar.html
│
├── pages/
│   ├── patient/
│   ├── doctor/
│   └── admin/
│
├── README.md
└── .gitignore

```

---

## 🎨 CSS Guidelines

- No inline styles
- No media queries outside `responsive.css`
- Reusable utility classes whenever possible
- Consistent spacing and typography

### Breakpoints:
- Mobile: < 576px
- Tablet: 576px – 991px
- Desktop: ≥ 992px

---

## 🧩 HTML Guidelines

- Each screen = separate HTML file
- Semantic HTML elements only
- No JavaScript logic
- Clean and readable markup

---

## ⚙️ Libraries & CDNs

### Bootstrap 5
Loaded via CDN (CSS + JS Bundle)

### Font Awesome
Loaded via CDN

### Font
- Inter (Google Fonts – Sans-serif)

---

## 🚀 React Migration Plan (Future Phase)

The project is structured to allow:
- Each HTML page → React Component
- Reuse of existing CSS files
- Easy setup with Vite

No major refactoring will be required during migration.

---

## 📅 Submission Notes

- This repository represents the **UI phase only**
- Designed for clarity, scalability, and teamwork
- Prepared for future frontend and backend integration

---

© MediBook – DEPI Graduation Project