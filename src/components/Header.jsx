import { NavLink } from "react-router-dom";
import LoginModal from "../modals/LoginModal";
import { useEffect, useState } from "react";
import SignupModal from "../modals/SignupModal";
import { useAuth } from "../context/AuthContext";
import ForgotPasswordModal from "../modals/ForgotPasswordModal";

const Header = () => {
  const {
    user,
    handleLoginSuccess,
    openLogin,
    openSignup,
    setOpenLogin,
    setOpenSignup,
    openForgot,
    setOpenForgot,
    logout,
  } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm sticky-top">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand fw-bold" to="/">
            <img src="/images/logo.png" alt="Logo" width="120" />
          </NavLink>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fundraising-products">
                  Fundraising Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/our-team">
                  Our Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>

            {/* Right Side */}
            <div className="d-flex mt-3 mt-lg-0 right-side-login">
              {!user ? (
                <>
                  <i className="bi bi-bag"></i>
                  <button className="btn btn-primary d-flex align-items-center gap-2 px-3 login-btn-add">
                    <i
                      className="bi bi-person-plus"
                      onClick={() => setOpenSignup(true)}
                    ></i>
                    <span onClick={() => setOpenLogin(true)}> | Login</span>
                  </button>
                </>
              ) : (
                <div className="d-flex justify-content-end align-items-center gap-3">
                  <div className="dropdown">
                    <a
                      className="text-dark position-relative"
                      href="#"
                      role="button"
                      id="notificationDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-bell fs-5"></i>

                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        3
                      </span>
                    </a>

                    <ul
                      className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3"
                      aria-labelledby="notificationDropdown"
                      style={{ width: "320px" }}
                    >
                      <li className="dropdown-header notification-text d-flex justify-content-between align-items-center">
                        Notifications
                        <span className="badge bg-danger rounded-pill">3</span>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="#"
                        >
                          <i className="bi bi-envelope-fill text-primary"></i>
                          <span>New message from John</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="#"
                        >
                          <i className="bi bi-box-seam text-success"></i>
                          <span>Your order has been shipped</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="#"
                        >
                          <i className="bi bi-shield-lock-fill text-warning"></i>
                          <span>Password changed successfully</span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="dropdown-item text-center fw-semibold text-primary"
                          href="#"
                        >
                          View all
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <a
                      className="d-flex align-items-center text-decoration-none dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={user?.avatar_url}
                        alt="Profile"
                        className="profile-img me-2"
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                        }}
                      />
                      <span>{user?.name}</span>
                    </a>

                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <NavLink className="dropdown-item" to="/profile">
                          My Profile
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={logout}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Login Modal */}
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

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        open={openForgot}
        handleClose={() => setOpenForgot(false)}
        handleBackToLogin={() => {
          setOpenForgot(false);
          setOpenLogin(true);
        }}
      />

      <SignupModal
        open={openSignup}
        handleClose={() => setOpenSignup(false)}
        handleSignupClick={() => {
          setOpenLogin(false); // close login
          setOpenSignup(true); // open signup
        }}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Header;
