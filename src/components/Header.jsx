import { NavLink } from "react-router-dom";
import LoginModal from "../modals/LoginModal";
import { useEffect, useState } from "react";
import SignupModal from "../modals/SignupModal";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const authUser = localStorage.getItem("user");
    console.log(authUser);
    if (authUser) {
      setUser(JSON.parse(authUser));
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
              <div className="d-flex justify-content-end align-items-center gap-3">
                <a href="#" className="text-dark">
                  <i className="bi bi-bag fs-5"></i>
                </a>

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
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="notificationDropdown"
                    style={{ width: "300px;" }}
                  >
                    <li className="dropdown-header">Notifications</li>
                    <li>
                      <a className="dropdown-item" href="#">
                        New message from John
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Your order has been shipped
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Password changed successfully
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item text-center" href="#">
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
                      <a className="dropdown-item" href="#">
                        My Profile
                      </a>
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
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
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
