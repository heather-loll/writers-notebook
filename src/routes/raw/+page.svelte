<script lang="ts">
  import jsonData from "../../data.json";

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

<a
  href="/"
  aria-label="Scroll to Top"
  class="p-4 absolute top-0 left-0 font-semibold hover:opacity-70 flex space-x-2 items-center"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
  <span>Back to Main Page</span></a
>

<div class="prose p-4 mx-auto container my-8">
  <div
    class="p-6 flex space-x-5 rounded border-2 border-gray-300 mb-8 md:-mx-8 items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-12 h-12 stroke-gray-500 flex-0"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
    <span class="leading-0 flex-0"
      >This page is designed for devices which may have trouble rendering the
      main page. For an optimal experience, <a href="/">Click Here</a>.</span
    >
  </div>
  <h1 class="mb-0">Writer's Notebook</h1>
  <p class="mt-2">Gavin Hernandez, WRIT1, UCSC Winter 2024</p>

  <hr class="mt-4 mb-8 border-gray-300 md:-mx-8" />

  {#each categories as category}
    <h2>{category.name}</h2>
    <ul>
      {#each category.data as data}
        <h3>{data.num}. {data.title}</h3>
        <p>{data.text}</p>
        <blockquote class="mb-1">
          {data.quote}
        </blockquote>
        <span class="text-sm text-gray-500">{data.quoteSource}</span>
      {:else}
        <p>This category is empty...</p>
      {/each}
    </ul>
  {/each}
</div>
