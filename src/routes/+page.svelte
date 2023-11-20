<script>
    export let data

    import Intro from "../lib/components/Intro.svelte";
    import Filter from "../lib/components/Filter.svelte";
    import Posts from "../lib/components/Posts.svelte";
</script>

<Intro />
<Filter {data}/>
<Posts {data}/>
