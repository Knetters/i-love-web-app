<script>
    export let data;
</script>

<section>
    <ul>
        {#each data.posts as post }
            <a id="{post.category}" href="/post/{post.slug}"><li>{post.title} door {post.speaker}</li></a>
        {/each}
    </ul>
</section>

<style>

</style>
