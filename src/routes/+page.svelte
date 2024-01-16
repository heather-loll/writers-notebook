<script lang="ts">
  import Category from "./Category.svelte";
  import { modalIsOpen } from "$lib/stores";
  import jsonData from "../data.json";

  let categories: CategorizedTips = [];

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
  <title>Writer's Notebook - Gavin Hernandez</title>
</svelte:head>

<div class="h-full w-full bg-gray-50">
  <header
    class="w-full min-h-[50dvh] md:min-h-[70dvh] bg-gradient-to-br from-secondary-500 to-primary-400 mb-12 grid place-items-center"
    style="clip-path: polygon(100% 0%, 0% 0% , 0.00% 83.33%, 2.50% 83.50%, 5.00% 83.98%, 7.50% 84.76%, 10.00% 85.79%, 12.50% 87.01%, 15.00% 88.35%, 17.50% 89.75%, 20.00% 91.13%, 22.50% 92.40%, 25.00% 93.49%, 27.50% 94.36%, 30.00% 94.95%, 32.50% 95.22%, 35.00% 95.16%, 37.50% 94.78%, 40.00% 94.10%, 42.50% 93.15%, 45.00% 91.99%, 47.50% 90.68%, 50.00% 89.29%, 52.50% 87.90%, 55.00% 86.58%, 57.50% 85.42%, 60.00% 84.47%, 62.50% 83.79%, 65.00% 83.41%, 67.50% 83.35%, 70.00% 83.62%, 72.50% 84.21%, 75.00% 85.08%, 77.50% 86.18%, 80.00% 87.45%, 82.50% 88.82%, 85.00% 90.22%, 87.50% 91.56%, 90.00% 92.78%, 92.50% 93.81%, 95.00% 94.59%, 97.50% 95.07%, 100.00% 95.24%);"
  >
    <a
      class="absolute right-0 top-0 p-4 flex gap-1.5 items-center drop-shadow-lg hover:opacity-75"
      href="#!"
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
    <div class="pb-16">
      <h1 class="text-5xl text-white font-black uppercase text-center mb-1">
        Writer's Notebook
      </h1>
      <p class="text-2xl text-white font-bold tracking-wide text-center">
        By: Gavin Hernandez <span class="opacity-50 font-thin -translate-x-1"
          >|</span
        > WRIT1
      </p>
    </div>
  </header>
  <div class="container mx-auto px-4 md:px-12 lg:px-24 2xl:px-32">
    {#each categories as category}
      <Category categoryName={category.name} tips={category.data} />
    {/each}
  </div>
</div>

<footer class="bg-gray-200 p-4 text-center">
  Made by Gavin Hernandez for Writing 1, UCSC Winter Quarter 2024. <a
    href="#!"
    class="text-primary-600 hover:underline"
    tabindex={$modalIsOpen ? -1 : 0}>View code on GitHub</a
  >!
</footer>
