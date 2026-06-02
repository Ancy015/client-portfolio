import React from 'react';

const Contact = () => {
  return (
    <section className="contact section glass" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Let's discuss your project</p>
      
      <div className="contact-content">
        <div className="contact-image">
          <img src="/contact.png" alt="Contact Avatar" />
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="First Name" className="form-input" />
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
          <input id="contact-email" type="email" placeholder="Email Address" className="form-input" />
          <input type="text" placeholder="Phone Number" className="form-input" />
          
          <textarea id="contact-message" placeholder="Your Message" rows="4" className="form-input"></textarea>
          <div style={{display: 'flex', gap: 8}}>
            <button className="btn btn-primary w-full" type="button" style={{justifyContent: 'center'}} onClick={() => {
              const first = document.querySelector('.contact-form input[placeholder="First Name"]')?.value || '';
              const last = document.querySelector('.contact-form input[placeholder="Last Name"]')?.value || '';
              const email = document.getElementById('contact-email')?.value || '';
              const phone = document.getElementById('contact-phone')?.value || '';
              const message = document.getElementById('contact-message')?.value || '';
              const subject = encodeURIComponent(`Contact from ${first} ${last}`);
              const body = encodeURIComponent(`Name: ${first} ${last}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`);
              // TODO: replace with your real email
              window.location.href = `mailto:bishma@example.com?subject=${subject}&body=${body}`;
            }}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
