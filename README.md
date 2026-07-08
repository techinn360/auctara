# Auctara

Auctara is a React + Vite marketing site for a white-label auction platform. It includes a multi-step "Book a demo" popup with an embedded Calendly scheduler on the final step.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the project root:

```env
VITE_CALENDLY_URL=https://calendly.com/techinn360-com
```

3. Start the development server:

```bash
npm run dev
```

## Environment Variables

- `VITE_CALENDLY_URL`: Calendly page embedded in the final step of the `Book a demo` modal.

## Available Scripts

- `npm run dev`: Starts the Vite dev server
- `npm run build`: Builds the project for production
- `npm run lint`: Runs ESLint
- `npm run preview`: Previews the production build locally
