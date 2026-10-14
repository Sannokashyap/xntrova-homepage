
function About() {
    return (
        <>


            <section className="about-section" id="about">
                <div className="about-visual">
                    <div className="about-main-card">
                        <span className="about-label">OUR APPROACH</span>
                        <h3>Good ideas deserve great digital experiences.</h3>
                        <p>
                            We combine thoughtful strategy, creative design, and technology
                            to help businesses build a stronger digital presence.
                        </p>

                        <div className="about-highlight">
                            <span>✦</span>
                            <div>
                                <strong>Purposeful by design</strong>
                                <p>Every detail has a reason.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-floating-card">
                        <span>✦</span>
                        <strong>Ideas into impact</strong>
                    </div>
                </div>

                <div className="about-copy">
                    <p className="about-eyebrow">WHO WE ARE</p>
                    <h2>We turn digital challenges into opportunities.</h2>
                    <p className="about-description">
                        At Xntrova Technologies, we believe digital growth starts with
                        understanding your goals. Our approach brings strategy, design,
                        and technology together to create meaningful experiences.
                    </p>

                    <div className="about-points">
                        <p><span>✓</span> Solutions designed around your goals</p>
                        <p><span>✓</span> Clear, thoughtful digital experiences</p>
                        <p><span>✓</span> A focus on long-term growth</p>
                    </div>

                    <a href="#services" className="about-link">
                        Explore our services <span>→</span>
                    </a>
                </div>
            </section>
        </>
    );
}

export default About;
