import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/privacy.css";

const HelpSupport = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <section className="event-details-add">
        <div className="container">
          <h1 className="text-center">Help & Support</h1>

          <ul className="event-list-add">
            <li>
              <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                HOME
              </span>
            </li>
            <li>/</li>
            <li>HELP & SUPPORT</li>
          </ul>
        </div>
      </section>

      {/* Content */}
      <section className="privacy-section">
        <div className="container">
          <div className="privacy-card">

            {/* 1 */}
            <div className="privacy-block">
              <h4>1. Getting Started</h4>
              <p>
                Welcome to FiftyPlay! Our platform allows participants to join
                50/50 raffles and support nonprofit organizations while having
                a chance to win prizes.
              </p>

              <p>
                To get started, create an account, verify your information,
                and browse available raffles to participate.
              </p>
            </div>

            {/* 2 */}
            <div className="privacy-block">
              <h4>2. How to Enter a Raffle</h4>

              <p>
                Users can enter raffles by purchasing tickets through the
                official platform or by using the Free Alternate Method of Entry
                (AMOE), if available.
              </p>

              <p>
                Simply select the raffle event, choose the number of tickets,
                and confirm your participation.
              </p>
            </div>

            {/* 3 */}
            <div className="privacy-block">
              <h4>3. Account Assistance</h4>

              <p>
                If you experience issues with logging in, updating your profile,
                or verifying your account, please contact our support team.
              </p>

              <p>
                Make sure your email address and phone number are accurate to
                receive important notifications.
              </p>
            </div>

            {/* 4 */}
            <div className="privacy-block">
              <h4>4. Payment & Ticket Issues</h4>

              <p>
                If your payment fails or tickets do not appear in your account,
                please check your payment confirmation first.
              </p>

              <p>
                If the issue persists, reach out to support with your transaction
                details so we can investigate quickly.
              </p>
            </div>

            {/* 5 */}
            <div className="privacy-block">
              <h4>5. Prize & Winner Information</h4>

              <p>
                Winners are selected randomly through a certified electronic
                system after the raffle entry period ends.
              </p>

              <p>
                If you win, our team will contact you using the registered email
                or phone number with instructions on how to claim your prize.
              </p>
            </div>

            {/* 6 */}
            <div className="privacy-block">
              <h4>6. Technical Support</h4>

              <p>
                If you encounter technical issues such as errors on the website,
                loading problems, or ticket purchase failures, please report the
                issue with details including your device, browser, and time of
                occurrence.
              </p>
            </div>

            {/* 7 */}
            <div className="privacy-block">
              <h4>7. Contact Support</h4>

              <p>
                Our support team is available to assist you with any questions
                or concerns related to your account, raffles, or transactions.
              </p>

              <p className="contact">
                📧 support@thefiftyplay.com <br />
                📞 787-808-5000
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HelpSupport;