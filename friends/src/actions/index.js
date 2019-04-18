import axios from 'axios';
import axiosWithAuth from '../utils/AxiosAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';



export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload );
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
    })
    .catch(err => console.log(err));
};



export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const LOAD_NEW_FRIEND = 'LOAD_NEW_FRIEND';
export const NEW_FRIEND_SUCCESS='NEW_FRIEND_SUCCESS';

export const postFriend = (data) => dispatch=> {
  dispatch({type:LOAD_NEW_FRIEND});
  axiosWithAuth()
.post('http://localhost:5000/api/friends', data)
.then(res =>{
console.log("resolved:", res);
dispatch({type: NEW_FRIEND_SUCCESS, payload: data})
})
.catch(err =>console.group(err));


};
