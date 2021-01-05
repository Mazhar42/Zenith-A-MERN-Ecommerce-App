import React, {useState, useEffect} from 'react'
import {Row, Col, Image,ListGroup, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductScreen = ({ match }) => {
    const [product, setproduct] = useState({})

  useEffect(()=>{
    const fetchProduct = async () =>{
        const {data} = await axios.get(`/api/products/${match.params.id}`)
        setproduct(data)
    }

    fetchProduct()
  },[match])
    
 
    return (
        <>
            <Link className="btn btn-dark my-5" to="/">
                Go Back
            </Link>
            <Row>
                <Col md={4}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{product.ratings} ratings || {product.numberOfReviews} reviews</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>{product.description}</h6>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price : </Col>
                                <Col>${product.price}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status : </Col>
                                <Col>{product.countInStock>0 ? 'In Stock' : 'Out Of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                className="btn-block"
                                type="button"
                                disabled={product.countInStock === 0}
                            >
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
