# 🍕 Recipedia — React Meal API App

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![API](https://img.shields.io/badge/API-TheMealDB-orange)
![Status](https://img.shields.io/badge/status-finished-success)

A modern and responsive recipe search application built with **React + Vite**, using the public **TheMealDB API**.  
Users can search meals, filter by categories, explore random recipes, and view detailed cooking instructions.

---

## ✨ Features

- 🔍 Search meals by name, ingredient, category
- 🏷️ Filter by category (Chicken, Pasta, Seafood, etc.)
- 🎲 Random meal generator
- 📋 Detailed meal page (ingredients + instructions)
- 📱 Fully responsive (mobile / tablet / desktop)
- ♿ Accessible-friendly UI (ARIA labels, screen-reader helpers)

---

## 🧰 Tech Stack

- **React 18**
- **Vite**
- **React Router**
- **Context API**
- **Bootstrap 5**
- **TheMealDB REST API**

---

## 🔗 API Used

Data is fetched from the public API:
https://www.themealdb.com/api.php

### Endpoints used:
- `/search.php?s=chicken`
- `/filter.php?c=Seafood`
- `/lookup.php?i=52772`
- `/random.php`

---

## 🖼️ Screenshots

### Home Page
![Home](./screenshots/home1.png)
![Home](./screenshots/home2.png)

### Search Results
![Search](./screenshots/search.png)

### Meal Details
![Meal Details](./screenshots/mealDetails.png)

---

## 🚀 Getting Started

1️⃣ Clone the repository              git clone https://github.com/redpanda-8/6114ReactMealApi.git
2️⃣ Install dependencies              npm install
3️⃣ Run the project                   npm run dev
Open in browser: http://localhost:5173

🧠 What I Learned

Working with REST APIs in React
Managing global state with Context API
Responsive UI with Bootstrap grid system
Conditional rendering & error handling
Structuring a real-world React project

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## HOW TO RUN AFTER DWNLD ZIP
Bash terminal > npm run dev