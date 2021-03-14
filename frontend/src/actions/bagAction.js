import axios from "axios";
import { BAG_ADD_ITEM, BAG_REMOVE_ITEM } from "../constants/bagConstants";

export const addToBag = (tourId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://g-traveler2.herokuapp.com/api/tour/${tourId}`
  );

  dispatch({
    type: BAG_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      tourSize: data.tourSize,
      date: data.date,
      tour_id: data._id,
      qty,
    },
  });

  localStorage.setItem("bagItems", JSON.stringify(getState().bag.bagItems));
};

export const removeFromBag = (tourId) => (dispatch, getState) => {
  dispatch({ type: BAG_REMOVE_ITEM, payload: tourId });
  localStorage.setItem("bagItems", JSON.stringify(getState().bag.bagItems));
};
