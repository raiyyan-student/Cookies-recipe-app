import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you! Please fill out the form below and we’ll get in touch with you as soon as possible.</p>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact-details">
                <div className="contact-info">
                    <h3>Our Address</h3>
                    <p>123 Cookie Lane, Sweet City, CA 12345</p>
                </div>
                <div className="contact-info">
                    <h3>Phone</h3>
                    <p>(123) 456-7890</p>
                </div>
                <div className="contact-info">
                    <h3>Email</h3>
                    <p>info@cookiecompany.com</p>
                </div>
                <div className="contact-info">
                    <h3>Follow Us</h3>
                    <p>
                        <a href="https://cdn.logojoy.com/wp-content/uploads/20230921104408/Facebook-logo-600x319.png">Facebook</a> | 
                        <a href="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"> Twitter</a> | 
                        <a href="https://thumbs.dreamstime.com/b/insta-new-155631943.jpg"> Instagram</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;