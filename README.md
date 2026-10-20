# Sudhanshu Shekhar: personal brand site

React + TypeScript + Vite + Tailwind v4, with Lenis (smooth scroll) and Lucide icons.

    npm install
    npm run dev      # develop
    npm run build    # type-check and build to dist/

## Adding real content
All content lives in `src/data/content.ts`. Drop files into `public/assets/<folder>/` and reference them
(e.g. `/assets/portrait/sudhanshu.jpg`). Items marked `pending: true` render as clearly labelled
"pending verification" slots; remove the flag once details are verified. Nothing is invented.

Still needed from the client: portrait, Skrappers and Sudha Arpan photos, verified event, award, media and MoU details
(redacted evidence images, permission to publish), official venture URLs, degree names, the domain
(canonical URL) and a 1200x630 og:image.

## Contact form
There is no backend. The form composes a `mailto:` message to the address in `content.ts` and says so on the page.
