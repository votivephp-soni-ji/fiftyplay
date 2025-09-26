import { useEffect, useState } from "react";
import "../assets/css/purchased-tickets.css";
import "../assets/css/event-products.css";
import { AuthTab } from "../components/AuthTab";
import { TicketHistory } from "../services/EventService";
import { Box, CircularProgress } from "@mui/material";

export const PurchasedTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const myTickets = async (pageNo = 1) => {
      setLoading(true);
      try {
        const res = await TicketHistory({page:pageNo});
        console.log("My Tickets", res.data);
        setTickets(res.data);
        setTotalPages(res.meta.last_page);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    myTickets(page);
  }, [page]);

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
                  {loading ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 10,
                      }}
                    >
                      <CircularProgress sx={{ color: "#ee127b" }} />
                    </Box>
                  ) : (
                    <div className="table-responsive">
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
                        {tickets.map((ticket) => (
                          <tr key={ticket.ticket_number}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={ticket?.event_banner}
                                  className="ticket-img me-3"
                                  alt=""
                                />
                                <span>#{ticket.ticket_number}</span>
                              </div>
                            </td>
                            <td>{ticket.purchase_at}</td>
                            <td className="fw-bold">${ticket.price}</td>
                            <td>
                              <span
                                className={
                                  ticket.status === "paid"
                                    ? "status-active"
                                    : ticket.status === "expired"
                                    ? "status-expire"
                                    : "status-cancel"
                                }
                              >
                                <i className="bi bi-check2-circle me-1"></i> {ticket.status}
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
                                      <i className="bi bi-trash me-2"></i> Delete Tickets
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
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  )}
                </div>
              </div>
            </div>

            {totalPages > 1 && (
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  {/* Back Button */}
                  <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (page > 1) setPage(page - 1);
                      }}
                    >
                      <i className="bi bi-chevron-left"></i> Back
                    </a>
                  </li>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <li
                        key={p}
                        className={`page-item ${page === p ? "active" : ""}`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPage(p);
                          }}
                        >
                          {p}
                        </a>
                      </li>
                    )
                  )}

                  {/* Next Button */}
                  <li
                    className={`page-item ${
                      page === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (page < totalPages) setPage(page + 1);
                      }}
                    >
                      Next <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
