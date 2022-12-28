<div class="page-container">
    <div class="login-container">
    <div class="form-container">
    <span class="page-title">Log in to ReverseProof</span>
        <form method="POST" action="/login">
            <div class="social-auth">
                <button>
                    <img src="/google-icon.svg" alt="sign in with Google" />
                </button>
                <button>
                    <img src="/apple-icon.svg" alt="sign in with Apple" />
                </button>
            </div>
            <div class="or">
                <span class="or">or</span>
            </div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" />
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button type="submit" id="form-submit">Login with Email</button>
        </form>
</div>
</div>
</div>

<style lang="scss">
    .page-container {
        @include box(100vw, 100vh);
    }
    .login-container {
        position: relative;
        width: 100vw;
        height: calc(100vh - clamp(50px, 10vh, 60px) - min(5vh, 30px));
        top: calc(clamp(50px, 10vh, 60px) + min(5vh, 30px));
        @include flex-center;
    }
    .form-container {
        @include flex-center;
        flex-direction: column;
        & > * {
            margin: clamp(5px, 2.5vh, 40px);
        }
    }
    .page-title {
        position: relative;
        bottom: 2vh;
        font-size: 40px;
        font-weight: bold;
    }
    form {
        position: relative;
        @include flex-center;
        flex-direction: column;
        & > * {
            width: 250px;
        }
        & button:hover {
            cursor: pointer;
        }
        & input, button {
            height: 35px;
            // height: clamp(20px, 10%, 32px);
            border: 1px solid #454545;
            border-radius: 5px;
            margin: 10px 0;
        }
        & input {
            background-color: #353535;
        }
        & input:focus {
            outline: #454545 solid 2.5px;
        }
        & a {
            color: white;
        }
        & a:hover {
            text-decoration: none;
        }
    }
    .social-auth {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        & button {
            width: 100%;
            @include flex-center;
            background-color: #353535;
        }
        & button:hover {
            background-color: #454545;
        }
        & button img {
            @include box(75%);
        }
    }
    .or {
        @include flex-center;
        & span {
            width: 100%;
            text-align: center;
            background:
            linear-gradient(#454545 0 0) left,
            linear-gradient(#454545 0 0) right;
            background-size: 40% 1px;
            background-repeat: no-repeat;
            margin: 10px 0;
        }
    }
    #form-submit {
        font-family: inherit;
        margin: 20px;
        border: none;
        color: white;
        background-color:rgb(10, 10, 10);
        background-image: linear-gradient(to right, rgb(222, 187, 0), rgb(234,140,0));
        &:hover {
            background-image: none;
            background-color: rgb(10, 10, 10);
            border: 1px solid rgb(222, 187, 0);
        }
    }
</style>