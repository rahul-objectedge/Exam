import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import { connect} from 'react-redux';

const PrivateRouteComponent = (props) => {
   const isLoggedin = props.login; 
   console.log("isLogged");
   console.log(isLoggedin);

   return(
      <Route       
        render = {
            () => isLoggedin ? props.children : 
            <Redirect to ="/"            
          />   
             
        }
       />
   ) 
   
}

const mapStateToProps = (state) => {     
    return {login : state.loginReducer.isLoggedin};
}

const PrivateRoute = connect(
    mapStateToProps, null
)(PrivateRouteComponent);



export default PrivateRoute;
