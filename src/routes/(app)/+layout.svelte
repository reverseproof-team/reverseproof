<script lang="ts">
    import Header from "../../components/Header.svelte";
</script>

<Header />
<main>
    <slot />
</main>

<style lang="scss">
    main {
      @include box(100%);
      background-color: #0A0A0A;
      color: white;
      font-family: "Lato", sans-serif;
    }
</style>