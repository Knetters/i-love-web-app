<script>
    export let data;

</script>

  <svelte:head>
    <title>I Love Web - {data.post.title}</title>
  </svelte:head>

<main class="post-container">
  <div class="post">
    <div class="post-toolbar">
      <a href="/"><i class="fa fa-circle" aria-hidden="true"></i></a>
    </div>
    <p class="toolbar-title">{data.post.slug}.txt</p>
    <div class="content">
      {#if data.post}
        <span>{data.post.category}</span>
        <h1>{data.post.title}</h1>

        <p>Door {data.post.speaker}</p>

        {@html data.post.content.html}
      {:else}

          <p>Project not found.</p>
      {/if}
    </div>
  </div>
</main>


<style>
  main {
    background-color: #7DB1BD;
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  .post {
    position: absolute;
    width: 80%;
    margin-left: 10%;
    height: 80vh;
    overflow-y: scroll;
    background-color: #F0F0F0;
    margin-top: 4rem;
    border-radius: .2rem;
    box-shadow: 0px 0px 10px 5px #7272724b;
  }

  .content {
    width: 60%;
    margin-left: 20%;
    margin-top: 4rem;
    margin-bottom: 5rem;
  }

  .post-toolbar {
    background-color: #CECECE;
    padding: .3rem 1rem;
    border-radius: .2rem .2rem 0rem 0rem;
    text-align: right;
    width: 80%;
    position: fixed;
  }

  .toolbar-title {
    position: fixed;
    margin: 0;
    padding-top: .35rem;
    font-size: .8rem;
    width: 60%;
    margin-left: 10%;
    text-align: center;
  }

  .post-toolbar i {
    color: #f24d4d;
    cursor: pointer;
  }

</style>