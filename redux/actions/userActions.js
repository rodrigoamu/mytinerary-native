import axios from "axios"

const userActions = {
    signUp: (userData) => {
        
        return async(dispatch) => {
            try {
                const res = await axios.post('https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/auth/signUp',{userData}) // espera una respuesta del llamado a la api con el metodo post del protocolo http
                dispatch({type: 'MESSAGE',
            payload: {
                view: true,
                message: res.data.message,
                success: res.data.success
                
            }
        })
        return res
            }catch(error) {
                console.log(error)
            }
        }
    },

    signIn: (userLogin) => {
 
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/auth/signIn', {userLogin})
  
            
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)//guardamos el token
                dispatch({
                    type: 'USER',
                    payload: res.data.response.userData
                })
                dispatch({
                    type: 'MESSAGE',
                    payload:{
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            } else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true, 
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        } 
    },
    signOut: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token')
            dispatch({
                type: 'USER',
                payload: null
            })
        }   
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
         
            const user = await axios.get('https://mytinerary-amuchastegui-rodrig.herokuapp.com/api/auth/loginToken', {headers: {'Authorization': 'Bearer ' + token}} )
           
            if (user.data.success) {
                dispatch({
                    type: 'USER',
                    payload: user.data.response
                })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success}
                });
            } else {localStorage.removeItem('token')}
        }
    
    }
}

    
export default userActions