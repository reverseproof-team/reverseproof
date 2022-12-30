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
      <slot />
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
      @include flex-center;
      background-color: #161616;
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
        filter: drop-shadow(0px 1px 4px #454545);
      }
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