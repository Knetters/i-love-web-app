<script>
    export let data

    import UI from "../lib/components/UI.svelte";
    import Posts from "../lib/components/Posts.svelte";
</script>

<main>
    <UI {data}/>
</main>

<style>
    main {
        height: 100vh;
        width: 100vw;
        background-color: #7DB1BD;
        position: absolute;
    }
</style>