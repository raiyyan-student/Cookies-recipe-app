import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <section className="about-section">
                <h2>About Us</h2>
                <p>We are a leading company in our industry, committed to providing top-notch services and innovative solutions to our clients.</p>
            </section>
            <section className="cookie-info-section">
                <h2>Understanding Cookies</h2>
                <img src="https://img.freepik.com/free-photo/plate-with-fresh-cookies-from-oven_23-2148837150.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=ais_user" alt="Cookies" className="cookie-image" />
                <p>
                    Cookies are small pieces of data stored on the user's device by the web browser while browsing a website. They play a crucial role in enhancing the user experience by allowing websites to remember user-specific settings and information.
                </p>
                <ul>
                    <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when the browser is closed.</li>
                    <li><strong>Persistent Cookies:</strong> Remain on the device for a set period or until manually deleted.</li>
                    <li><strong>First-Party Cookies:</strong> Set by the website you are visiting and readable only by that site.</li>
                    <li><strong>Third-Party Cookies:</strong> Set by external services for tracking and advertising purposes.</li>
                </ul>
                <p>
                    Understanding these types of cookies can help you manage your privacy and online experience more effectively.
                </p>
            </section>
        </div>
    );
};

export default About;