import {
  BAG_ADD_ITEM,
  BAG_REMOVE_ITEM,
} from "../constants/bagConstants";

export const bagReducer = (state = { bagItems: [] }, action) => {
  switch (action.type) {
    case BAG_ADD_ITEM:
      const item = action.payload;
      const existItem = state.bagItems.find((e) => e.tour_id === item.tour_id);

      if (existItem) {
        return {
          bagItems: state.bagItems.map((e) =>
            e.tour_id === existItem.tour_id ? item : e
          ),
        };
      } else {
        return { bagItems: [...state.bagItems, item] };
      }

    case BAG_REMOVE_ITEM:
      return {
        bagItems: state.bagItems.filter((e) => e.tour_id !== action.payload),
      };
    default:
      return state;
  }
};
