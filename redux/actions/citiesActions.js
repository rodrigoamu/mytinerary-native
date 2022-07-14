import axios from 'axios';

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/cities')
            dispatch({ type: 'GET_CITIES', payload: response.data.response.cities })

        }
    },
    getOneCity: (id) => {

        return async (dispatch, getState) => {

            const response = await axios.get(`https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/cities/${id}`)
            dispatch({ type: 'GET_ONE_CITY', payload: response.data.response })

        }


    },
    filterCities: (input) => {
        return async (dispatch, getState) => {
            dispatch({ type: "FILTERCITIES", payload: input })
        }
    }
}

export default citiesActions