# Overreacted

Recreation of [Dan Abramov’s personal weblog](https://overreacted.io) using Nextjs.

## Introduction

This repository contains my submission for the interview task assignment.

### Demo

You can access the live demo of this project [here](https://overreacted.netlify.app).

## Technologies Used

- Next.js 14
- Typescript
- Redux
- Tailwind CSS
- Daisyui

## Getting Started

To run this project locally, follow these steps:

1. **Installation**: Clone this repository.

   ```bash
   git clone https://github.com/SimaAmini/overreacted.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary packages.

   ```bash
   npm install
   ```

3. **Run the Application**: Start the development server.
   ```bash
   npm run dev
   ```

## Project Structure

    ├── app
    │   ├── [id]
    │   │   └── page.tsx
    │   ├── components
    │   │   ├── header.tsx
    │   │   ├── post-card.tsx
    │   │   └── toggle-theme.tsx
    │   │
    │   ├── modals
    │   │   └── post.ts
    │   │
    │   ├── redux-store
    │   │   ├── redux-provider.tsx
    │   │   ├── store.ts
    │   │   └── theme-slice.ts
    │   │
    │   ├── services
    │   │   └── posts
    │   │       ├── fetch-post.ts
    │   │       └── fetch-posts.ts
    │   ├── utils
    │   │   ├── date.ts
    │   │   ├── fonts.ts
    │   │   └── sort-by-date
    │   └── ...
    └── ...
