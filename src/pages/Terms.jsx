import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/privacy.css";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <section className="event-details-add">
        <div className="container">
          <h1 className="text-center">Terms & Conditions</h1>

          <ul className="event-list-add">
            <li>
              <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                HOME
              </span>
            </li>
            <li>/</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>
      </section>

      {/* Content */}
      <section className="privacy-section">
        <div className="container">
          <div className="privacy-card">

            {/* <h2 className="privacy-title">
              FULL TERMS & CONDITIONS – 50/50 RAFFLE OFFICIAL RULES
            </h2> */}

            {/* 1 */}
            <div className="privacy-block">
              <h4>1. Legal Authority</h4>
              <p>
                This raffle is conducted pursuant to Puerto Rico law, including
                Law No. 465 (1947), DACO Regulation No. 7764, and Regulation No.
                9158.
              </p>
            </div>

            {/* 2 */}
            <div className="privacy-block">
              <h4>2. Organizer</h4>
              <p>
                Each raffle is organized and administered by FiftyPlay in Puerto
                Rico. Official communications may be directed to:
              </p>

              <p className="contact">
                📧 support@thefiftyplay.com <br />
                📞 787-808-5000
              </p>
            </div>

            {/* 3 */}
            <div className="privacy-block">
              <h4>3. Eligibility</h4>
              <p>
                Participation is open to individuals aged 18 or older who are
                residents of or physically present in Puerto Rico at the time of
                entry.
              </p>

              <p>
                Employees, affiliates, regulators, and immediate family members
                are not eligible to participate.
              </p>
            </div>

            {/* 4 */}
            <div className="privacy-block">
              <h4>4. No Purchase Necessary</h4>

              <p>
                No purchase is required to enter. A Free Alternate Method of
                Entry (AMOE) is available and treated equally to paid entries.
              </p>

              <p>
                Only one free entry per day per participant is permitted.
              </p>
            </div>

            {/* 5 */}
            <div className="privacy-block">
              <h4>5. Entry Methods</h4>

              <p>
                Tickets may be purchased in person at authorized events or
                through official digital sales channels.
              </p>

              <p>
                Pricing and entry periods will be disclosed in each raffle’s
                abbreviated rules.
              </p>
            </div>

            {/* 6 */}
            <div className="privacy-block">
              <h4>6. Prize Structure</h4>

              <p>
                Fifty percent (50%) of the total gross raffle fund will be
                awarded to the winner.
              </p>

              <p>
                Fifty percent (50%) will be donated to the designated nonprofit
                beneficiary.
              </p>

              <p>
                Administrative expenses shall not exceed twenty percent (20%) of
                the gross fund as required by law.
              </p>

              <p>
                Odds depend on the number of valid entries received.
              </p>
            </div>

            {/* 7 */}
            <div className="privacy-block">
              <h4>7. Winner Selection</h4>

              <p>
                The winning ticket number will be selected randomly using a
                certified electronic system under authorized supervision.
              </p>

              <p>
                Results will be announced through official communication
                channels.
              </p>
            </div>

            {/* 8 */}
            <div className="privacy-block">
              <h4>8. Notification & Prize Claim</h4>

              <p>
                The potential winner will be notified using the provided contact
                information.
              </p>

              <p>
                To claim the prize, the winner must present valid
                government-issued ID, sign required release documentation, and
                complete verification procedures.
              </p>

              <p>
                Failure to claim the prize within the specified timeframe may
                result in forfeiture.
              </p>
            </div>

            {/* 9 */}
            <div className="privacy-block">
              <h4>9. Taxes</h4>

              <p>
                The winner is responsible for any applicable Puerto Rico taxes,
                fees, or withholdings associated with the prize.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;