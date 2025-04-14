# Front – Next.js Project with Atomic Design

## Description

This project is a front-end application developed using Next.js, following the **Atomic Design** architecture. The goal is to ensure better organization of components and promote reusability.

## Key Features

- ⚛️ Built with **Next.js** for server-side rendering and performance
- 🧬 Uses **Atomic Design** to structure UI components (Atoms, Molecules, Organisms, etc.)
- ♻️ Emphasis on **component reusability**
- 💡 Modular and scalable front-end architecture

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/Loukade/client_app_front.git
cd your-repo-name
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser to view the app.

## Project Structure

```
src/
├── components/              # Atomic Design components
│   ├── atoms/               # Basic building blocks
│   ├── molecules/           # Groups of atoms
│   ├── organisms/           # Complex UI components
│   └── templates/           # Page-level layouts
├── app/                   # Next.js pages
├── styles/                  # Global styles and theme files
├── lib/                   # Utility functions
```

## Scripts

- `dev` – Run the app in development mode
- `build` – Create a production build
- `start` – Start the app in production mode
- `lint` – Run linter
