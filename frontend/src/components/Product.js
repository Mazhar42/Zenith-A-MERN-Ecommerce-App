import React from 'react'
import { Card } from 'react-bootstrap'
import products from '../products'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
    return (
        <Card className="m-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                
                <Link to={`/product/${product._id}`}>
                    <Card.Title>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                
                <Card.Text as='div'>
                    <div className="my-3">
                        {product.ratings} ratings from {product.numberOfReviews} reviews
                    </div>
                </Card.Text>

    <Card.Text as='h3'>${product.price}</Card.Text>
            

            </Card.Body>
        </Card>
    )
}

export default Product
