import React from "react";
import { Box } from "@mui/material";
import "../assets/css/about_us.css";



const AboutMob = () => {
  return (
    <>
    
 <style>{`
  .about_mob {
    display: none !important;
  }

  .fifty-play-footer.about_mob {
    display: none !important;
  }
`}</style>
      
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
            <h2>WE DREAM BIG SO YOU CAN WIN BIG</h2>
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
            <p className="mt-3 second-text-add">
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
              events
            </p>
          </div>

          {/* <div className="container">
            <div className="row justify-content-center text-center stats-box">
              <div className="col-6 col-md-3">
                <h4>28</h4>
                <p>Winners From Last Month</p>
              </div>
              <div className="col-6 col-md-3">
                <h4>2500+</h4>
                <p>Tickets Sold</p>
              </div>
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <h4>28</h4>
                <p>Prizes & Winners</p>
              </div>
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <h4>28387K</h4>
                <p>Payouts to Winners</p>
              </div>
            </div>
          </div> */}
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
            We celebrate every win, no matter how big or small. Our platform is
            buzzing with excitement as players hit jackpots and score massive
            crypto payouts daily.
          </p>

          <div className="row align-items-center">
            <div className="col-md-3 step-box">
              <img src="./images/user-icons.png" />
              <h6>
                Step _ <span>01</span>
              </h6>
              <p className="step-title">Sign Up Instantly</p>
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
              <p className="step-title">Deposit Securely</p>
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
              <p className="step-title">Win Real Amount</p>
              <p className="small">
                Create your account in just a few minutes. Simply register
              </p>
            </div>
          </div>

          {/* <div className="cta-box mt-3">
            <span>
              <i className="bi bi-person-check"></i> Ready to play? Create your
              account now.
            </span>
            <a href="#" className="btn btn-primary ms-auto">
              Register Now
            </a>
          </div> */}
        </div>
      </section>

      <section className="biggest-jackpots-await">
        <div className="container">
          <h1>Biggest Jackpots Await</h1>
          <p>
            Enter for a chance to win life-changing prizes with the largest
            raffle jackpots online. Your dream win starts with a single ticket.
          </p>
          <button>
            BUY TICKETS <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutMob;
