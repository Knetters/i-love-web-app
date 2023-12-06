<script>
    export let data

    import UI from "../lib/components/UI.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        
        const listItems = document.getElementById('filterMe').getElementsByTagName('li');

        for (let i = 0; i < filterItems.length; i++) {
            filterItems[i].addEventListener('click', function() {
                const filterId = this.textContent.trim();

                for (let j = 0; j < filterItems.length; j++) {
                    filterItems[j].classList.remove('active');
                }
                this.classList.add('active');

                if (filterId.toLowerCase() === 'alles') {
                    for (let j = 0; j < listItems.length; j++) {
                        listItems[j].style.display = 'block';
                    }
                } else {
                    for (let j = 0; j < listItems.length; j++) {
                        const listItem = listItems[j];
                        if (listItem.id === filterId) {
                            listItem.style.display = 'block';
                        } else {
                            listItem.style.display = 'none';
                        }
                    }
                }
            });
        }

    });
</script>

<svelte:head>
    <title>I Love Web</title>
</svelte:head>

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