
function Portfolio() {
    return (
        <>
            
            <section className="work-section" id="work">
                <div className="work-heading">
                    <p>OUR WORK</p>
                    <h2>Ideas transformed into digital experiences.</h2>
                    <span>
                        A look at the creative thinking and technology behind our approach.
                    </span>
                </div>

                <div className="work-grid">
                    <article className="work-card work-card-one">
                        <div className="work-art">
                            <span className="work-art-label">DIGITAL STRATEGY</span>
                            <div className="work-art-shape shape-one"></div>
                            <div className="work-art-shape shape-two"></div>
                            <div className="work-art-line"></div>
                        </div>
                        <div className="work-card-content">
                            <p>01 / STRATEGY</p>
                            <h3>Digital Growth Strategy</h3>
                            <span>A clear direction for building a stronger online presence.</span>
                        </div>
                    </article>

                    <article className="work-card work-card-two">
                        <div className="work-art">
                            <span className="work-art-label">WEB EXPERIENCE</span>
                            <div className="browser-shape">
                                <div className="browser-dots">● ● ●</div>
                                <div className="browser-content"></div>
                                <div className="browser-content short"></div>
                            </div>
                        </div>
                        <div className="work-card-content">
                            <p>02 / DESIGN</p>
                            <h3>Modern Web Experience</h3>
                            <span>A clean, user-friendly experience built around people.</span>
                        </div>
                    </article>

                    <article className="work-card work-card-three">
                        <div className="work-art">
                            <span className="work-art-label">PERFORMANCE</span>
                            <div className="work-chart">
                                <i></i><i></i><i></i><i></i><i></i>
                            </div>
                            <div className="work-chart-line"></div>
                        </div>
                        <div className="work-card-content">
                            <p>03 / ANALYTICS</p>
                            <h3>Performance Insights</h3>
                            <span>Meaningful data that helps guide smarter decisions.</span>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
