# Kidrove AI & Robotics Summer Workshop

A full-stack workshop registration platform built for Kidrove's AI & Robotics Summer Workshop.

The goal of this project was to create a modern, responsive, and conversion-focused landing page where parents can learn about the workshop and register their children through a simple registration process.

The application consists of a React frontend and an Express.js backend connected to MongoDB, with a fallback mechanism that allows the application to work even when a database is unavailable.

---

## Project Overview

This project was designed to provide a complete workshop registration experience.

Parents visiting the website can:

* Learn about the workshop
* Understand eligibility, duration, and schedule
* Explore key learning outcomes
* Read frequently asked questions
* Register directly through an online form
* Receive confirmation after successful registration

The interface is optimized for desktop, tablet, and mobile devices.

---

## Key Features

### Responsive Landing Page

The entire website is fully responsive and adapts smoothly across different screen sizes.

### Interactive Hero Section

* Animated circuit-board background
* Workshop highlights
* Call-to-action buttons
* Statistics and workshop information

### Workshop Information Section

Provides essential workshop details including:

* Age group
* Duration
* Learning mode
* Workshop fee
* Start date

### Learning Outcomes

Students can clearly see what skills they will gain, including:

* AI fundamentals
* Robotics concepts
* Problem-solving skills
* Logical thinking
* Hands-on project building
* Team collaboration

### FAQ Section

Implemented using an animated accordion to improve user experience and reduce page clutter.

### Registration System

Users can register using a form that includes:

* Name
* Email
* Phone Number
* Child Name (optional)
* Child Age (optional)

The form includes both client-side and server-side validation to ensure data accuracy.

### Real-Time Feedback

* Loading state while submitting
* Success confirmation after submission
* Validation error messages
* Disabled submit button during requests

### Backend API

A dedicated REST API handles registration requests and validation.

Features include:

* Input validation
* Error handling
* MongoDB integration
* Proper HTTP status codes
* Secure API architecture

### Database Fallback Mechanism

If MongoDB is unavailable, the application automatically switches to in-memory storage, ensuring the registration flow continues to work during demonstrations and testing.

---

## Technical Implementation

### Frontend

Built using:

* React 18
* Vite
* Tailwind CSS
* Framer Motion
* React Hook Form
* Zod
* Axios
* Lucide React

### Backend

Built using:

* Node.js
* Express.js
* MongoDB
* Mongoose
* Express Validator
* CORS
* Dotenv

---

## Project Structure

The project follows a component-based architecture.

### Frontend Components

* Navbar
* Hero
* CircuitSVG
* WorkshopDetails
* LearningOutcomes
* FAQ
* RegistrationForm
* Footer

Each component is designed with a single responsibility, making the codebase easier to maintain and scale.

### Backend

* Express Server
* Mongoose Models
* API Routes
* Validation Layer
* Database Configuration

---

## Challenges Solved

### Form Validation

Implemented validation at both frontend and backend levels to prevent invalid data from being submitted.

### Responsive Design

Ensured consistent layouts across mobile, tablet, and desktop devices.

### User Experience

Added smooth animations, loading indicators, and success states to make interactions feel responsive and intuitive.

### Reliability

Introduced an in-memory storage fallback so the application remains functional even when MongoDB is unavailable.

---

## Possible Future Improvements

If this project were to be expanded further, the following features could be added:

* Admin dashboard for managing registrations
* Email notifications after registration
* Workshop seat availability tracking
* Payment gateway integration
* Registration analytics dashboard
* Workshop certificate generation
* Authentication and role management
* Multi-workshop support

---

## What I Learned

While building this project, I gained practical experience in:

* Building full-stack applications
* Creating reusable React components
* Form handling and validation
* REST API development
* Database integration using MongoDB
* Error handling strategies
* Responsive UI design
* Deployment workflows

---

## Deployment

### Frontend

Can be deployed on:

* Vercel
* Netlify

### Backend

Can be deployed on:

* Railway
* Render

Environment variables are used to configure API URLs and database connections for production deployments.

---

## Conclusion

This project demonstrates full-stack web development skills, including frontend development, backend API creation, database integration, validation, responsive design, and user experience optimization.

The focus was not only on building a visually appealing landing page but also on creating a reliable and production-ready registration workflow.

Developed as part of a workshop registration solution for Kidrove's AI & Robotics Summer Workshop.
