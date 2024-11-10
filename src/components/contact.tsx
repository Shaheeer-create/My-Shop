// components/Contact.js
import React from 'react';

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-intro">Id love to hear from you! Feel free to reach out using the form below.</p>
        
        <form className="contact-form"   action="https://formspree.io/f/mwpkbppw"
  method="POST"
>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows={4} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
