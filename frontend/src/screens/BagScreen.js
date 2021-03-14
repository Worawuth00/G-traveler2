import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../actions/bagAction";

const BagScreen = ({ match, location}) => {
  const tourId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  // Access redux from store
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);
  const { bagItems } = bag;

  useEffect(() => {
    if (tourId) {
      dispatch(addToBag(tourId, qty));
    }
  }, [dispatch, tourId, qty]);

  const removeFromBagHandle = (id) => {
    dispatch(removeFromBag(id));
  };



  return (
    <section className="bag container">
      <h1>
        <span>{bagItems.length}</span> Tour In Your Bag
      </h1>
      <hr />
      {bagItems.length > 0 && (
        <Link to="/">
          <button className="btn">Go Back</button>
        </Link>
      )}

      <div className="bag-center">
        <article>
          {bagItems.map((item) => {
            return (
              <div key={item.tour_id} className="bag-card">
                <img src={item.image} alt={item.name} />
                <div className="card-detail">
                  <h3>{item.name}</h3>
                  <p>
                    <span>Ticket:</span> {item.qty}
                  </p>
                  <p>
                    <span>Price: </span> ฿{item.price * item.qty}
                  </p>
                  <p>
                    <span>Date: </span>
                    {item.date}
                  </p>
                  <button
                    className="btn"
                    onClick={() => removeFromBagHandle(item.tour_id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </article>

        {bagItems.length === 0 ? (
          <Link to="/">
            <button className="btn">Explore Tour</button>
          </Link>
        ) : (
          <div className="bag-summary">
            <div className="summary-name">
              <h1>Tour summary</h1>
            </div>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>Total Price: </td>
                  <td>
                    ฿
                    {bagItems.reduce(
                      (sum, item) => sum + item.qty * item.price,
                      0
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn">
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BagScreen;
