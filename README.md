# 🤖 Kidrove — AI & Robotics Summer Workshop Landing Page

A fully responsive workshop landing page for [Kidrove](https://www.kidrove.com), built with React + Vite (frontend) and Express.js (backend).

---

## 📸 Features

| Section | Details |
|---|---|
| **Hero** | Animated circuit-board SVG, workshop title, stat pills, dual CTAs |
| **Workshop Details** | 5 info cards (Age, Duration, Mode, Fee, Start Date) |
| **Learning Outcomes** | 6 gradient cards with checkmarks |
| **FAQ** | Animated accordion with 6 questions |
| **Registration Form** | Validated form, loading state, success state, connects to Express API |
| **Footer** | Links, contact, workshop quick-info |
| **Navbar** | Transparent → solid on scroll, mobile hamburger menu |

## 🛠 Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Hook Form + Zod (form validation)
- Lucide React (icons)
- Axios (HTTP client)

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose (with in-memory fallback)
- express-validator (server-side validation)
- CORS, dotenv

---

## 🚀 Getting Started

### 1. Clone / unzip the project

```bash
cd kidrove-workshop
```

### 2. Start the Backend

```bash
cd backend
npm install
cp .env.example .env        # Edit if needed
npm run dev                  # Starts on http://localhost:5000
```

> **MongoDB is optional.** If no MongoDB is running, the backend stores registrations in-memory and still returns a success response — so the frontend demo works without any DB setup.

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev                  # Starts on http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 API Reference

### `POST /api/enquiry`

Registers a user for the workshop.

**Request Body**
```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "+91 98765 43210",
  "childName": "Arjun",   // optional
  "childAge": "11"         // optional, 4–18
}
```

**Success Response `201`**
```json
{
  "success": true,
  "message": "Thank you! Your registration has been received. We'll reach out within 24 hours.",
  "storageMode": "mongodb",
  "data": {
    "id": "68...",
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "workshop": "AI & Robotics Summer Workshop 2026",
    "registeredAt": "2026-06-13T..."
  }
}
```

**Validation Error `422`**
```json
{
  "success": false,
  "message": "Please fix the following errors",
  "errors": [
    { "field": "email", "message": "Please provide a valid email address" }
  ]
}
```

---

## 📁 Project Structure

```
kidrove-workshop/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Sticky nav, mobile hamburger
│   │   │   ├── Hero.jsx             # Hero with circuit SVG animation
│   │   │   ├── CircuitSVG.jsx       # Signature animated background
│   │   │   ├── WorkshopDetails.jsx  # 5 info cards + description strip
│   │   │   ├── LearningOutcomes.jsx # 6 outcome cards
│   │   │   ├── FAQ.jsx              # Animated accordion (6 FAQs)
│   │   │   ├── RegistrationForm.jsx # Form with validation & states
│   │   │   └── Footer.jsx           # Footer
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── Enquiry.js    # Mongoose schema
│   ├── server.js         # Express app + POST /api/enquiry
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## 🚢 Deployment

### Frontend → Vercel / Netlify

```bash
cd frontend
npm run build
# Deploy the dist/ folder to Vercel or Netlify
```

### Backend → Railway / Render

1. Push `backend/` to a GitHub repo
2. Connect to [Railway](https://railway.app) or [Render](https://render.com)
3. Set env vars: `MONGODB_URI`, `PORT`, `FRONTEND_URL`
4. Update `VITE_API_URL` in frontend to point to your deployed API

---

## ✅ Evaluation Criteria Coverage

| Criteria | Implementation |
|---|---|
| **UI Design & Responsiveness** | Mobile-first Tailwind, animated hero, Kidrove blue palette, circuit SVG |
| **React Component Structure** | 7 clean components, each single-responsibility, props-driven |
| **Code Quality** | Zod schemas, error boundaries, loading/success states, readable naming |
| **API Implementation** | Express + express-validator, Mongoose model, in-memory fallback, proper HTTP codes |
| **Attention to Detail** | Scroll-aware navbar, AnimatePresence transitions, ARIA labels, reduced-motion |

### Bonus Points Implemented ✨
- [x] **Tailwind CSS** — full utility-first styling
- [x] **Form validation** — Zod + React Hook Form (client) + express-validator (server)
- [x] **Loading states** — spinner on submit button, disabled during loading
- [x] **MongoDB integration** — Mongoose model with in-memory fallback
- [x] **Clean code structure** — separated components, models, config

---

## 📧 Contact

For questions: hello@kidrove.com  
Website: [www.kidrove.com](https://www.kidrove.com)
