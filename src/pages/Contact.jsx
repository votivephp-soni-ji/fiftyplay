import "../assets/css/contact.css";

const Contact = () => {
  return (
    <>
      <section className="page-header banner-top-add">
        <div className="container">
          <h1>Contact</h1>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <p className="get-started-text mb-1">
            <i className="bi bi-trophy"></i> Get Started
          </p>
          <h2 className="mb-4">
            Get In Touch With Us.
            <br />
            We’re Here To Assist You.
          </h2>

          <form className="contact-us-form">
            <div className="row mb-4">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number (optional)"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="leave-us-message pt-2">
              <button type="submit" className="btn btn-pink">
                LEAVE US A MESSAGE <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
