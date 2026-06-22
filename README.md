# ai-storybook

A [Next.js](https://nextjs.org) starter for creating AI-generated children's storybooks, built with the App Router, TypeScript and Tailwind CSS.

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project structure

```
app/
  layout.tsx        # Root layout and metadata
  page.tsx          # Landing page
  globals.css       # Global styles + Tailwind directives
  create/page.tsx   # Story builder (placeholder, ready to wire up)
```

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Build the app for production      |
| `npm run start` | Run the production build          |
| `npm run lint`  | Lint the project with ESLint      |

## Next steps

- Connect the `/create` form to your preferred AI provider to generate story text.
- Add an image-generation step to illustrate each page.
- Persist generated books (e.g. with a database) so they can be revisited.
