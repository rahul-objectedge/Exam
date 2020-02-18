import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import LoginPage from '../Login/Login'
import Search from '../Search/Search'
import ProductDetail from '../ProductDetail/ProductDetail'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const Navbar = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/search">search</Link>
                </li>
                <li>
                    <Link to="/productDetails">Product Details</Link>
                </li>
            </ul>
       
        <Switch>
            <Route exact path = "/" component = {LoginPage}>
            </Route>
            <Route path = "/search" component = {Search}>
            </Route>
           
            <PrivateRoute path="/productDetails">
                <ProductDetail/>
             </PrivateRoute>
         </Switch>     
        </Router>
    );
}

export default Navbar;
