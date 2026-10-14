
function Footer() {
    return (
        <>


            <footer className="site-footer">
                <div className="footer-top">
                    <a href="#home" className="footer-brand">
                        Xntrova<span>.</span>
                    </a>
                    <p>Turning ideas into meaningful digital experiences.</p>

                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#work">Our Work</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Xntrova Technologies. All rights reserved.</span>
                    <a href="#home">Back to top ↑</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
