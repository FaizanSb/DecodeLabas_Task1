# 🛍️ Hiba's Collection — Responsive Homepage Clone

> An internship task submission for **DecodeLabs**, focused on building a fully **responsive** homepage UI clone of *Hiba's Collection* — a digital online buying and selling platform.

---

## 📌 Project Overview

This project is a front-end clone of the **Hiba's Collection** homepage, built as part of an internship task assigned by **DecodeLabs**. The primary objective was to recreate the homepage layout and make it **fully responsive** across all screen sizes (mobile, tablet, and desktop) using modern front-end tools.

---

## 🎯 Task Objective

- Clone the homepage UI of **Hiba's Collection** (Pre-Navbar, Navbar, Hero/Banner, Product Showcase sections).
- Ensure the entire layout is **responsive** and adapts smoothly across different screen sizes.
- Practice real-world UI replication, component structuring, and utility-first styling.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI development |
| **Tailwind CSS** | Utility-first responsive styling |
| **Vite** | Fast development build tool |
| **react-fast-marquee** | Animated scrolling promo banner |

---

## ✨ Features

- 🔝 **Pre-Navbar** — Customer support info, logo, search bar, wishlist & cart icons
- 🧭 **Navbar** — Category links with smooth animated underline on hover, dropdown menu support
- 📢 **Animated Marquee Banner** — Scrolling promotional offers
- 🛒 **Product Cards** — Clean grid layout with hover effects, ratings, and pricing
- 📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop screens
- 🎨 **Smooth Hover Animations** — Underline effects, card lift on hover, transition-based interactions

---

## 📐 Responsiveness

This project has been built with a **mobile-first, fully responsive approach** using Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`). Key responsive adjustments include:

- Grid layouts adapt from **1–2 columns on mobile** to **4 columns on desktop**
- Navbar and product spacing adjust dynamically across breakpoints
- Images scale proportionally without layout shifts (`object-cover`)
- Font sizes and padding scale down gracefully on smaller screens

✅ Tested on: Mobile (375px), Tablet (768px), Laptop (1024px), Desktop (1440px+)

---

## 📂 Folder Structure

```
hibas-collection-clone/
├── public/
│   ├── logo.png
│   ├── perfume.jpg
│   └── ...
├── src/
│   ├── components/
│   │   ├── PreNavbar.jsx
│   │   ├── Navbar.jsx
│   │   ├── MarqueeBanner.jsx
│   │   └── ProductCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Clone the repository and run locally:

```bash
git clone <your-repo-link-here>
cd hibas-collection-clone
npm install
npm run dev
```

---

## 🔗 Links

- 🌐 **Live Demo:** [Add live deployment link here]()
- 💻 **GitHub Repository:** [Add GitHub repo link here]()

---

## 📚 What I Learned

- Practical experience with **Tailwind CSS responsive utilities** (`grid-cols`, breakpoints, `flex` layouts)
- Implementing **hover-based animations** using pseudo-elements (`after:`) and `group-hover`
- Structuring reusable **React components**
- Debugging real-world issues like incorrect asset paths, ESM/CJS import conflicts, and layout shifts

---

## 🙋‍♂️ Author

**Muhammad Faizan**
MERN Stack Developer | Faisalabad, Pakistan
Internship Task — **DecodeLabs**

---

## 📝 Note

This project was built strictly for **educational and internship evaluation purposes**. All design inspiration belongs to the original **Hiba's Collection** platform; this is a non-commercial UI clone created to demonstrate front-end development and responsive design skills.