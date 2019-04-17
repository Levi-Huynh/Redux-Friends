import React from "react";
import { connect } from "react-redux";

import FriendsList  from "../components/FriendsList";
// import actions
import {getData} from "../actions/index";

class FriendsListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //call our action
    this.props.getData();
  }

  render() {
  
 
      // return something here to indicate that you are fetching data
  
    return (
      <div className="CharactersList_wrapper">
         {this.props.fetchingFriend? <h1>Loading</h1> : null}
      {console.log(typeof this.props.friends)}
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  return {
   friends: state.friends,
    fetchingFriend: state.fetchingFriend
  }
}

export default connect(
 (mstp), {getData: getData}
)(FriendsListView);
