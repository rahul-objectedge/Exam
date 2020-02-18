import React, { useState } from 'react';
import { connect} from 'react-redux';
import {searchProduct} from '../../actions';

import ProductSummary from '../ProductSummary/ProductSummary';

const SearchComponent = (props) => {
    const [productId, setProductId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();      
        props.doSearchProduct({productId});
    }

    return ( 
        <div>       
            <form onSubmit = {handleSubmit}>
                <label>Search Product: </label>
                <input name="search" id="search" type="text" value={productId} onChange={event => setProductId(event.target.value)}></input>             
                <button type="submit">Submit</button>
            </form>
            <hr/>
            {props.products.length && props.products.map(product => 
                 <ProductSummary key = {product.sfid} product = {product} />                               
                )               
            }
        </div>
    )
}

const mapStateToProps = (state) => {    
    return {products : state.productSearchReducer.products};
}

const mapDispatchToProps = (dispatch) => {
    return {
        doSearchProduct : (productId) => dispatch(searchProduct(productId))
    }
}

const Search = connect(
    mapStateToProps, mapDispatchToProps
)(SearchComponent);

export default Search