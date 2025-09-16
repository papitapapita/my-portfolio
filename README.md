# Portfolio – Jonathan Olivos

A modern portfolio built with cutting-edge web technologies to showcase my work, services, and resume.

## Tech Stack

- **Next.js** – Full-stack React framework

- **React.js** – UI library

- **TypeScript** – Strongly typed JavaScript

- **TailwindCSS** – Utility-first CSS framework

- **shadcn/ui** – Reusable, accessible UI components

- **Framer Motion** – Smooth animations and transitions

## Features & Sections

### General Layout

- The whole layout features framer motion animations. Both for the page itself and a stairs animation every time we change from page.
- The navbar holds responsiveness for desktop and mobile. In Desktop it is a regular nav and for mobile it is a dropdown menu

### Home

- Introduction with a call-to-action.
- Downloadable CV with Social media buttons.
- An animated circle around a picture
- Counters of years of experiences, projects, tecnologies and commits

### Resume

- Professional background
- Skills and experiences
- About me

### Work

- Showcase of selected projects
- Links to live demos and repositories

### Services

- List of services I provide (web development, backend solutions, etc.)

### Contact

- Contact form with validation

## Project Structure

```bash
├── app/ # Next.js App Router pages
├── components/ # Reusable components
├── config/ # Config files
├── contexts/ # Context providers
├── data/ # App's reusable data
├── hooks/ # custom hooks
├── types/ # Typescript types and interfaces
└── lib/ # Helper functions
```

## Live Demo

[View Portfolio](https://www.jonathanolivos.lat/)

## Installation & Setup

```bash
# Clone repo

git clone https://github.com/papitapapita/my-portfolio.git

# Enter project folder

cd my-portfolio

# Install dependencies

npm install

# Run development server

npm run dev
```

📜 License

This project is licensed under the MIT License.
