import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Cart = ({ show, handleClose, cartItems, handleIncrease, handleDecrease, handleCheckout }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul className="list-group">
                        {cartItems.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="ml-3">
                                        <h5 className="mb-1">{item.name}</h5>
                                        <p className="mb-1">{item.price} x {item.quantity}</p>
                                        <p className="mb-1"><strong>Total: </strong>{item.price * item.quantity}</p>
                                    </div>
                                </div>
                                <div className="btn-group" role="group" aria-label="Quantity controls">
                                    <Button variant="secondary" onClick={() => handleDecrease(index)}>-</Button>
                                    <Button variant="secondary" disabled>{item.quantity}</Button>
                                    <Button variant="secondary" onClick={() => handleIncrease(index)}>+</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCheckout}>
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Cart;
