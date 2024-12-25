import React from 'react';

export const Footer = () => {
    return (
        <footer className='dashboard-footer'>
            <div className='footer-content'>
                <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <p>
                    Made with ❤️ by <a href='https://yourwebsite.com' target='_blank' rel='noopener noreferrer'>Your Name</a>
                </p>
            </div>
        </footer>
    );
};