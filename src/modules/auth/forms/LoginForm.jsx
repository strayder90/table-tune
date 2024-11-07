const LoginForm = () => {
    return (
        <form>
            <input type='email' placeholder='Email' required/>
            <input type='password' placeholder='Password' required/>
            <button type='submit'>Log In</button>
        </form>
    );
};

export default LoginForm;
