function Services() {
    return (
        
        <section className="services-preview" id="services">
            <div className="services-heading">
                <div className="services-tag">
                    <span></span> WHAT WE DO
                </div>

                <h2>
                    Digital solutions for
                    <span> ambitious businesses.</span>
                </h2>

                <p>
                    We combine creativity, technology, and strategy to build
                    digital experiences that help your business grow.
                </p>
            </div>

            <div className="services-grid">
                <article className="service-card">
                    <div className="service-card-top">
                        <div className="service-icon">↗</div>
                        <span className="service-number">01</span>
                    </div>
                    <p className="service-category">SEARCH & VISIBILITY</p>
                    <h3>SEO & Organic Growth</h3>
                    <p className="service-description">
                        Get discovered by the right audience and build lasting
                        visibility across search engines.
                    </p>
                    <a href="#contact" className="service-link">
                        Explore service <span>↗</span>
                    </a>
                </article>

                <article className="service-card">
                    <div className="service-card-top">
                        <div className="service-icon">◎</div>
                        <span className="service-number">02</span>
                    </div>
                    <p className="service-category">PAID CAMPAIGNS</p>
                    <h3>Performance Marketing</h3>
                    <p className="service-description">
                        Connect with potential customers through focused,
                        data-informed advertising campaigns.
                    </p>
                    <a href="#contact" className="service-link">
                        Explore service <span>↗</span>
                    </a>
                </article>

                <article className="service-card">
                    <div className="service-card-top">
                        <div className="service-icon">✳</div>
                        <span className="service-number">03</span>
                    </div>
                    <p className="service-category">BRAND & COMMUNITY</p>
                    <h3>Social Media Marketing</h3>
                    <p className="service-description">
                        Build brand recognition and stronger relationships
                        with your audience across social platforms.
                    </p>
                    <a href="#contact" className="service-link">
                        Explore service <span>↗</span>
                    </a>
                </article>

                <article className="service-card">
                    <div className="service-card-top">
                        <div className="service-icon">⌘</div>
                        <span className="service-number">04</span>
                    </div>
                    <p className="service-category">DIGITAL EXPERIENCES</p>
                    <h3>Website Development</h3>
                    <p className="service-description">
                        Create fast, responsive, and user-friendly websites
                        that make your business stand out.
                    </p>
                    <a href="#contact" className="service-link">
                        Explore service <span>↗</span>
                    </a>
                </article>
            </div>
        </section>
    );
}

export default Services;