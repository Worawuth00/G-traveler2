import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listTourDetail } from "../actions/tourAction";
import Loading from "../components/Loading";
import Message from "../components/Message";

const TourScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const tourDetail = useSelector((state) => state.tourDetail);
  const { loading, tour, error } = tourDetail;
  const tourId = match.params.id;
  useEffect(() => {
    dispatch(listTourDetail(tourId));
  }, [dispatch, match, tourId]);

  const addToBagHandle = () => {
    history.push(`/bag/${tourId}?ticket=${qty}`);
  };

  return (
    <section className="tour container">
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="tour-center">
          <Link to="/">
            <button className="btn">Go Back</button>
          </Link>
          <article className="tour-card">
            <img src={tour.image} alt="" />

            <div className="tour-detail">
              <h1>{tour.name}</h1>
              <div>
                <p>
                  <span>About this tour : </span>
                  {tour.description}
                </p>
                <p>
                  <span>Date : </span>
                  {tour.date}
                </p>
                <p>
                  <span>Location : </span>
                  {tour.location}
                </p>
                <p>
                  <span>Price : </span>฿ {tour.price}/Person
                </p>
                <p>
                  <span>Ticket remaining : </span>
                  {tour.tourSize}
                </p>
              </div>

              {tour.tourSize > 1 && (
                <div className="btn-ticket-center">
                  <button
                    className="btn btn-ticket"
                    onClick={() => setQty(qty - 1)}
                    disabled={qty <= 1}
                  >
                    -
                  </button>
                  <input
                    className="ticket"
                    type="text"
                    value={qty}
                    onChange={(e) => setQty}
                  />
                  <button
                    className="btn btn-ticket"
                    onClick={() => setQty(qty + 1)}
                    disabled={qty === tour.tourSize}
                  >
                    +
                  </button>
                </div>
              )}

              <button
                className="btn"
                disabled={tour.tourSize === 0}
                onClick={addToBagHandle}
              >
                Book Tour
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default TourScreen;
