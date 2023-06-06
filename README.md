# Aha App

The Front-End Exam for Front-End Engineer at [Aha](https://earnaha.com/). The repo name `aha-v2` indicates the version of exam (Exam 2) that I took.

## Tech Stack

**Framework:** [Next.js](https://nextjs.org/) ([React.js](https://react.dev/)) with [TypeScript](https://www.typescriptlang.org/)

**UI Component Library:** [MUI](https://mui.com/)

**CSS:** [Tailwind CSS](https://tailwindcss.com/)

**Linter:** [ESLint](https://eslint.org/)

**Code Formatter:** [Prettier](https://prettier.io/)

**Coding Style:** [Airbnb Style](https://www.npmjs.com/package/eslint-config-airbnb-base)

**Hosting:** [Vercel](https://vercel.com/)

**Design:** [Figma](https://www.figma.com/file/fUYmGFToegw5yNJ7gwbUn0/Front-end-Exam?type=design&node-id=0-1&t=1EmFiirQqf6xDTE3-0) (by Aha)

## Dependencies

- node v18.16.0 (LTS)
- npm v9.5.1

## Run Locally

Clone the project

```bash
  git clone https://github.com/hizkiajuan/aha-v2.git
```

Go to the project directory

```bash
  cd aha-v2
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Exam Notes
- I use Aha's API, which leverages fakercloud's CDN to provide all the images/`avater` (e.g., https://cdn.fakercloud.com/avatars/lmjabreu_128.jpg). However, by the time I finished this exam, fakercloud seems to be down. Given this condition, I implemented fallback image handling, so the images shown in this app may not be as expected.
- In `/public/` I put the `/guide` and `/live` screenshots, as I submit in the [Figma file](https://www.figma.com/file/Dz7xNyFE7eDlzfyiff0cAe/Front-end-Exam-(Copy)---Hizkia-Juan-Suryanto?type=design&node-id=0%3A1&t=R8NpXO20kfqIDCtp-1) as Pixel-perfect Side-by-side Testing.
- Assuming this exam is a real-world app, these are my personal recommendations for future improvements/to-do(s): unit/e2e testing, i18n implementation and error handling (logging, monitoring).

