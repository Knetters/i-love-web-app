<script>
    export let data;
</script>

<section>
    <ul>
        {#each data.posts as post }
            <a id="{post.category}" href="/post/{post.slug}">
                <li>
                    <div class="item">
                        <img src="/txtFile.png" alt="">
                        <p>{post.slug}.txt</p>
                    </div>
                </li>
            </a>
        {/each}
    </ul>
</section>

<style>
    ul {
        padding: .5rem;
    }

    li {
        float: left;
    }

    .item {
        width: 8rem;
        text-align: center;
        margin-bottom: 1rem;
        margin-right: 1rem;
    }

    .item:hover {
        outline: 1px solid #acacac;
    }

    .item p {
        font-size: .8rem;
    }

    img {
        width: 6rem;
    }

</style>
