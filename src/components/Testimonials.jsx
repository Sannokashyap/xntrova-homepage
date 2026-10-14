
function Testimonials() {
    return (
        <>
           

            {/* Client Testimonials Section */}
            <section className="testimonials-section" id="testimonials">
                <div className="testimonials-heading">
                    <p className="testimonials-eyebrow">CLIENT TESTIMONIALS</p>
                    <h2>
                        What people say about
                        <span> working with us.</span>
                    </h2>
                    <p>
                        Great digital experiences start with strong
                        collaboration and a shared vision.
                    </p>
                </div>

                <div className="testimonials-grid">
                    <article className="testimonial-card">
                        <div className="testimonial-stars">★★★★★</div>
                        <p className="testimonial-quote">
                            “The team understood our goals and helped us
                            shape a clearer direction for our digital presence.”
                        </p>
                        <div className="testimonial-client">
                            <div className="testimonial-avatar">A</div>
                            <div>
                                <h3>Alex Morgan</h3>
                                <span>Business Owner</span>
                            </div>
                        </div>
                    </article>

                    <article className="testimonial-card featured-testimonial">
                        <div className="testimonial-stars">★★★★★</div>
                        <p className="testimonial-quote">
                            “A thoughtful approach, clean design, and a smooth
                            collaboration made the entire process easier.”
                        </p>
                        <div className="testimonial-client">
                            <div className="testimonial-avatar">S</div>
                            <div>
                                <h3>Sarah Williams</h3>
                                <span>Marketing Professional</span>
                            </div>
                        </div>
                    </article>

                    <article className="testimonial-card">
                        <div className="testimonial-stars">★★★★★</div>
                        <p className="testimonial-quote">
                            “We appreciated the focus on our requirements
                            and the attention given to every design detail.”
                        </p>
                        <div className="testimonial-client">
                            <div className="testimonial-avatar">J</div>
                            <div>
                                <h3>James Carter</h3>
                                <span>Startup Founder</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
