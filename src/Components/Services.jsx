import React from 'react';

const Services = () => {
    return (
        <div className="services-container">
            <section className="services-section">
                <h2>Our Cookie Services</h2>
                <p>At our bakery, we specialize in a wide variety of cookies that cater to different tastes and preferences. Here’s what we offer:</p>
                <ul>
                    <li>Classic Chocolate Chip Cookies</li>
                    <li>Oatmeal Raisin Cookies</li>
                    <li>Peanut Butter Cookies</li>
                    <li>Gluten-Free Cookies</li>
                    <li>Vegan Cookies</li>
                    <li>Custom Decorated Cookies</li>
                </ul>
            </section>
            <section className="production-info-section">
                <h2>Production Statistics</h2>
                <p>We take pride in our cookie production and ensure that every cookie is made with the highest quality ingredients.</p>
                <ul>
                    <li><strong>Daily Production:</strong> 500-700 cookies</li>
                    <li><strong>Weekly Production:</strong> 3,500-4,900 cookies</li>
                    <li><strong>Monthly Production:</strong> 15,000-21,000 cookies</li>
                    <li><strong>Yearly Production:</strong> 180,000-252,000 cookies</li>
                </ul>
            </section>
            <section className="how-we-make-section">
                <h2>How We Make Our Cookies</h2>
                <img src="https://www.shugarysweets.com/wp-content/uploads/2020/05/chocolate-chip-cookies-ingredients.jpg" alt="Cookie Making Process" className="cookie-process-image" />
                <p>Our cookie-making process involves several steps to ensure the best quality and taste:</p>
                <ol>
                    <li>Selecting the finest ingredients, including organic flour, free-range eggs, and premium chocolate.</li>
                    <li>Mixing the ingredients to create a perfect dough.</li>
                    <li>Shaping the cookies by hand to ensure consistency.</li>
                    <li>Baking the cookies at the optimal temperature for a perfect texture.</li>
                    <li>Cooling and packaging the cookies to maintain their freshness.</li>
                </ol>
            </section>
            <section className="health-info-section">
                <h2>Are Our Cookies Healthy?</h2>
                <p>We believe in balancing taste and health. Here’s what you need to know about the healthiness of our cookies:</p>
                <ul>
                    <li>We use organic and natural ingredients wherever possible.</li>
                    <li>Our gluten-free and vegan options cater to various dietary needs.</li>
                    <li>We avoid using artificial preservatives and additives.</li>
                    <li>Moderation is key: Enjoy our cookies as part of a balanced diet.</li>
                </ul>
            </section>
        </div>
    );
};

export default Services;