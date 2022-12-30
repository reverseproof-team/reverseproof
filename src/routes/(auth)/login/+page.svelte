<div class="login">
    <div class="login-titles">
        <span class="login-title">Welcome to our app!</span>
        <span class="login-subtitle">Log in to access our services:</span>
    </div>
    <div class="login-content">
        <div class="oauth-login">
            <button class="google-login"></button>
            <button class="apple-login"></button>
        </div>
        <form method="POST" action='/login?/'>
            <label for="email">Email:</label>
            <input type="text" name="email" placeholder="you@example.com" id="email" />
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="••••••••" id="password" />
            <button type="submit">Log in with Email</button>
        </form>
    </div>
</div>

<style lang="scss">
    .login {
        @include box(400px, 600px);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        & * {
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
        
    }
    .oauth-login {
        @include flex-center;
        gap: 5px;
        height: 30px;
    }
    form {
        @include box(400px, 400px);
        @include flex-center;
        flex-direction: column;
        gap: 20px;
    }
</style>