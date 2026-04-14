import { useEffect, useState } from "react";
import "../assets/css/purchased-tickets.css";
import "../assets/css/event-products.css";
import { AuthTab } from "../components/AuthTab";
import { TicketHistory } from "../services/EventService";
import { Box, CircularProgress } from "@mui/material";
import { fetchNotifications } from "../services/WebService";

export const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const myNotifications = async (pageNo = 1) => {
      setLoading(true);
      try {
        const res = await fetchNotifications({ page: pageNo });
        setNotifications(res.data);
        setTotalPages(res.meta.last_page);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    myNotifications(page);
  }, [page]);

  const getPageNumbers = () => {
  const pages = [];
  const maxVisible = 5;

  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, page + 2);

  if (page <= 3) {
    end = Math.min(totalPages, maxVisible);
  }

  if (page >= totalPages - 2) {
    start = Math.max(1, totalPages - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};

  return (
    <div className="profile-section-add">
      <div className="container">
        <div className="row">
          <div className="col-md-3 sidebar left-sidebar">
            <AuthTab />
          </div>

          <div className="col-md-9 right-side-content">
            <div className="profile-card">
              <div className="card-header">Notifications</div>
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
                      <table
                        className="table align-middle table-bordered"
                        style={{ width: "100%" }}
                      >
                        <thead className="table-light">
                          <tr>
                            <th>Title</th>
                            <th>Message</th>
                            {/* <th>Notify At</th> */}
                          </tr>
                        </thead>

                        <tbody className="ads-table-tickets">
                          {notifications.map((notification) => (
                            <tr key={notification.id}>
                              <td title={notification.title}>
                                <div className="d-flex align-items-center">
                                  <span
                                    className="fw-semibold text-truncate"
                                    style={{ maxWidth: "180px" }}
                                  >
                                    {notification.title}
                                  </span>
                                </div>
                              </td>
                              <td
                                className="text-wrap"
                                style={{ maxWidth: "250px" }}
                              >
                                {notification.body}
                              </td>
                              {/* <td>{notification.created_at ?? "—"}</td> */}
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
  <nav>
    <ul className="pagination justify-content-center">

      {/* Prev */}
      <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => setPage(page - 1)}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
      </li>

      {/* First page */}
      {page > 3 && (
        <>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(1)}>
              1
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        </>
      )}

      {/* Dynamic pages */}
      {getPageNumbers().map((p) => (
        <li key={p} className={`page-item ${page === p ? "active" : ""}`}>
          <button
            className="page-link"
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        </li>
      ))}

      {/* Last page */}
      {page < totalPages - 2 && (
        <>
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPage(totalPages)}
            >
              {totalPages}
            </button>
          </li>
        </>
      )}

      {/* Next */}
      <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => setPage(page + 1)}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
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
