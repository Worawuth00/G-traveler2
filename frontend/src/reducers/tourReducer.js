import {
    TOUR_DETAIL_FAIL,
    TOUR_DETAIL_REQUEST,
    TOUR_DETAIL_SUCCESS,
  TOUR_LIST_FAIL,
  TOUR_LIST_REQUEST,
  TOUR_LIST_SUCCESS,
} from "../constants/tourConstants";

export const tourListReducer = (state = { tours: [] }, action) => {
  switch (action.type) {
    case TOUR_LIST_REQUEST:
      return { loading: true, tours: [] };
    case TOUR_LIST_SUCCESS:
      return { loading: false, tours: action.payload };
    case TOUR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tourDetailReducer = (state = { tour: {} }, action) => {
  switch (action.type) {
    case TOUR_DETAIL_REQUEST:
      return { loading: true, tour: {} };
    case TOUR_DETAIL_SUCCESS:
      return { loading: false, tour: action.payload };
    case TOUR_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
