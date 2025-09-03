import { NavLink } from "react-router-dom";
import LoginModal from "../modals/LoginModal";
import { useEffect, useState } from "react";
import SignupModal from "../modals/SignupModal";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleOpenLogin = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };

  const handleOpenSignup = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };

  const handleCloseLogin = () => setOpenLogin(false);
  const handleCloseSignup = () => setOpenSignup(false);

  const handleLoginSuccess = (response) => {
    setUser(response.user);
    setOpenLogin(false);
    setOpenSignup(false);
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("authToken", response.token);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    window.location.href = "/";
  };

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
          </div>

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
              <div className="dropdown">
                <button
                  className="btn btn-light d-flex align-items-center gap-2 px-3 rounded-pill"
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i>
                  <span>Profile</span> {/* show first name */}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/profile">
                      <i className="bi bi-person"></i> Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/my-orders">
                      <i className="bi bi-bag-check"></i> My Orders
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* Login Modal */}
      <LoginModal
        open={openLogin}
        handleClose={handleCloseLogin}
        handleSignupClick={handleOpenSignup}
        onLoginSuccess={handleLoginSuccess}
      />

      <SignupModal
        open={openSignup}
        handleClose={handleCloseSignup}
        handleLoginClick={handleOpenLogin}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Header;
