# Writer's Notebook

This is a project for WRIT1. The site is viewable [here](https://writersnotebook.gavhern.com).

Site made with SvelteKit running on Vite & TypeScript with TailwindCSS & PostCSS for styling.

To build and run locally:

```sh
$ git clone https://github.com/GavHern/writers-notebook.git
$ npm i
$ npm run dev -- --open # add --host flag to view anywhere on the local network.
```

To build for production

```sh
$ npm run build
$ npm run preview
```

Actual data for the page is found in `src/data.json`.

Animation code is handled in a hacky but functional way. I just wanted to build this rapidly to focus on the actual project.
