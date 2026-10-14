function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-copy">
                <div className="eyebrow">
                    <span className="status-dot"></span>
                    DIGITAL STRATEGY · CREATIVE TECHNOLOGY
                </div>

                <h1>
                    Turn your vision
                    <br />
                    into <span>digital growth.</span>
                </h1>

                <p className="hero-description">
                    We combine creative thinking, smart technology, and
                    performance-driven marketing to help your business move forward.
                </p>

                <div className="hero-actions">
                    <a className="button-primary" href="#contact">
                        Get a Free Consultation <span>↗</span>
                    </a>
                    <a className="button-secondary" href="#services">
                        Explore Services <span>↓</span>
                    </a>
                </div>


                <div className="hero-note">
                    <span className="note-check">✓</span>
                    Strategy-led. Data-informed. Built around your goals.
                </div>

                <div className="hero-trust">
                    <div>
                        <strong>01</strong>
                        <span>Clear Strategy</span>
                    </div>

                    <div>
                        <strong>02</strong>
                        <span>Data-Driven</span>
                    </div>

                    <div>
                        <strong>03</strong>
                        <span>Growth Focused</span>
                    </div>
                </div>
            </div>


            <div className="hero-visual" aria-label="Illustration of a digital analytics dashboard">
                <div className="visual-glow"></div>

                <div className="dashboard-card">
                    <div className="dashboard-top">
                        <div>
                            <span className="muted-label">GROWTH OVERVIEW</span>
                            <h3>Performance dashboard</h3>
                        </div>
                        <span className="live-badge">● LIVE CONCEPT</span>
                    </div>

                    <div className="metric-grid">
                        <div className="metric">
                            <span>Organic reach</span>
                            <strong>+64%</strong>
                            <small>↗ Growth illustration</small>
                        </div>
                        <div className="metric">
                            <span>Lead generation</span>
                            <strong>+38%</strong>
                            <small>↗ Growth illustration</small>
                        </div>
                    </div>

                    <div className="chart-panel">
                        <div className="chart-heading">
                            <span>Campaign performance</span>
                            <span>Last 6 months</span>
                        </div>

                        <div className="chart-bars" aria-hidden="true">
                            {[35, 49, 40, 63, 55, 76, 67, 90, 72, 100, 83, 112].map(
                                (height, index) => (
                                    <div
                                        key={index}
                                        className="chart-bar"
                                        style={{ height: `${height}px` }}
                                    />
                                )
                            )}
                        </div>

                        <div className="chart-labels">
                            <span>JAN</span><span>FEB</span><span>MAR</span>
                            <span>APR</span><span>MAY</span><span>JUN</span>
                        </div>
                    </div>

                    <div className="dashboard-bottom">
                        <span className="bottom-dot"></span>
                        Creative ideas. Measurable direction.
                    </div>
                </div>

                <div className="floating-tag tag-top">
                    <span>✳</span> Creative strategy
                </div>
                <div className="floating-tag tag-bottom">
                    <span>↗</span> Built for growth
                </div>
            </div>

            <div className="hero-index">01 / DIGITAL EXCELLENCE</div>
        </section>
    );
}

export default Hero;