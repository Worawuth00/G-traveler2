import axios from "axios";
import {
  TOUR_DETAIL_FAIL,
  TOUR_DETAIL_REQUEST,
  TOUR_DETAIL_SUCCESS,
  TOUR_LIST_FAIL,
  TOUR_LIST_REQUEST,
  TOUR_LIST_SUCCESS,
} from "../constants/tourConstants";

export const listTours = () => async (dispatch) => {
  dispatch({ type: TOUR_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      "https://g-traveler2.herokuapp.com/api/tour"
    );
    dispatch({ type: TOUR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TOUR_LIST_FAIL, payload: error.message });
  }
};

export const listTourDetail = (id) => async (dispatch) => {
  dispatch({ type: TOUR_DETAIL_REQUEST });
  try {
    const { data } = await axios.get(
      `https://g-traveler2.herokuapp.com/api/tour/${id}`
    );
    dispatch({ type: TOUR_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TOUR_DETAIL_FAIL, payload: error.message });
  }
};
