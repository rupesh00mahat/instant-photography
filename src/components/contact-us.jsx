import React from "react";

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div id="contact-us">
      <div className="divider"></div>
      <div className="contact-us-wrapper">
        <h2>CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" placeholder="Message" rows="4"></textarea>
          </div>
          <div className="form-group">
            <button className="submit" type="submit" title="SEND">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
