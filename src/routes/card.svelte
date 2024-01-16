<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  import { modalIsOpen } from "$lib/stores";

  export let idx: number;
  export let title: string;
  export let quote: string;
  export let quoteSource: string;

  export let isModal = false;
  export let modalOpen = false;
  export let closeParent = () => {};
  export let rect: any = {};

  let showQuote = isModal;

  $: if (!$modalIsOpen && isModal) {
    showQuote = false;
    closeAnimation();
  }

  onMount(() => {
    if (isModal) {
      // Start in closing state (matches original card)
      closeAnimation();

      // Add a transition
      const time = 300;
      elem.style.transition = `top ${time}ms, bottom ${time}ms, left ${time}ms, right ${time}ms`;

      // Just after creation, apply new styles to expand to modal view
      setTimeout(() => {
        elem.style.top = "6rem";
        elem.style.bottom = "6rem";

        // Remove property so classes work
        elem.style.left = "";
        elem.style.right = "";

        // Use tailwind so classes are responsive
        elem.classList.add("left-4");
        elem.classList.add("right-4");
        elem.classList.add("md:left-12");
        elem.classList.add("md:right-12");
        elem.classList.add("lg:left-48");
        elem.classList.add("lg:right-48");

        elem
          .querySelector(".modal-close-button")
          ?.classList.remove("opacity-0");

        setTimeout(() => {
          elem.style.overflow = "auto";
        }, 299);
      }, 1);
    }
  });

  const closeAnimation = () => {
    elem.style.top = `${rect.top}px`;
    elem.style.bottom = `${window.innerHeight - (rect.top + rect.height)}px`;
    elem.style.left = `${rect.left}px`;
    elem.style.right = `${window.innerWidth - (rect.left + rect.width)}px`;
    elem.querySelector(".modal-close-button")?.classList.add("opacity-0");
    elem.style.overflow = "hidden";
  };

  let elem: HTMLElement;

  const openModal = () => {
    modalOpen = true;
    modalIsOpen.set(true);
    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalIsOpen.set(false);
    setTimeout(() => {
      modalOpen = false;
      document.documentElement.style.overflow = "auto";
    }, 300);
  };

  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && modalOpen) {
      closeModal();
    }
  };
</script>

<div
  bind:this={elem}
  class="shadow-lg p-4 rounded-xl bg-white"
  class:opacity-0={modalOpen}
  class:fixed={isModal}
  class:z-50={isModal}
>
  <span class="text-2xl font-bold pb-2">
    {idx}.
    <svelte:element
      this={isModal ? "span" : "h3"}
      class="inline whitespace-pre-line"
    >
      {title}
    </svelte:element>
  </span>
  <div class="flex gap-4 flex-col md:flex-row pt-1">
    <p class="flex-1"><slot /></p>
    {#if showQuote}
      <span class="flex-1">
        <h4 class="font-bold text-xl">Quote</h4>
        <p>
          <span class="italic text-gray-600 whitespace-pre-line">"{quote}"</span
          >
          <span>({quoteSource})</span>
        </p>
      </span>
    {/if}
  </div>
  {#if isModal}
    <button
      class="modal-close-button transition-opacity absolute top-4 right-4 w-8 h-8 rounded-full ring-2 ring-gray-100 hover:bg-gray-100 text-gray-700 grid place-items-center"
      on:click={closeParent}
    >
      <svg
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  {:else}
    <button
      class="text-primary-500 uppercase text-lg font-semibold tracking-wider px-3 py-2 border-primary-400 border-2 rounded-lg hover:bg-primary-400 hover:border-primary-400 mt-6 transition-colors hover:text-white"
      on:click={openModal}
      disabled={$modalIsOpen}
    >
      Learn more
    </button>
  {/if}
</div>

<svelte:window on:keydown={keydown} />

{#if modalOpen}
  {@const rect = elem.getBoundingClientRect()}

  {#if $modalIsOpen}
    <div
      class="fixed inset-0 bg-black/30 z-40"
      on:click={closeModal}
      role="presentation"
      aria-hidden="true"
      transition:fade={{ duration: 300 }}
    />
  {/if}
  <svelte:self
    {idx}
    {title}
    {quote}
    {quoteSource}
    isModal={true}
    {rect}
    open={modalOpen}
    closeParent={closeModal}
  >
    <slot />
  </svelte:self>
{/if}
