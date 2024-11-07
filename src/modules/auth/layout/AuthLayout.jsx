import PropTypes from 'prop-types';

const AuthLayout = ({children}) => {
    return (
        <div className='auth-layout'>
            <div className='auth-container'>
                <header className='auth-header'>
                    <h2>Welcome</h2>
                    <p>Please log in or sign up to continue</p>
                </header>
                <main className='auth-main'>{children}</main>
            </div>
        </div>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.object
};

export default AuthLayout;
