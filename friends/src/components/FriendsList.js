import React from "react";
import { connect } from "react-redux";
import Friend from "../components/Friend";

const FriendsList = props => {
  if(!props.friends){return <h1>Loading</h1>}
  return (
    <ul>
      {props.friends.map(friend => {
        return <Friend key={friend.name} friend={friend} />;
      })}
    </ul>
  );
};


export default FriendsList;

  
  