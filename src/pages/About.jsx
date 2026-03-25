import React from "react";
import { Box } from "@mui/material";
import "../assets/css/about_us.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <section class="event-details-add">
        <div class="container">
          <h1 class="text-center">About</h1>
          <ul class="event-list-add">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-card">
            <h6>
              <i className="bi bi-trophy"></i> A few words about us
            </h6>
            <h2 className="bold">WE DREAM BIG SO YOU CAN WIN BIG</h2>
            <p>
              FiftyPlay is an innovative digital fundraising platform founded in
              2025 under its parent company, Ticket Plus, owned by Carlos
              CrespoMüller. We were created with the mission of transforming how
              non-profit organizations, sports teams, foundations, and community
              entities generate funds by integrating modern technology with a
              transparent, secure, and accessible 50/50 raffle system. Our
              platform enables individuals to support causes through the
              purchase of official items, turning every acquisition into a
              meaningful contribution to social, athletic, and community
              projects. Through our 50/50 model, 50% of all funds raised go
              directly to the benefiting organization, while the remaining 50%
              is awarded to the raffle winner—ensuring an exciting and fair
              experience.
            </p>
            <p className="mt-2 second-text-add">
              At FiftyPlay, we believe in transparency, innovation, and social
              impact. That is why we develop digital tools that allow users to
              track the pot in real time, receive instant notifications, and
              manage events with processes that are auditable, secure, and
              reliable. We serve as a bridge between causes and community. Our
              commitment is to empower organizations to raise funds more
              efficiently while strengthening their connection with supporters
              and collaborators. With the vision of Carlos Crespo Müller and the
              corporate backing of Ticket Plus, FiftyPlay continues to grow as a
              leading solution for fundraising in both in-person and digital
              events.
            </p>
          </div>

          <div className="mission-vision-section mt-5">
            <div className="container">
              <div className="row g-4">
                {/* Mission */}
                <div className="col-md-6">
                  <div className="mv-card">
                    <h4 className="mv-title">
                      <i className="bi bi-bullseye"></i> Our Mission
                    </h4>
                    <p>
                      Our mission is to revolutionize fundraising by providing
                      modern, transparent, and secure digital raffle solutions
                      that empower organizations to raise more, connect deeper,
                      and create lasting social impact. We aim to make every
                      raffle simple, fair, and rewarding for both organizations
                      and participants.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="col-md-6">
                  <div className="mv-card">
                    <h4 className="mv-title">
                      <i className="bi bi-eye"></i> Our Vision
                    </h4>
                    <p>
                      Our vision is to become the most trusted and innovative
                      fundraising platform, enabling communities across the
                      world to support causes they care about. We imagine a
                      future where technology bridges generosity and social
                      good, making charitable giving effortless and impactful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>
          What makes <span className="feature-fifty-add">Fifty Play</span>{" "}
          different?
        </h2>
        <p>
          These are the key drivers that make us different: Safe, Social,
          Reliable and Fun. Fifty Play Raffle is dedicated to trust and safety.
        </p>

        <div className="container">
          <div className="row g-4 feature-winnings-inner">
            <div className="col-6 col-md-3 col-lg-3">
              <div className="feature-box">
                <img src="./images/interest-rate.png" />
              </div>
              <div className="feature-title">
                No Commission
                <br />
                on Winnings
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-3">
              <div className="feature-box">
                <img src="./images/shield.png" />
              </div>
              <div className="feature-title">
                Safe and Secure
                <br />
                Playing
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-3">
              <div className="feature-box">
                <img src="./images/jackpot.png" />
              </div>
              <div className="feature-title">
                Biggest Raffle
                <br />
                Jackpots
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-3">
              <div className="feature-box">
                <img src="./images/number-blocks.png" />
              </div>
              <div className="feature-title">
                Daily & Weekly
                <br />
                Draws
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-3">
              <div className="feature-box">
                <img src="./images/partnership.png" />
              </div>
              <div className="feature-title">
                Fair Play
                <br />
                Guaranteed
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-3">
              <div className="feature-box">
                <img src="./images/trophy.png" />
              </div>
              <div className="feature-title">
                Verified
                <br />
                Winners
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-3">
              <div className="feature-box">
                <img src="./images/maintenance.png" />
              </div>
              <div className="feature-title">
                Dedicated
                <br />
                Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <p className="mb-2">
            <i className="bi bi-trophy"></i> Try your chance at winning
          </p>
          <h2>
            How It’s <span>Works</span>
          </h2>
          <p className="celebrate-text mb-5">
            FiftyPlay makes fundraising simple. Participants support a cause by
            purchasing an official item, and each purchase automatically
            generates an entry into a 50/50 raffle. The prize pool grows in real
            time, and at the end of the event, 50% goes to the organization and
            50% to the winning participant.
          </p>

          <div className="row align-items-center">
            <div className="col-md-3 step-box">
              <img src="./images/user-icons.png" />
              <h6>
                Step _ <span>01</span>
              </h6>
              {/* <p className="step-title">Sign Up Instantly</p> */}
              <p className="small">
                Create your account in just a few minutes. Simply register
              </p>
            </div>

            <div className="col-md-1 d-none d-md-block arrow">
              <img src="./images/long-arrow-icon.png" />
            </div>

            <div className="col-md-3 step-box">
              <img src="./images/deposite.png" />
              <h6>
                Step _ <span>02</span>
              </h6>
              {/* <p className="step-title">Deposit Securely</p> */}
              <p className="small">
                Create your account in just a few minutes. Simply register
              </p>
            </div>

            <div className="col-md-1 d-none d-md-block arrow">
              <img src="./images/long-arrow-icon.png" />
            </div>

            <div className="col-md-3 step-box">
              <img src="./images/winner-icons.png" />
              <h6>
                Step _ <span>03</span>
              </h6>
              {/* <p className="step-title">Win Real Amount</p> */}
              <p className="small">
                Create your account in just a few minutes. Simply register
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3 step-box">
              <img src="./images/user-icons.png" />
              <h6>
                Step _ <span>04</span>
              </h6>
              {/* <p className="step-title">Sign Up Instantly</p> */}
              <p className="small">Track the prize pool live in the app.</p>
            </div>

            <div className="col-md-1 d-none d-md-block arrow">
              <img src="./images/long-arrow-icon.png" />
            </div>

            <div className="col-md-3 step-box">
              <img src="./images/deposite.png" />
              <h6>
                Step _ <span>05</span>
              </h6>
              {/* <p className="step-title">Deposit Securely</p> */}
              <p className="small">A random drawing determines the winner.</p>
            </div>

            <div className="col-md-1 d-none d-md-block arrow">
              <img src="./images/long-arrow-icon.png" />
            </div>

            <div className="col-md-3 step-box">
              <img src="./images/winner-icons.png" />
              <h6>
                Step _ <span>06</span>
              </h6>
              <p className="small">
                The organization receives its funds, and winners are notified
                instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="biggest-jackpots-await">
        <div className="container">
          <h1>Biggest Jackpots Await</h1>
          <p>
            Enter for a chance to win life-changing prizes with the largest
            raffle jackpots online. Your dream win starts with a single ticket.
          </p>
          <button onClick={() => navigate("/fundraising-products")}>
            Donate Now <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
