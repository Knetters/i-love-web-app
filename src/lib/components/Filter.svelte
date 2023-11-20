<script>
    export let data;
</script>

<section>
    <ul>
        {#each data.posts as post }
            <li>{post.category}</li>
        {/each}
    </ul>
</section>

<style>

</style>
