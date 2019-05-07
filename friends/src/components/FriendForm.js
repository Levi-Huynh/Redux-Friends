import React from "react";
import { connect } from "react-redux";

import {postFriend} from "../actions/index";

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        newFriend: {
            name: "",
            age: "",
            email: ""
        }

        };

    }


handleChange = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
        newFriend: {
            ...prevState.newFriend,
            [e.target.name]: value
        }
      }));
};

postMessage = e => {
 e.preventDefault();
    this.props.postFriend(this.state.newFriend);
    this.setState({
        newFriend: {
            name: "",
            age: "",
            email: ""
        }
    });
   
  
};

render() {
 return (
    <div className="friend-form">
    <h2>Post (add) a new friend </h2>
    <form >
    <input
    type="text"
    name="name"
    placeholder="name"
    onChange={this.handleChange}
    value={this.state.newFriend.name} />
    <input
    type="text"
    name="age"
    placeholder="age"
    onChange={this.handleChange}
    value={this.state.newFriend.age} />
    <input
    type="text"
    name="email"
    placeholder="email"
    onChange={this.handleChange}
    value={this.state.newFriend.email}/>
  
   
        <button onClick={this.postMessage} type="submit"> Add Friend</button>
      
        </form>
        </div>
    )}

}

function mapStateToProps (state) {
    return {};
}

export default connect(
    mapStateToProps,
    {postFriend } 
)(FriendForm);