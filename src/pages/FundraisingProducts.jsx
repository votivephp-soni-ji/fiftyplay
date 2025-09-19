import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  IconButton,
  Pagination,
  CircularProgress,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { fetchEvents } from "../services/EventService";
import "../assets/css/event-products.css";
import { useNavigate } from "react-router-dom";

const FundraisingProducts = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  // ✅ Fetch events from API
  const loadEvents = async (pageNo = 1) => {
    setLoading(true);
    try {
      const res = await fetchEvents({ page: pageNo });
      console.log("data", res.data);
      setEvents(res.data);
      setTotalPages(res.meta.last_page);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents(page);
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <section className="page-header banner-top-add">
        <div className="container">
          <h1>Fundraising Products</h1>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Fundraising Products
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <div className="latest-events-add">
        <div className="container">
          <h1 className="text-center">
            Latest <span className="events-text">Events</span>
          </h1>
          <p className="text-center celebrate-text">
            We celebrate every win, no matter how big or small. Our platform is
            buzzing with excitement as players hit jackpots and score massive
            crypto payouts daily.
          </p>

          <div className="latest-events-inner-added">
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                <CircularProgress sx={{ color: "#ee127b" }} />
              </Box>
            ) : (
              <div className="row g-4">
                {events.map((event) => (
                  <div className="col-md-4 col-sm-6" key={event.id}>
                    <div className="card position-relative">
                      <div className="exclusive-tab">
                        <button>Exclusive</button>
                        <i className="bi bi-heart"></i>
                      </div>

                      <img
                        src={event.banners?.[0] || "./images/latest-img.png"}
                        className="card-img-top"
                        alt="{event.title}"
                      />

                      <span className="card-price">
                        <span className="contest-add">Contest</span>{" "}
                        <small>{event.contest_no}</small>
                      </span>

                      <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <div className="ticket-price-tab">
                          <p>Ticket Price:</p>
                          <p className="inner-price-add">
                            ${event.ticket_price}
                          </p>
                        </div>

                        <div className="remaining-tab">
                          <p>{event.remain_tickets || 0} Remaining</p>
                          <p className="inner-price-add">
                            <i className="bi bi-stopwatch"></i> {event.end_date}
                          </p>
                        </div>
                        <button
                          className="btn btn-custom"
                          onClick={() =>
                            navigate("/event-detail", {
                              state: { event: event.id },
                            })
                          }
                        >
                          View Details <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
    </>
  );
};

export default FundraisingProducts;
