import { Link } from "react-router-dom";
import "../assets/css/email_verified.css";

const EmailVerified = () => {
  return (
    <section className="email-verified-wrapper">
      <div className="container">
        <div className="verified-card text-center">

          <div className="success-icon">
            <i className="bi bi-check-lg"></i>
          </div>

          <p className="verified-tag">
            <i className="bi bi-check-circle"></i> Success
          </p>

          <h2 className="verified-title">
            Your Email Has Been Verified Successfully 🎉
          </h2>

          <p className="verified-desc">
            Thank you for verifying your email address. Your account is now
            fully activated and ready to use.
          </p>

        </div>
      </div>
    </section>
  );
};

export default EmailVerified;