<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicInOut } from "svelte/easing"
    let phoneVisible = false;

    onMount(() => {
        setTimeout(() => {
            phoneVisible = true;
        }, 500)
    })
</script>

<div class="page-container">
    <div class="hero-container">
        <div class="title-container">
            <span>Solve logical problems</span>
            <p>Face complex issues while utilizing the full power of machines</p>
        </div>
        <div class="phone-container">
            {#if phoneVisible}
            <div class="phone-blur" in:fly={{ y: 100, duration: 750, easing: cubicInOut }}></div>
            <div class="phone" in:fly={{ y: 100, duration: 750, easing: cubicInOut }}></div>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .page-container {
        @include box(100vw, 100vh);
    }
    .hero-container {
        position: relative;
        height: calc(100vh - clamp(50px, 10vh, 60px) - 50px);
        width: 100vw;
        top: calc(clamp(50px, 10vh, 60px) + 50px);
        display: grid;
        grid-template-rows: 30% 70%;
    }
    .title-container {
        @include box(100%);
        @include flex-center;
        flex-direction: column;
        & span {
            font-size: 40px;
            font-weight: bold;
            margin: 10px;
        }
        & p {
            font-size: 22px;
            vertical-align: middle;
            text-align: center;
        }
    }
    .phone-container {
        @include box(100%);
        // @include flex-center;
    }
    .phone {
        @include box(22.5vh, 40vh);
        position: absolute;
        background-color: #1E1E1E;
        border-radius: min(10px, 20%);
        margin: 5vh 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
    }
    .phone-blur {
        @include box(30vh);
        position: absolute;
        top: calc(30% + 10vh);
        left: 50%;
        transform: translateX(-50%);
        background-color: rgb(64, 124, 198);
        filter: blur(75px);
        border-radius: 100%;
        z-index: 1;
    }
</style>