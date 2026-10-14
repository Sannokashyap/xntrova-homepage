function Contact() {
  return (
    <>
      {/* Contact / Lead Form Section */}
     


        <section className="contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-content">
              <p className="contact-eyebrow">LET'S WORK TOGETHER</p>
              <h2>Have a project in mind?</h2>
              <p>
                Tell us about your idea. Let's explore how we can
                help you create a meaningful digital experience.
              </p>

              <div className="contact-details">
                <div>
                  <span>✉</span>
                  <p>Have a project to discuss?</p>
                </div>
                <div>
                  <span>↗</span>
                  <p>Let's turn your ideas into impact.</p>
                </div>
              </div>
            </div>

            <form
              className="lead-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your form demo has been submitted.");
                e.currentTarget.reset();
              }}
            >
              <h3>Send us a message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="lead-name">Full Name</label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lead-email">Email Address</label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="lead-service">Service Interested In</label>
                <select id="lead-service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="seo">SEO & Organic Growth</option>
                  <option value="marketing">Performance Marketing</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="website">Website Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="lead-message">Project Details</label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us a little about your project..."
                  required
                />
              </div>

              <button type="submit" className="lead-submit">
                Send Message <span>→</span>
              </button>

              <p className="form-note">
                Demo form only — messages are not sent to a server.
              </p>
            </form>
          </div>
        </section>
   
    </>
  );
}

export default Contact;