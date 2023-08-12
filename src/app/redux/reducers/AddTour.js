
const initialState = {
    addTour: false,
  };
  
  const AddTourReducer = (state = initialState, action) => {
    switch (action.type) {
      case "TOUR_ADD":
        return {
          ...state,
          addTour: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default AddTourReducer;