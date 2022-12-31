<script lang="ts">
  import { fly } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  import { onMount } from "svelte";

  let visible = false;
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 400)
  })
</script>

<main>
    <div class="auth">
      <div class="logo">
        <a href="/">
            <img src="/reverseproof.svg" alt="" class="logo-image" />
        </a>
        <a href="/">
            <span class="logo-text">ReverseProof</span>
        </a>
      </div>
      {#if visible}
        <div class="variable" in:fly={{ x: -150, opacity: 0, duration: 750, easing: quartInOut }}>
          <slot />
        </div>
      {/if}
    </div>
    <div class="quote">
      <div>
      <h1>"Simplicity is a most complex form."</h1>
      <h2><i>- Duke Ellington</i></h2>
    </div>
    </div>
</main>

<style lang="scss">
    main {
      @include box(100%);
      color: white;
      font-family: "Lato";
      display: grid;
      grid-template-columns: min(40%, 750px) max(60%, 100% - 750px);
    }
    .auth {
      background-color: #161616;
      border-right: 1px solid #272727;
    }
    .logo {
      @include flex-center;
      position: absolute;
      top: 0;
      left: 0;
      margin: 20px;
      gap: 10px;
      & > a {
        @include flex-center;
        text-decoration: none;
        text-align: center;
        color: white;
      }
      .logo-text {
        font-weight: 700;
        font-size: clamp(20px, 1vw + 1rem, 25px);
      }
      .logo-image {
        width: clamp(32.5px, 7vh, 42.5px);
        height: clamp(32.5px, 7vh, 42.5px);
        border-radius: min(10px, 20%);
      }
    }
    .variable {
      @include box(min(40%, 750px), 90%);
      @include flex-center;
      position: absolute;
      bottom: 0;
    }
    .quote {
      @include flex-center;
      background-color: #0A0A0A;
      text-align: center;
      & h1 {
        font-size: 40px;
      }
      & h2 {
        font-size: 25px;
      }
    }
    
</style>