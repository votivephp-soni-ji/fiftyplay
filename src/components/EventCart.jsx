import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addFavoriteEvent } from "../services/EventService";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(event.is_favourite || false);
  const [loadingFav, setLoadingFav] = useState(false);

  const { user } = useAuth();

  const handleFavorite = async () => {
    if (!user) {
      return false;
    }
    setLoadingFav(true);
    try {
      await addFavoriteEvent(event.id); // call API
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.error("Error adding favorite:", err);
    } finally {
      setLoadingFav(false);
    }
  };

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card position-relative">
        <div className="exclusive-tab">
          <button>Exclusive</button>
          <span
            onClick={() => !loadingFav && handleFavorite(event.id)}
            style={{
              cursor: loadingFav ? "not-allowed" : "pointer",
              opacity: loadingFav ? 0.5 : 1,
            }}
          >
            {isFavorite ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </span>
        </div>

        <img
          src={event.banners?.[0] || "./images/latest-img.png"}
          className="card-img-top"
          alt={event.title}
        />

        <span className="card-price">
          <span className="contest-add">Contest</span>{" "}
          <small>{event.contest_no}</small>
        </span>

        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>

          <div className="ticket-price-tab">
            <p>Ticket Price:</p>
            <p className="inner-price-add">${event.ticket_price}</p>
          </div>

          <div className="remaining-tab">
            <p>Start date</p>
            <p className="inner-price-add">
              <i className="bi bi-stopwatch"></i> {event.start_date}
            </p>
          </div>

          <button
            className="btn btn-custom"
            onClick={() =>
              navigate("/event-detail", { state: { event: event.id } })
            }
          >
            View Details <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
