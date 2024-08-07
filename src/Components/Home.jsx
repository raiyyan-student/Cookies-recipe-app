import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Our Website</h1>
                    <p>Discover amazing services and features we offer to help you achieve your goals.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>
            <section className="cookie-section">
                <h2>Introduction to Cookies</h2>
                <p>
                    Cookies are small pieces of data stored on the user's device by the web browser while browsing a website. They are designed to hold a modest amount of data specific to a particular client and website, and can be accessed either by the web server or the client device.
                </p>
                <p>
                    Cookies are used to remember information about the user, such as their preferences or login status. They play a crucial role in enhancing the user experience by allowing websites to remember user-specific settings and information.
                </p>
                <p>
                    There are different types of cookies, including session cookies that are deleted when the browser is closed and persistent cookies that remain on the user's device for a set period of time.
                </p>
            </section>
        </div>
    );
};

export default Home;