const initialState = {
    itineraries: [],
    auxiliar: [],
    oneItinerary: {}
}

const itinerariesReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload,
                auxiliar: action.payload
            }
        case "GET_ONE_ITINERARY":
            return {
                ...state,
                oneItinerary: action.payload,
                auxiliar: action.payload
            }
            default:
                return state
    }

}

export default itinerariesReducers