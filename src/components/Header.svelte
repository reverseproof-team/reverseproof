<script lang="ts">
	import { page } from "$app/stores"
    import reverseproofLogo from "$lib/assets/reverseproof.svg";

    const navs = [
        { path: "/about", icon: "/people.svg" },
        { path: "/", icon: "/home.svg" },
        { path: "/new", icon: "/plus.svg" }
    ];
</script>


<header>
    <div class="logo-container">
        <a href="/">
            <img src={reverseproofLogo} alt="" class="logo-image" />
        </a>
        <a href="/">
            <span class="logo-text">ReverseProof</span>
        </a>
    </div>
    <div class="nav-container">
        <nav>
            {#each navs as nav}
            <!-- <div class={"before-nav" + ($page.route.id === nav.path ? " primary" : "")}> -->
                <a href={nav.path} class={"nav-button" + ($page.route.id === nav.path ? " primary" : "")}>
                    <img src={nav.icon} alt="" />
                </a>
            <!-- </div> -->
            {/each}
        </nav>
    </div>
    <div class="user-container">
        <a href="/login" class="login-button">Log in</a>
        <a href="/signup" class="signup-button">Sign up</a>
    </div>
</header>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    header {
        width: min(80vw, 1250px);
        height: clamp(50px, 10vh, 60px);
        position: fixed;
        top: min(5vh, 30px);
        left: 50%;
        transform: translateX(-50%);
        background: rgba(10, 10, 10, 0.12);
        border: 1px solid rgba(221, 221, 221, 0.29);
        border-radius: 15px;
        backdrop-filter: blur(2px);
        color: white;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .logo-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & a {
            @include flex-center;
            color: white;
            text-decoration: none;
        }
    }
    .logo-image {
        width: clamp(32.5px, 7vh, 42.5px);
        height: clamp(32.5px, 7vh, 42.5px);
        margin: 0 10px;
        border-radius: min(10px, 20%);
        filter: drop-shadow(0px 1px 4px #454545);
    }
    .logo-text {
        margin: 0;
        font-family: "Lato", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: clamp(20px, 1vw + 1rem, 25px);
    }

    .nav-container nav {
        @include box(100%);
        @include flex-center;
    }

    .before-nav {
        width: clamp(30px, 6.5vh, 40px);
        height: clamp(30px, 6.5vh, 40px);
        @include flex-center;
        border-radius: 25%;
        margin: 6px;
        padding: 1px;
        filter: drop-shadow(0px 4px 4px #000000);
        background-image: linear-gradient(rgba(225, 190, 0, 1), rgba(225, 112, 0, .15));
        z-index: -1;
        &.primary {
            background: none;
        }
    }
    .nav-button {
        @include box(clamp(30px, 6.5vh, 40px));
        @include flex-center;
        border-radius: min(10px, 25%);
        background-color: rgb(10, 10, 10);
        margin: 10px;
        &.primary {
            background-image: linear-gradient(90deg, rgb(255, 213, 0), rgb(126, 81, 35));
        }
        & img {
            width: clamp(20px, 4vh, 25px);
            height: clamp(20px, 4vh, 25px);
        }
    }
    .nav-button:not(.primary)::before {
        content: "";
        @include box(clamp(30px, 6.5vh, 40px));
        position: absolute;
        border-radius: min(10px, 25%);
        margin: 6px;
        padding: 1px;
        background-image: linear-gradient(rgba(225, 190, 0, 1), rgba(225, 112, 0, .15));
        filter: drop-shadow(0px 4px 4px #000000);
        z-index: -1;
    }

    .user-container {
        @include box(100%);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        & a {
            height: clamp(30px, 6.5vh, 40px);
            width: clamp(75px, 19.5vh, 100px);
            @include flex-center;
            margin: 10px;
            text-decoration: none;
            color: white;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            border-radius: clamp(7.5px, 3vh, 10px);
            font-size: clamp(12px, 1.5vh + .5em, 18px);
            line-height: 24px;
            &.signup-button {
                background-color: #454545;
            }
            &.login-button {
                border: 1px solid #454545;
            }
            &.signup-button:hover:not(:active) {
                background-color: #555555;
            }
            &.login-button:hover:not(:active)  {
                border-color: #656565;
            }
        }
    }
</style>