<script lang="ts">
  import Category from "./Category.svelte";
  import { modalIsOpen } from "$lib/stores";
  import jsonData from "../data.json";
  import TableOfContents from "./TableOfContents.svelte";
  import { slide } from "svelte/transition";

  let categories: CategorizedTips = [];

  let bannerMessageOpen = true;

  Object.keys(jsonData).forEach((category) => {
    categories.push({
      name: category,
      // Not sure how to define the type, so just ignoring ts error since we know the shape of the json
      // @ts-ignore
      data: jsonData[category],
    });
  });
</script>

<svelte:head>
  <title>Writer's Notebook - Heather Hernandez</title>
</svelte:head>

<div class="h-full w-full bg-gray-50">
  {#if bannerMessageOpen}
    <div out:slide class="w-full flex justify-between items-center h-12">
      <div class="px-3 flex items-center">
        <svg
          aria-hidden="true"
          class="w-5 h-5 fill-secondary-500 mr-2"
          viewBox="0 0 24 24"
          ><path
            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
          /></svg
        >
        <span>
          My written reflection is on a different page. <a
            href="/reflection"
            tabindex={$modalIsOpen ? -1 : 0}
            class="text-primary-600 hover:underline">You can find it here</a
          >!
        </span>
      </div>
      <button
        class="transition-opacity mr-3 w-6 h-6 rounded-full ring-2 ring-gray-200 hover:bg-gray-200 text-gray-700 grid place-items-center"
        tabindex={$modalIsOpen ? -1 : 0}
        on:click={() => {
          bannerMessageOpen = false;
        }}
        aria-label="Dismiss notice"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
          aria-label="Close"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  {/if}
  <header
    class="relative w-full min-h-[50dvh] md:min-h-[70dvh] bg-gradient-to-br from-secondary-500 to-primary-400 mb-12 grid place-items-center"
    style="clip-path: polygon(100% 0%, 0% 0% , 0.00% 83.33%, 2.50% 83.50%, 5.00% 83.98%, 7.50% 84.76%, 10.00% 85.79%, 12.50% 87.01%, 15.00% 88.35%, 17.50% 89.75%, 20.00% 91.13%, 22.50% 92.40%, 25.00% 93.49%, 27.50% 94.36%, 30.00% 94.95%, 32.50% 95.22%, 35.00% 95.16%, 37.50% 94.78%, 40.00% 94.10%, 42.50% 93.15%, 45.00% 91.99%, 47.50% 90.68%, 50.00% 89.29%, 52.50% 87.90%, 55.00% 86.58%, 57.50% 85.42%, 60.00% 84.47%, 62.50% 83.79%, 65.00% 83.41%, 67.50% 83.35%, 70.00% 83.62%, 72.50% 84.21%, 75.00% 85.08%, 77.50% 86.18%, 80.00% 87.45%, 82.50% 88.82%, 85.00% 90.22%, 87.50% 91.56%, 90.00% 92.78%, 92.50% 93.81%, 95.00% 94.59%, 97.50% 95.07%, 100.00% 95.24%);"
  >
    <a
      class="absolute right-0 top-0 p-4 flex gap-1.5 items-center drop-shadow-lg hover:opacity-75"
      href="https://github.com/heather.loll/writers-notebook"
      tabindex={$modalIsOpen ? -1 : 0}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-white/90">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
        />
      </svg>
      <span class="text-white/90 font-semibold hidden md:inline">
        View On GitHub
      </span>
    </a>
    <a
      class="absolute left-0 top-0 p-4 flex gap-1.5 items-center drop-shadow-lg hover:opacity-75"
      href="/raw"
      tabindex={$modalIsOpen ? -1 : 0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 stroke-white/90"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>

      <span class="text-white/90 font-semibold hidden md:inline">
        Raw Data
      </span>
    </a>
    <div class="pb-16">
      <h1 class="text-5xl text-white font-black uppercase text-center mb-1">
        Writer's Notebook
      </h1>
      <p class="text-2xl text-white font-bold tracking-wide text-center">
        By: Heather Hernandez <span class="opacity-50 font-thin -translate-x-1"
          >|</span
        > WRIT1
      </p>
    </div>
  </header>

  <noscript class=""
    ><div class="text-center mx-auto w-full mb-12 text-xl">
      Page not working? <a href="/raw" class="text-primary-600 hover:underline"
        >View Raw Data</a
      >.
      <div class="text-sm text-gray-500 tracking-tight">
        This page requires JavaScript to function properly.
      </div>
    </div></noscript
  >

  <TableOfContents />

  <div class="container mx-auto px-4 md:px-12 lg:px-24 2xl:px-32">
    {#each categories as category}
      <Category categoryName={category.name} tips={category.data} />
    {/each}
  </div>
</div>

<footer class="bg-gray-200 p-4 text-center">
  Made by Heather Hernandez for Writing 1, UCSC Winter Quarter 2024. <a
    href="https://github.com/heather.loll/writers-notebook"
    class="text-primary-600 hover:underline"
    tabindex={$modalIsOpen ? -1 : 0}>View code on GitHub</a
  >!<br />Difficulty viewing this page?
  <a
    href="/raw"
    tabindex={$modalIsOpen ? -1 : 0}
    class="text-primary-600 hover:underline">View Raw Data</a
  >.
  <br />Made with
  <a
    href="https://svelte.dev/"
    tabindex={$modalIsOpen ? -1 : 0}
    class="text-primary-600 hover:underline">SvelteJS</a
  >
  and
  <a
    href="https://tailwindcss.com/"
    tabindex={$modalIsOpen ? -1 : 0}
    class="text-primary-600 hover:underline">TailwindCSS</a
  >.
</footer>

<a
  href="/reflection"
  tabindex={$modalIsOpen ? -1 : 0}
  class="flex space-x-2 items-center fixed bottom-6 right-6 p-3.5 border-2 border-primary-500 bg-secondary-300/30 hover:bg-secondary-300/50 rounded-full backdrop-blur-md transition-colors"
>
  <svg aria-hidden="true" class="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14zm12 0h-7.5l2-2H18z"
    ></path>
  </svg>
  <div class="text-primary-500 font-bold tracking-wide uppercase">
    Reflection
  </div>
</a>
