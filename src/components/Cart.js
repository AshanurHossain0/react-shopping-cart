import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai';
import { ListGroup, Button, Row, Col, Form, Image } from 'react-bootstrap';
import './style.css'
import Rating from './Rating';

const Cart = () => {
  const { state: { cartItems }, dispatch } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, curr) => acc + Number(curr.price) * curr.quant, 0)
    );
  }, [cartItems]);

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            cartItems.map(product => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={2}>
                    <Image src={product.image} alt={product.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{product.name}</span>
                  </Col>
                  <Col md={2}>₹ {product.price}</Col>
                  <Col md={2}>
                    <Rating rating={product.rating} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={product.quant}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: product.id,
                          quant: e.target.value,
                        },
                      })
                    }
                    >
                      {[...Array(product.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal ({cartItems.length}) {cartItems.length > 1 ? "items" : "item"}</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart