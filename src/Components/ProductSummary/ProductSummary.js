import React from 'react'
import { Link} from 'react-router-dom'


const ProductSummary = ({product}) => {
    return(
        <div>
            <p> {product.sfid}</p>
            <p> {product.shortDesc}</p>
            <p> {product.SKU}</p>
            <Link to={{
                    pathName : "/productDetails",
                    state: {
                        id: "24006"
                    }
                }}>
                View Product Details
            </Link> 
            <hr/>
        </div>
    )
}

export default ProductSummary;