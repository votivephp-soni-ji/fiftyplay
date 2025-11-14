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
import { useState, useEffect } from "react";
import SignupModal from "../modals/SignupModal";
import LoginModal from "../modals/LoginModal";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchCategories } from "../services/EventService";
import EventCard from "../components/EventCart";
import ForgotPasswordModal from "../modals/ForgotPasswordModal";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchLoad, setSearchLoad] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    date: "",
  });

  const {
    handleLoginSuccess,
    openLogin,
    openSignup,
    setOpenLogin,
    setOpenSignup,
    openForgot,
    setOpenForgot,
  } = useAuth();

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL; // replace with your actual base_url

  useEffect(() => {
    axios
      .get(`${baseUrl}/events?visiblity=online&status=active&limit=6`)
      .then((res) => {
        setEvents(res.data.data || []);
        console.log(res.data.data); // assuming response has {data: [...]}
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
    const getCategories = async () => {
      let res = await fetchCategories();
      console.log("categ", res);
      if (res.status) {
        setCategories(res.categories);
      }
    };

    getCategories();
  }, []);

  const handleRedirect = (eventId) => {
    navigate("/event-detail", { state: { event: eventId } });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchLoad(true);
    setTimeout(() => {
      setSearchLoad(false);
      const query = new URLSearchParams();
      if (filters.category) query.append("category", filters.category);
      if (filters.location) query.append("location", filters.location);
      if (filters.date) query.append("date", filters.date);

      navigate(`/fundraising-products?${query.toString()}`);
    }, 2000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="our-next-hero">
        <div className="hero-content container">
          <p className="mb-2">COULD YOU BE OUR NEXT WINNER?</p>
          <h1 className="fw-bold display-5">Your Game. Your Half. Your Win.</h1>

          {/* Search Box */}
          <form className="search-box mt-4">
            <select
              className="form-select"
              value={filters.category}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, category: e.target.value }))
              }
            >
              <option value="">Category</option>
              {categories &&
                categories.map((category, index) => {
                  return (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Address, neighborhood, city or zip"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
            />
            <input
              type="date"
              className="form-control"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, date: e.target.value }))
              }
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              {searchLoad ? "Searching..." : "Search"}
            </Button>
          </form>
        </div>
      </section>

      {/* Trusted Winners Section */}
      <section className="trusted-winners">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 trusted-winners-left">
              <p className="mb-1">
                <i className="bi bi-trophy"></i> Trusted, by Thousands of
                Winners
              </p>
              <h2 className="fw-bold">
                Trusted by Winners, <br />
                Powered by <span className="fifty-text-add">FiftyPlay</span>
              </h2>
              <p className="text-simply-add mb-4">
                We go beyond simply offering lottery games; we provide a
                trusted, secure environment where millions of players come to
                enjoy.
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
                      <small className="text-muted">
                        We prioritize fair gameplay with verified lottery draw
                        processes
                      </small>
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
                      <small className="text-muted">
                        We prioritize fair gameplay with verified lottery draw
                        processes
                      </small>
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
                      <small className="text-muted">
                        We prioritize fair gameplay with verified lottery draw
                        processes
                      </small>
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
                      <small className="text-muted">
                        We prioritize fair gameplay with verified lottery draw
                        processes
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-dark btn-play mt-3">
                Play Lottery <i className="bi bi-arrow-right ms-1"></i>
              </button>
            </div>

            <div className="col-lg-6 trusted-winners-right">
              <img
                src="./images/new-post-img.png"
                alt="Basketball"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Winning Numbers */}
      <section className="winning-numbers">
        <div className="container py-5">
          <div className="section-title">
            <p className="mb-1">
              <small>
                <i className="bi bi-trophy"></i> Your chance of winning
              </small>
            </p>
            <h2 className="fw-bold">
              Latest <span>Winning Numbers</span>
            </h2>
            <p className="winning-numbers-text">
              We celebrate every win, no matter how big or small. Our platform
              is buzzing with excitement as players hit jackpots and score
              massive crypto payouts daily.
            </p>
          </div>

          <div className="row g-4">
            {events.length > 0 ? (
              events.map((event, index) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <p className="text-center">No events found</p>
            )}
          </div>

          <div className="text-center">
            <button
              className="view-all-btn btn"
              onClick={() => navigate("/fundraising-products")}
            >
              View All Contest <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <p className="mb-2">
            <i className="bi bi-trophy"></i> Try your chance of winning
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
          {!localStorage.getItem("authToken") && (
            <div className="cta-box mt-3">
              <span>
                <i className="bi bi-person-check"></i> Ready to donate and win?
                Create your account now.
              </span>
              <a
                href="#"
                onClick={() => setOpenSignup(true)}
                className="btn btn-primary ms-auto"
              >
                Register Now
              </a>
            </div>
          )}
        </div>
      </section>
      {/* Signup Modal */}
      <SignupModal
        open={openSignup}
        handleClose={() => setOpenSignup(false)}
        handleLoginClick={() => {
          setOpenSignup(false); // close signup
          setOpenLogin(true); // open login
        }}
        onLoginSuccess={handleLoginSuccess}
      />

      <ForgotPasswordModal
        open={openForgot}
        handleClose={() => setOpenForgot(false)}
        handleBackToLogin={() => {
          setOpenForgot(false);
          setOpenLogin(true);
        }}
      />

      <LoginModal
        open={openLogin}
        handleClose={() => setOpenLogin(false)}
        handleSignupClick={() => {
          setOpenLogin(false);
          setOpenSignup(true);
        }}
        onLoginSuccess={handleLoginSuccess}
        handleForgotClick={() => {
          setOpenLogin(false); // close login
          setOpenForgot(true); // open forgot password
        }}
      />
    </main>
  );
};

export default Home;
