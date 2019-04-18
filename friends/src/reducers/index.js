import {LOGIN_START, LOGIN_SUCCESS, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
LOAD_NEW_FRIEND, NEW_FRIEND_SUCCESS} from "../actions";

const initialState = {
   friends: [],
   loggingIn: false,
   error: "",
   
   deletingFriend: false,
  fetchingFriends: false,
  savingFriends: false,
  updatingFriend: false,
  };

  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingFriends: false,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          error: '',
          loggingIn: false
        };
        case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          fetchingFriends: true,
          errorStatusCode: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingFriends: false,
          friends: action.payload
          // gasPrices: action.payload
          //   .filter(price => price.type === 'Gasoline - Regular')
          //   .filter(
          //     price =>
          //       price.location === 'US' || price.location === 'State of Hawaii'
          //   )
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          fetchingFriends: false,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status
        };
        case LOAD_NEW_FRIEND:
        return {
          ...state,
          error: '',
    
          
        };

        case NEW_FRIEND_SUCCESS:
        
          let newFriend1 ={
            id: "", name: "", age:"", email: ""}
          
         return{ ...state, friends: [...state.friends, newFriend1] };

      default:
        return state;
    }
  };
  
  export default reducer;
     
     