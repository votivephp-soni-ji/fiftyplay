import "../assets/css/purchased-tickets.css";
import { AuthTab } from "../components/AuthTab";

export const PurchasedTickets = () => {
  return (
    <div className="profile-section-add">
      <div className="container">
        <div className="row">
          <div className="col-md-3 sidebar left-sidebar">
            <AuthTab />
          </div>

          <div className="col-md-9 right-side-content">
            <div className="profile-card">
              <div className="card-header">Purchased Tickets History</div>
              <div className="card-body purchased-tickets">
                <div className="tickets-history">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Ads</th>
                        <th>Date</th>
                        <th>Prices</th>
                        <th>Status</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody className="ads-table-tickets">
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="./images/tickets.png"
                              className="ticket-img me-3"
                              alt=""
                            />
                            <span>Ticket Name Will Goes Here...</span>
                          </div>
                        </td>
                        <td>Sep 30, 2025</td>
                        <td className="fw-bold">$250.00</td>
                        <td>
                          <span className="status-active">
                            <i className="bi bi-check2-circle me-1"></i> Active
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button
                              className="btn btn-light btn-sm"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2"></i> View
                                  Details
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-2"></i> Delete
                                  Tickets
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-gift me-2"></i> Claim Now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="./images/tickets.png"
                              className="ticket-img me-3"
                              alt=""
                            />
                            <span>Ticket Name Will Goes Here...</span>
                          </div>
                        </td>
                        <td>Oct 15, 2025</td>
                        <td className="fw-bold">$50.00</td>
                        <td>
                          <span className="status-active">
                            <i className="bi bi-check2-circle me-1"></i> Active
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button
                              className="btn btn-light btn-sm"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2"></i> View
                                  Details
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-2"></i> Delete
                                  Tickets
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-gift me-2"></i> Claim Now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="./images/tickets.png"
                              className="ticket-img me-3"
                              alt=""
                            />
                            <span>Ticket Name Will Goes Here...</span>
                          </div>
                        </td>
                        <td>July 21, 2025</td>
                        <td className="fw-bold">$80.00</td>
                        <td>
                          <span className="status-active">
                            <i className="bi bi-check2-circle me-1"></i> Active
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button
                              className="btn btn-light btn-sm"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2"></i> View
                                  Details
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-2"></i> Delete
                                  Tickets
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-gift me-2"></i> Claim Now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="./images/tickets.png"
                              className="ticket-img me-3"
                              alt=""
                            />
                            <span>Ticket Name Will Goes Here...</span>
                          </div>
                        </td>
                        <td>July 21, 2025</td>
                        <td className="fw-bold">$80.00</td>
                        <td>
                          <span className="status-active">
                            <i className="bi bi-check2-circle me-1"></i> Active
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button
                              className="btn btn-light btn-sm"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2"></i> View
                                  Details
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-2"></i> Delete
                                  Tickets
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-gift me-2"></i> Claim Now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="./images/tickets.png"
                              className="ticket-img me-3"
                              alt=""
                            />
                            <span>Ticket Name Will Goes Here...</span>
                          </div>
                        </td>
                        <td>July 21, 2025</td>
                        <td className="fw-bold">$80.00</td>
                        <td>
                          <span className="status-active">
                            <i className="bi bi-check2-circle me-1"></i> Active
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button
                              className="btn btn-light btn-sm"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2"></i> View
                                  Details
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-2"></i> Delete
                                  Tickets
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-gift me-2"></i> Claim Now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr className="add">
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="./images/tickets.png"
                              className="ticket-img me-3"
                              alt=""
                            />
                            <span>Ticket Name Will Goes Here...</span>
                          </div>
                        </td>
                        <td>July 21, 2025</td>
                        <td className="fw-bold">$50.00</td>
                        <td>
                          <span className="status-expire">
                            <i className="bi bi-x-circle me-1"></i> Expire
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button
                              className="btn btn-light btn-sm"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2"></i> View
                                  Details
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-2"></i> Delete
                                  Tickets
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="./images/tickets.png"
                              className="ticket-img me-3"
                              alt=""
                            />
                            <span>Ticket Name Will Goes Here...</span>
                          </div>
                        </td>
                        <td>July 21, 2025</td>
                        <td className="fw-bold">$80.00</td>
                        <td>
                          <span className="status-expire">
                            <i className="bi bi-x-circle me-1"></i> Expire
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button
                              className="btn btn-light btn-sm"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2"></i> View
                                  Details
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-2"></i> Delete
                                  Tickets
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link">
                    <i className="bi bi-chevron-left"></i> Back
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
