import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="https://react.dev/" target='_blank'>
                    <img
                        src="https://i.postimg.cc/y8mRtm7k/science.png"
                        alt="React Logo"
                        style={{ width: '30px', marginRight: '10px' }} 
                    />
                    <span className="navbar-brand logo-text" href="https://react.dev/" target='_blank'>v18.3.1</span>
                </a>
            </div>
        </nav>
    );
}
