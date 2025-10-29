"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { addFavoriteEvent } from "../services/EventService";

export default function EventCard({ event }) {
  const router = useRouter();
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(event.is_favourite || false);
  const [loadingFav, setLoadingFav] = useState(false);

  const handleFavorite = async () => {
    if (!user) return;

    setLoadingFav(true);
    try {
      await addFavoriteEvent(event.id);
      setIsFavorite(!isFavorite);
    } finally {
      setLoadingFav(false);
    }
  };

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card position-relative">
        <div className="exclusive-tab">
          <button>Exclusive</button>
          <span onClick={!loadingFav ? handleFavorite : undefined}>
            {isFavorite ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </span>
        </div>

        <Image
          src={event.banners?.[0] || "/images/latest-img.png"}
          width={400}
          height={260}
          className="card-img-top"
          alt={event.title}
        />

        <span className="card-price">
          <span className="contest-add">Contest</span>
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
            onClick={() => router.push(`/event-detail/${event.id}`)}
          >
            View Details <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
