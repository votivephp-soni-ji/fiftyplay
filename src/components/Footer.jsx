const Footer = () => {
  return (
     <footer className="fifty-play-footer">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6">
                        <img src="./images/logo-footer.png" />
                        <p className="simply-text-add">Create your account in just a few minutes. Simply register your account in just a few.</p>
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5>Quick Links</h5>
                        <a href="#"><i className="bi bi-chevron-right"></i> Home</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> About Us</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Products</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Our Team</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Lottery</a>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5>Categories</h5>
                        <a href="#"><i className="bi bi-chevron-right"></i> Gaming</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Sports</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Lottery</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Betting</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Business</a>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5>Help & Support</h5>
                        <a href="#"><i className="bi bi-chevron-right"></i> FAQ</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Contact Us</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Blog</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> News</a>
                        <a href="#"><i className="bi bi-chevron-right"></i> Login</a>
                    </div>

                    <div className="col-lg-3 get-in-touch">
                        <h5>Get In Touch</h5>
                        <div className="inner-get-in">
                            <img src="./images/footer-phone.png" />
                            <p>Hotline: <span>(+62) 345-67890</span></p>
                        </div>
                        <div className="inner-get-in">
                            <img src="./images/footer-phone.png" />
                            <p>Email: <span>fiftyplay@gmail.com</span></p>
                        </div>
                        <div className="inner-get-in">
                            <img src="./images/footer-phone.png" />
                            <p>Address: <span>123, Address will goes here, 524005</span></p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom mt-4">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Fifty Play - Raffle</p>
                    <div className="inner-text-add">
                        <a href="#">Help & Support</a> | <a href="#">Terms & Conditions</a> |
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    
  );
}

export default Footer;
