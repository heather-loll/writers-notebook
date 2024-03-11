<script lang="ts">
  import Masonry from "./Masonry.svelte";
  import Card from "./card.svelte";

  export let tips: Tip[];
  export let categoryName: string;
</script>

<div class="pb-6" id={encodeURIComponent(categoryName)}>
  <h2
    class="px-4 font-black text-4xl uppercase text-primary-400 drop-shadow-xl"
  >
    {categoryName}
  </h2>
  <Masonry reset="" gridGap="1rem">
    {#each tips as tip}
      <Card
        idx={tip.num ?? 0}
        title={tip.title}
        quote={tip.quote}
        quoteSource={tip.quoteSource}
      >
        {tip.text}
      </Card>
    {/each}
  </Masonry>
</div>
