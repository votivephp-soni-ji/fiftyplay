import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";

const Home = () => {
    const [events, setEvents] = useState([]);
    const baseUrl = "http://127.0.0.1:8000"; // replace with your actual base_url

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/events`)
      .then((res) => {
        setEvents(res.data.data || []);
        console.log(res.data.data) // assuming response has {data: [...]}
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);
  return (
    <main>
      {/* Hero Section */}
      <section className="our-next-hero">
        <div className="hero-content container">
          <p className="mb-2">COULD YOU BE OUR NEXT WINNER?</p>
          <h1 className="fw-bold display-5">Your Game. Your Half. Your Win.</h1>

          {/* Search Box */}
          <form className="search-box mt-4">
            <select className="form-select">
              <option selected>Category</option>
              <option value="1">Football</option>
              <option value="2">Basketball</option>
              <option value="3">Esports</option>
            </select>
            <input type="text" className="form-control" placeholder="Address, neighborhood, city or zip" />
            <input type="date" className="form-control" />
            <Button variant="contained" color="primary" >Search
      </Button>
          </form>
        </div>
      </section>

      {/* Trusted Winners Section */}
       <section className="trusted-winners">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 trusted-winners-left">
                        <p className="mb-1"><i className="bi bi-trophy"></i> Trusted, by Thousands of Winners</p>
                        <h2 className="fw-bold">
                            Trusted by Winners, <br />
                            Powered by <span className="fifty-text-add">FiftyPlay</span>
                        </h2>
                        <p className="text-simply-add mb-4">
                            We go beyond simply offering lottery games; we provide a trusted, secure environment where millions of players come to enjoy.
                        </p>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <div className="pin">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Fair Draws</h6>
                                        <small className="text-muted">We prioritize fair gameplay with verified lottery draw processes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <div className="pin">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Instant Payouts</h6>
                                        <small className="text-muted">We prioritize fair gameplay with verified lottery draw processes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <div className="pin">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Secure Data</h6>
                                        <small className="text-muted">We prioritize fair gameplay with verified lottery draw processes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <div className="pin">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Accessibility</h6>
                                        <small className="text-muted">We prioritize fair gameplay with verified lottery draw processes</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <button className="btn btn-dark btn-play mt-3">Play Lottery <i className="bi bi-arrow-right ms-1"></i></button>
                    </div>

                    <div className="col-lg-6 trusted-winners-right">
                        <img src="./images/new-post-img.png" alt="Basketball" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>
        </section>
      {/* Winning Numbers */}
       <section className="winning-numbers">
            <div className="container py-5">
                <div className="section-title">
                    <p className="mb-1">
                        <small><i className="bi bi-trophy"></i> Your chance of winning</small>
                    </p>
                    <h2 className="fw-bold">Latest <span>Winning Numbers</span></h2>
                    <p className="winning-numbers-text">We celebrate every win, no matter how big or small. Our platform is buzzing with excitement as players hit jackpots and score massive crypto payouts daily.</p>
                </div>

                <div className="row g-4">
                    {events.length > 0 ? (
            events.map((event, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                        <div className="card position-relative">
                            <div className="exclusive-tab">
                                <button>Exclusive</button>
                                <i className="bi bi-heart"></i>
                            </div>

                            <img src={event.banners[0]} className="card-img-top" alt={event.title} />
                            <span className="card-price"><span className="contest-add">Contest</span> 5B2</span>
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <div className="ticket-price-tab">
                                    <p>Ticket Price:</p>
                                    <p className="inner-price-add">${event.ticket_price}</p>
                                </div>

                                <div className="remaining-tab">
                                    <p>95K+ Remaining</p>
                                    <p className="inner-price-add"><i className="bi bi-stopwatch"></i> 30 AUG 2025</p>
                                </div>
                                <button className="btn btn-custom">View Details <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
            ))
            ) : (
            <p className="text-center">No events found</p>
          )}

                    <div className="col-md-4 col-sm-6">
                        <div className="card position-relative">
                            <div className="exclusive-tab">
                                <button>Exclusive</button>
                                <i className="bi bi-heart"></i>
                            </div>
                            <img src="./images/latest-img.png" className="card-img-top" alt="..." />
                            <span className="card-price"><span className="contest-add">Contest</span> 5B2</span>
                            <div className="card-body">
                                <h5 className="card-title">Title goes here</h5>
                                <div className="ticket-price-tab">
                                    <p>Ticket Price:</p>
                                    <p className="inner-price-add">$12.85</p>
                                </div>
                                <div className="remaining-tab">
                                    <p>95K+ Remaining</p>
                                    <p className="inner-price-add"><i className="bi bi-stopwatch"></i> 30 AUG 2025</p>
                                </div>
                                <button className="btn btn-custom">View Details <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="card position-relative">
                            <div className="exclusive-tab">
                                <button>Exclusive</button>
                                <i className="bi bi-heart"></i>
                            </div>
                            <img src="./images/latest-img.png" className="card-img-top" alt="..." />
                            <span className="card-price"><span className="contest-add">Contest</span> 5B2</span>
                            <div className="card-body">
                                <h5 className="card-title">Title goes here</h5>
                                <div className="ticket-price-tab">
                                    <p>Ticket Price:</p>
                                    <p className="inner-price-add">$12.85</p>
                                </div>
                                <div className="remaining-tab">
                                    <p>95K+ Remaining</p>
                                    <p className="inner-price-add"><i className="bi bi-stopwatch"></i> 30 AUG 2025</p>
                                </div>
                                <button className="btn btn-custom">View Details <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="card position-relative">
                            <div className="exclusive-tab">
                                <button>Exclusive</button>
                                <i className="bi bi-heart"></i>
                            </div>
                            <img src="./images/latest-img.png" className="card-img-top" alt="..." />
                            <span className="card-price"><span className="contest-add">Contest</span> 5B2</span>
                            <div className="card-body">
                                <h5 className="card-title">Title goes here</h5>
                                <div className="ticket-price-tab">
                                    <p>Ticket Price:</p>
                                    <p className="inner-price-add">$12.85</p>
                                </div>
                                <div className="remaining-tab">
                                    <p>95K+ Remaining</p>
                                    <p className="inner-price-add"><i className="bi bi-stopwatch"></i> 30 AUG 2025</p>
                                </div>
                                <button className="btn btn-custom">View Details <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="view-all-btn btn">View All Contest <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </section>

         <section className="how-it-works">
            <div className="container">
                <p className="mb-2"><i className="bi bi-trophy"></i> Try your chance of winning</p>
                <h2>How It’s <span>Works</span></h2>
                <p className="celebrate-text mb-5">
                    We celebrate every win, no matter how big or small. Our platform is buzzing with excitement as players hit jackpots and score massive crypto payouts daily.
                </p>

                <div className="row align-items-center">
                    <div className="col-md-3 step-box">
                        <img src="./images/user-icons.png" />
                        <h6>Step _ <span>01</span></h6>
                        <p className="step-title">Sign Up Instantly</p>
                        <p className="small">Create your account in just a few minutes. Simply register</p>
                    </div>

                    <div className="col-md-1 d-none d-md-block arrow">
                        <img src="./images/long-arrow-icon.png" />
                    </div>

                    <div className="col-md-3 step-box">
                        <img src="./images/deposite.png" />
                        <h6>Step _ <span>02</span></h6>
                        <p className="step-title">Deposit Securely</p>
                        <p className="small">Create your account in just a few minutes. Simply register</p>
                    </div>

                    <div className="col-md-1 d-none d-md-block arrow">
                        <img src="./images/long-arrow-icon.png" />
                    </div>

                    <div className="col-md-3 step-box">
                        <img src="./images/winner-icons.png" />

                        <h6>Step _ <span>03</span></h6>
                        <p className="step-title">Win Real Amount</p>
                        <p className="small">Create your account in just a few minutes. Simply register</p>
                    </div>
                </div>

                <div className="cta-box mt-3">
                    <span><i className="bi bi-person-check"></i> Ready to play? Create your account now.</span>
                    <a href="#" className="btn btn-primary ms-auto">Register Now</a>
                </div>
            </div>
        </section>
    </main>
  );
}

export default Home;
