import React from "react";

const Friend = props => {
  return  (
    <div>
  <li>{props.friend.name} </li>
  <li>{props.friend.age}</li>  
  <li>{props.friend.email}</li>

              
                </div>
  
  )
};

export default Friend;
