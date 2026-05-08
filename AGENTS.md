# Emeric Reaper Portfolio Platform - System Documentation

## Architecture Overview
This platform is built as a high-performance full-stack application using **Express.js**, **React (Vite)**, and **Firebase**.

### Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS 4, Framer Motion
- **Backend**: Express.js (Node.js)
- **Database/Auth**: Firebase (Firestore & Firebase Auth)
- **Validation**: Zod + React Hook Form
- **UI Components**: shadcn/ui

## Project Structure
- `/src/components`: Reusable UI components and business components.
- `/src/lib`: Configuration for external services (Firebase, etc.).
- `/src/services`: Logic for data fetching and API interaction.
- `/src/types`: TypeScript definitions.
- `/server.ts`: Express server entry point serving the API and the React frontend.

## Coding Rules
- **TypeScript**: No usage of `any`. Strict type safety is mandatory.
- **Components**: Functional components ONLY. Use React hooks.
- **Styling**: Tailwind CSS exclusively. No CSS modules or inline styles.
- **Firebase**: Use the `handleFirestoreError` pattern for all database operations.
- **Admin**: Protected routes for the dashboard via Firebase Auth.

## Database Schema (Firestore)
- `projects`: { title, description, image, tags, link, featured, slug, createdAt }
- `blogPosts`: { title, content, excerpt, tags, slug, featured, createdAt }
- `messages`: { name, email, subject, message, createdAt }

## Deployment Instructions
- Production build: `npm run build`
- Start command: `npm start` (Runs `node server.ts`)
- Port: 3000 (Hardcoded for the environment)
