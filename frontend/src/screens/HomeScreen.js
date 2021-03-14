import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tour from "../components/Tour";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { listTours } from "../actions/tourAction";

const HomeScreen = () => {
  // Access redux from store
  const dispatch = useDispatch();
  const tourList = useSelector((state) => state.tourList);
  const { loading, tours, error } = tourList;

  useEffect(() => {
    dispatch(listTours());
  }, [dispatch]);

  return (
    <>
      <div className="showcase">
        <div className="showcase-banner">
          <h1>Exploring</h1>
          <p>
            <strong>Bangkok</strong>
          </p>
        </div>
      </div>
      <section className="tours container">
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <div id="tours" className="tours-center">
            {tours.map((tour) => {
              return <Tour key={tour._id} {...tour} />;
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default HomeScreen;
