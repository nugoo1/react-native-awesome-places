import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random() + 'a',
                    name: action.placeName,
                    image: {
                      uri: "http://pluspng.com/img-png/bird-hd-png-humming-bird-transparent-png-clipart-picture-1442.png"
                    }
                  })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                  })
            };
        default:
            return state;
    }
};

export default reducer;