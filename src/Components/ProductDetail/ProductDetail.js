import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import {getProduct} from '../../actions';

const ProductDetailComponent = (props) => { 
  //  const {id} = props.location.state;

    useEffect(
        () => {
            props.doGetProduct("24006");
          }         
    );

    return(      
        <div>
            <p>Product Detail Page</p>
            <p> {props.product.sfid}</p>
            <p> {props.product.shortDesc}</p>
            <p> {props.product.SKU}</p>
        </div>
    )
}

const mapStateToProps = (state) => {    
    return {product : state.productDetailReducer.product};
}

const mapDispatchToProps = (dispatch) => {
    return {
        doGetProduct : (productId) => dispatch(getProduct(productId))
    }
}

const ProductDetail = connect(
    mapStateToProps, mapDispatchToProps
)(ProductDetailComponent);



export default ProductDetail;