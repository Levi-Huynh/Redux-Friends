import React from 'react';
import UpdateFriendForm from '../components/UpdateFriendForm';

function UpdateFriendContainer(props) {


return (
<div>
   {props.friends.map(friend => (
    <div>
       
       <UpdateFriendForm name={friend.name}
      age={friend.age}
      email={friend.email}
      id={friend.id}
      key={friend.id}
    />
    
      

</div>
 ) )} 



</div>
)

}

export default UpdateFriendContainer;