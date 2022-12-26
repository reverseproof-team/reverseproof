<div class="page-container">
    <div class="form-container">
        <span>Log in to ReverseProof</span>
        <form method="POST" action="/">
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" />
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login with Email</button>
            <hr>
            <span>or <a href="/signup">sign up</a></span>
        </form>
    </div>
</div>

<style lang="scss">
    .page-container {
        @include box(100vw, 100vh);
        @include flex-center;
    }
    .form-container {
        @include box(50%);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        & > span {
            font-size: 30px;
            font-weight: bold;
        }
    }
    .form-container form {
        @include box(50%, 100%);
        @include flex-center;
        flex-direction: column;
        & * {
            width: min(75%, 250px);
        }
        & hr {
            height: 2px;
            background-color: #454545;
            border: none;
            border-radius: 1px;
        }
        & input, button {
            height: 10%;
            border: 1px solid #454545;
            border-radius: 5px;
            margin: 10px;
        }
        & button {
            font-family: inherit;
            margin: 20px;
            border: none;
            color: white;
            background-color:rgb(10, 10, 10);
            background-image: linear-gradient(to right, rgb(222, 187, 0), rgb(234,140,0));
        }
        & button:hover {
            background-image: none;
            background-color: rgb(10, 10, 10);
            border: 1px solid rgb(222, 187, 0);
        }
        & > span {
            text-align: center;
        }
        & a {
            color: white;
        }
        & a:hover {
            text-decoration: none;
        }
    }
</style>