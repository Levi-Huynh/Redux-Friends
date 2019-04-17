import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


const PrivateRoute = ({ component: Component, errorStatusCode, ...rest}) => {

return (
    <Route
    {...rest}
    render={props => {
        if(localStorage.getItem("token") && errorStatusCode !== 403){
            return <Component {...props}/>;
}else{
    return <Redirect to="/Login"/>;
}

    }}
    />
);

};

const mapStateToProps = ({ errorStatusCode }) => ({
    errorStatusCode
  });
  
  export default connect(
    mapStateToProps,
    {}
  )(PrivateRoute);
  

