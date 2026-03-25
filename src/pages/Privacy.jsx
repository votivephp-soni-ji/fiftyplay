import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/privacy.css";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Page Header */}
      <section className="event-details-add">
        <div className="container">
          <h1 className="text-center">Privacy Policy</h1>

          <ul className="event-list-add">
            <li>
              <span onClick={() => navigate("/")} className="cursor-pointer">
                HOME
              </span>
            </li>
            <li>/</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-section">
        <div className="container">
          <div className="privacy-card">

            {/* <h2 className="privacy-title">FIFTYPLAY PRIVACY POLICY</h2> */}

            {/* 1 */}
            <div className="privacy-block">
              <h4>1. Introduction</h4>

              <p>
                FiftyPlay (“Company,” “we,” “our,” or “us”) operates 50/50 raffles
                in Puerto Rico in compliance with applicable laws and regulations,
                including Law No. 465 of May 15, 1947, DACO Regulation No. 7764,
                and Regulation No. 9158.
              </p>

              <p>
                This Privacy Policy explains how we collect, use, protect, and
                disclose personal information in connection with our raffles,
                website, and related services.
              </p>
            </div>

            {/* 2 */}
            <div className="privacy-block">
              <h4>2. Information We Collect</h4>

              <p>We may collect the following information:</p>

              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Mobile phone number</li>
                <li>Municipality of residence</li>
                <li>Gender (if voluntarily provided)</li>
                <li>Government-issued ID for prize verification</li>
                <li>
                  Payment transaction information processed through authorized
                  providers
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className="privacy-block">
              <h4>3. How We Use Your Information</h4>

              <p>
                We use personal information to administer raffles, verify
                eligibility, notify winners, process prize payments, maintain
                legal compliance, respond to inquiries, and send promotional
                communications (if opted-in).
              </p>

              <p>
                Participation constitutes consent to data processing for raffle
                administration purposes.
              </p>
            </div>

            {/* 4 */}
            <div className="privacy-block">
              <h4>4. Data Protection & Security</h4>

              <p>
                FiftyPlay implements reasonable administrative, technical, and
                physical safeguards to protect personal information.
              </p>

              <p>
                We do not sell personal data and do not share personal data
                without express consent except as required by law.
              </p>
            </div>

            {/* 5 */}
            <div className="privacy-block">
              <h4>5. Data Retention</h4>

              <p>
                We retain personal data only as long as necessary to fulfill
                raffle administration requirements, meet legal obligations, and
                resolve disputes.
              </p>
            </div>

            {/* 6 */}
            <div className="privacy-block">
              <h4>6. Your Rights</h4>

              <p>
                Participants may request access, correction, or deletion of
                personal data where legally permitted.
              </p>

              <p>
                Marketing consent can be withdrawn at any time by contacting:
              </p>

              <p className="contact">
                📧 support@thefiftyplay.com <br />
                📞 787-808-5000
              </p>
            </div>

            {/* 7 */}
            <div className="privacy-block">
              <h4>7. Updates to This Policy</h4>

              <p>
                We reserve the right to update this Privacy Policy as required
                by law or operational changes. Updates will be posted on our
                official website.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;