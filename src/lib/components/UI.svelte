<script>
    export let data

    import Posts from "./Posts.svelte";

</script>

<section>
    <div class="UI-container">
        <div class="UI-toolbar">
            <span>I love web</span><span> Nieuwe map</span><span> Uploaden</span><span> Sorteren</span><span> Herladen</span>
        </div>
        <div class="content-container">
            <div class="filter-box">
                <div class="filter-row">
                    <img src="/folderFile.png" alt="">
                    <p>Categorie</p>
                </div>
                <div class="filter-row extra-margin">
                    <img src="/folderFile.png" alt="">
                    <p>Toegankelijkheid</p>
                </div>
                <div class="filter-row extra-margin">
                    <img src="/folderFile.png" alt="">
                    <p>Bedrijfsleven</p>
                </div>
                <div class="filter-row extra-margin">
                    <img src="/folderFile.png" alt="">
                    <p>Portfolio</p>
                </div>
                <div class="filter-row extra-margin">
                    <img src="/folderFile.png" alt="">
                    <p>Workstyle</p>
                </div>
            </div>
            <div class="content-box">
                <div class="search-box">
                    <input type="search" placeholder="Zoeken...">
                </div>
                <Posts {data}/>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        position: relative;
        background-color: #F0F0F0;
        height: 70vh;
        width: 70vw;
        margin-left: 10vw;
        margin-top: 10vh;
        box-shadow: 0px 0px 10px 5px #7272724b;
        border-radius: .2rem;
    }

    .UI-container {
        height: 100%;
    }

    span {
        margin-right: 3rem;
        font-size: .8rem;
    }

    .UI-toolbar {
        background-color: #CECECE;
        width: 100%;
        height: 5%;
        padding: .3rem .5rem;
        border-radius: .2rem .2rem 0rem 0rem;
    }

    .content-container {
        display: flex;
        height: 95%;
    }

    .filter-box {
        width: 20%;
        background-color: #CECECE;
        padding: .1rem .5rem .5rem .5rem;
        border-radius: 0rem 0rem 0rem .2rem;
        font-size: .8rem;
    }

    .filter-box img{
        width: 1.5rem;
    }

    .filter-row {
        display: flex;
        margin-bottom: .2rem;
        transition: .2s;
        cursor: pointer;
    }

    .filter-row:hover {
        padding-left: .5rem;
    }

    .filter-row:hover img {
        transform: rotate(5deg);
    }

    .extra-margin {
        margin-left: 2rem;
    }

    .filter-row p {
        font-size: .8rem;
        padding: .3rem .5rem;
    }

    .content-box {
        width: 80%;
    }

    .search-box {
        width: 100%;
        padding: .3rem .5rem;
        border-bottom: 1px solid #CECECE;
    }

    .search-box input {
        width: 100%;
        font-size: 1rem;
    } 

</style>
