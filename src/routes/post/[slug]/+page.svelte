<script>
    export let data;

</script>

  <svelte:head>
    <title>{data.post.title}</title>
  </svelte:head>

<main>
    {#if data.post}
        <span>{data.post.category}</span>
        <h1>{data.post.title}</h1>

        {@html data.post.content.html}

        <a href="/"><p><i class="fa fa-arrow-left" aria-hidden="true"></i> Terug</p></a>
    {:else}

        <p>Project not found.</p>
    {/if}
</main>


<style>

</style>