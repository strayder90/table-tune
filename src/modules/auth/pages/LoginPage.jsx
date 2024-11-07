import AuthLayout from '../layout/AuthLayout.jsx';
import LoginForm from '../forms/LoginForm.jsx';

const LoginPage = () => {
    return (
        <AuthLayout>
            <h1>Log In</h1>
            <LoginForm/>
        </AuthLayout>
    );
};

export default LoginPage;
