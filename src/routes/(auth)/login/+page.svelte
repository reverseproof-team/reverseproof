<div class="login">
    <div class="login-titles">
        <span class="login-title">Welcome to our app!</span>
        <span class="login-subtitle">Log in to access our services:</span>
    </div>
    <div class="login-content">
        <div class="oauth-login">
            <button class="google-login">
                <img src="/google-icon.svg" alt="Login with google" />
            </button>
            <button class="apple-login">
                <img src="/apple-icon.svg" alt="Login with apple" />
            </button>
        </div>
        <div class="or">
            <span>or</span>
        </div>
        <form method="POST" action='/login?/'>
            <label for="email">Email:</label>
            <input type="text" name="email" placeholder="you@example.com" id="email" />
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="••••••••" id="password" />
            <span class="sign-up">Don't have an account? <a href="/signup">sign up!</a></span>
            <button type="submit">Log in with Email</button>
        </form>
    </div>
</div>

<style lang="scss">
    button:hover {
        cursor: pointer;
    }
    .login {
        @include box(400px, 600px);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        * {
            width: 100%;
        }
    }

    .login-titles {
        @include flex-center;
        flex-direction: column;
        gap: 10px;
    }
    .login-title {
        font-size: 35px;
        font-weight: bold;
    }
    .login-subtitle {
        font-size: 20px;
    }
    .login-content {
        @include box(100%);
        @include flex-center;
        flex-direction: column;
        gap: 20px;
        input, button {
            border-radius: 7.5px;
        }
    }
    .oauth-login {
        @include flex-center;
        gap: 10px;
        height: 40px;
        button {
            @include box(100%);
            @include flex-center;
            border: none;
            background-color: #111111;
            outline: #272727 solid 2px;
            transition: border .15s, outline .15s;
            &:hover {
                outline-color: #434343;
            }
            &:active {
                outline: #434343 solid 4px;
            }
            img {
                @include box(75%);
            }
        }
    }
    .or {
        @include flex-center;
        span {
            width: 100%;
            text-align: center;
            background:
            linear-gradient(#454545 0 0) left,
            linear-gradient(#454545 0 0) right;
            background-size: 45% 1px;
            background-repeat: no-repeat;
            font-size: 17px;
            margin: 10px 0 5px 0;
        }
    }
    form {
        @include flex-center;
        flex-direction: column;
        gap: 20px;
        label {
            pointer-events: none;
        }
        input {
            @include box(100%, 40px);
            background-color: #0A0A0A;
            border: 2px solid #272727;
            padding: 0 9px;
            color: white;
            outline: none;
            font-family: inherit;
            transition: border .15s, padding .15s;
            &:hover {
                border-color: #434343;
            }
            &:focus {
                border-color: #dd9f0f;
            }
        }
        .sign-up {
            text-align: center;
            margin-top: 10px;
            a {
                text-decoration: none;
                color: rgb(0, 157, 255);
            }
        }
        button {
            @include box(100%, 40px);
            margin-top: 10px;
            color: white;
            font-size: 15px;
            font-family: "Lato", sans-serif;
            border: none;
            background-color: #dd9f0f;
            transition: background-color .15s;
            &:hover {
                background-color: #e7ad28;
            }
            &:active {
                background-color: #cb9007
            }
        }
    }
</style>