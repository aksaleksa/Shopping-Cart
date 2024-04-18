import { useState, useEffect } from 'react';
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Checkout.module.css'

const Checkout = () => {
    // Like on the store page, we get the basket, items and total from localStorage (if
    // they exist). If these update, then the localStorage values will too.
    const [basket, setBasket] = useState(() => {
        return JSON.parse(window.localStorage.getItem("basket")) || [];
    });
    const [items, setItems] = useState(() => {
        return JSON.parse(window.localStorage.getItem("items")) || 0;
    });
    const [total, setTotal] = useState(() => {
        return JSON.parse(window.localStorage.getItem("total")) || 0;
    });

    useEffect(() => {
        window.localStorage.setItem('basket', JSON.stringify(basket));
        window.localStorage.setItem('items', JSON.stringify(items));
        window.localStorage.setItem('total', JSON.stringify(total));
    }, [basket, items, total]);

    // Exactly the same logic as on the store page.
    const handleDelete = (item) => {
        for (let product of basket) {
            if (product.title === item) {
                let newBasket = basket;
                newBasket.splice(basket.indexOf(product), 1);
                setBasket(newBasket);
                let count = 0;
                let cost = 0;
                for (let product of basket) {
                    count += product.quantity;
                    cost += (product.price * product.quantity);

                }
                setItems(count);
                setTotal(cost);
            }
        }
    }

    // Stop the page from refreshing upon submission. Give the user a purchase confirmation
    // if they complete the form correctly.
    const handlePayment = (e) => {
        e.preventDefault();
        alert("Thank you for your purchase. You will receive a confirmation email shortly.");
    }

    return (
        <div>
            <Navigation />
            <div className={styles.page}>
                <div className={styles.basket}>
                    <h2>Your Basket</h2>
                    <ul>
                        {basket.map(item => {
                            return <li key={item.title}>{item.title} ({item.quantity})<Button variant="danger" onClick={() => handleDelete(item.title)}>Remove</Button></li>
                        })}
                    </ul>
                    <div>
                        <p><b>Items</b>: {items}</p>
                        <p><b>Total Cost</b>: ${total}</p>
                    </div>
                </div>
                <Form onSubmit={handlePayment}>
                    <Container>
                        <h1 className={styles.mainHeading}>Confirm Your Details</h1>
                        <Row>
                            <Col lg={6} sm={12}>
                                <Form.Group className="mb-3" controlId="first-name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" required></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={6} sm={12}>
                                <Form.Group className="mb-3" controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" required></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} sm={12}>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" required></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={6} sm={12}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" required></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>                            
                            <Col lg={5} sm={12}>
                                <Form.Group className="mb-3" controlId="card-number">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={6}>
                                <Form.Group className="mb-3" controlId="cvc">
                                    <Form.Label>CVC</Form.Label>
                                    <Form.Control type="number" required></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3} sm={6}>
                                <Form.Group className="mb-3" controlId="expires">
                                    <Form.Label>Expires</Form.Label>
                                    <Form.Control type="date" required></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div>
                            <Button variant="primary" type="submit">Pay</Button>
                        </div>
                    </Container>
                </Form>
            </div>
        </div>
    )
}

export default Checkout