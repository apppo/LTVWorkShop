# SoftLaunch - Career Development Platform

SoftLaunch is a modern web application built with Next.js and TailwindCSS, designed to help young professionals develop essential soft skills for career success.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0.0 or higher)
- npm (usually comes with Node.js)

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
```bash
git clone [repository-url]
cd softlaunch-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

The application should now be running and you can explore the following pages:
- Home: http://localhost:3000
- Presentation Skills: http://localhost:3000/presentation-skills
- Networking Skills: http://localhost:3000/networking-skills
- Registration: http://localhost:3000/register

## Project Structure

```
softlaunch-next/
├── app/
│   ├── components/         # Shared components
│   ├── presentation-skills/# Presentation skills page
│   ├── networking-skills/ # Networking skills page
│   ├── register/         # Registration and pricing page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
└── package.json         # Project dependencies
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Development Notes

- The application uses Next.js 14 with the App Router
- TailwindCSS is used for styling
- TypeScript is used for type safety
- The project includes responsive design for all screen sizes

## Features

- Modern, responsive landing page
- Detailed pages for presentation and networking skills
- Pricing tiers with registration form
- Docker containerization for easy deployment

## Getting Started

### Prerequisites

- Node.js 18 or later
- Docker (optional)

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t softlaunch .
```

2. Run the container:
```bash
docker run -p 3000:3000 softlaunch
```

3. Access the application at [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/app` - Next.js app router pages and components
- `/app/components` - Reusable React components
- `/public` - Static assets
- `/app/globals.css` - Global styles and Tailwind imports

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - UI library
- [Docker](https://www.docker.com/) - Containerization

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
