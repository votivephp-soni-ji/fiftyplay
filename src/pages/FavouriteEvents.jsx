import { AuthTab } from "../components/AuthTab";
import "../assets/css/favourite-events.css";
import "../assets/css/purchased-tickets.css";
import { useEffect, useState } from "react";
import { addFavoriteEvent, fetchFavourites } from "../services/EventService";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FavouriteEvents = () => {
  const [events, setEvents] = useState([]);
  const [loadingFav, setLoadingFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shuldLoad, setShouldLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const favouriteEvents = async (pageNo = 1) => {
      try {
        setLoading(true);
        const res = await fetchFavourites({ page: pageNo });
        console.log("favourites", res);
        setEvents(res.data);
        setTotalPages(res.meta.last_page);
        setPage(res.meta.current_page);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (shuldLoad) {
      favouriteEvents();
    }
    setShouldLoad(false);
  }, [shuldLoad]);

  const handleFavorite = async (eventId) => {
    setLoadingFav(true);
    try {
      await addFavoriteEvent(eventId);
      setShouldLoad(true);
    } catch (err) {
      console.error("Error adding favorite:", err);
    } finally {
      setLoadingFav(false);
    }
  };
  return (
    <>
      <div className="profile-section-add">
        <div className="container">
          <div className="row">
            <div className="col-md-3 sidebar left-sidebar">
              <AuthTab />
            </div>
            <div className="col-md-9 right-side-content">
              <div className="profile-card">
                <div className="card-header">Favourite Events</div>
                <div className="card-body favourite-events-add">
                  <div className="container">
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
                      <div className="row">
                        {events.map((event) => (
                          <div key={event.id} className="col-md-4 col-sm-6">
                            <div className="card position-relative">
                              <div className="exclusive-tab">
                                <button>Exclusive</button>
                                <span
                                  onClick={() =>
                                    !loadingFav && handleFavorite(event.id)
                                  }
                                  style={{
                                    cursor: loadingFav
                                      ? "not-allowed"
                                      : "pointer",
                                    opacity: loadingFav ? 0.5 : 1,
                                  }}
                                >
                                  <i className="bi bi-heart-fill"></i>
                                </span>
                              </div>

                              <img
                                src={event.banners[0]}
                                className="card-img-top"
                                alt={event.title}
                              />
                              <span className="card-price">
                                <span className="contest-add">Contest</span>{" "}
                                {event.contest_no}
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
                                  <p>
                                    <i className="bi bi-ticket-perforated"></i>{" "}
                                    {event.remain_tickets}
                                  </p>
                                  <p className="inner-price-add">
                                    <i className="bi bi-stopwatch"></i>{" "}
                                    {event.draw_time}
                                  </p>
                                </div>
                                <button
                                  onClick={() =>
                                    navigate("/event-detail", {
                                      state: { event: event.id },
                                    })
                                  }
                                  className="btn btn-custom"
                                >
                                  View Details{" "}
                                  <i className="bi bi-arrow-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {totalPages > 1 && (
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    {/* Previous Button */}
                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                      <button
                        className="page-link"
                        onClick={() => page > 1 && setPage(page - 1)}
                      >
                        <i className="bi bi-chevron-left"></i> Back
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, idx) => (
                      <li
                        key={idx + 1}
                        className={`page-item ${
                          page === idx + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setPage(idx + 1)}
                        >
                          {idx + 1}
                        </button>
                      </li>
                    ))}

                    {/* Next Button */}
                    <li
                      className={`page-item ${
                        page === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => page < totalPages && setPage(page + 1)}
                      >
                        Next <i className="bi bi-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
