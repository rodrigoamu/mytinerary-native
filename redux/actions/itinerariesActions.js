import axios from 'axios';

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/itineraries')            
            dispatch ({type: 'GET_ITINERARIES', payload: response.data.response })
            
        }
    },
    getOneItinerary: (id) => {

        return async (dispatch, getState) => {

            const response = await axios.get(`https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/itineraries/${id}`)            
            dispatch ({type: 'GET_ONE_ITINERARY', payload: response.data.response })

        }


    },
    likeDislike: (id) => {
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/itineraries/like/${id}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                console.log(response)
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }
}

export default itinerariesActions