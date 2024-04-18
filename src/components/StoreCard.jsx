import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from '../styles/StoreCard.module.css'

const StoreCard = (props) => {
    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState(null);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

    // Fetch the product and relevant information from the API
    useEffect(() => {
        fetch('https://dummyjson.com/products/' + props.index)
        .then(res => res.json())
        .then(res => {
            setTitle(res.title);
            setImageURL(res.thumbnail);
            setDescription(res.description);
            setPrice(res.price);
        })
        .finally(() => setLoading(false))
    }, [])

    // If the basket, items or total values change, update the localStorage to reflect this.
    // These changes will be seen on the checkout page too.
    useEffect(() => {
        window.localStorage.setItem('basket', JSON.stringify(props.basket));
        window.localStorage.setItem('items', JSON.stringify(props.items));
        window.localStorage.setItem('total', JSON.stringify(props.total));
      }, [props.basket, props.items, props.total]);

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    }

    // If the product is already in the basket, increase its quantity. Otherwise add a new
    // product to the basket.
    const addToBasket = () => {
        const newBasket = props.basket;
        for (let product of newBasket) {
            if (product.title === title) {
                product.quantity += quantity;
                props.setBasket(newBasket);
                return
            }
        }
        newBasket.push({
            title: title,
            price: price,
            quantity: quantity
        })
        props.setBasket(newBasket);
    }

    const sumItems = () => {
        let count = 0;
        for (let product of props.basket) {
            count += product.quantity;
        }
        props.setItems(count);
    }

    const findTotal = () => {
        let cost = 0;
        for (let product of props.basket) {
            cost += (product.quantity * product.price);
        }
        props.setTotal(cost);
    }

    const handleClick = () => {
        addToBasket();
        sumItems();
        findTotal();
    }

    return (
        // Until the product card fully renders, a simple loading screen shows instead.
        loading ? <p>Loading...</p> :
        <Card>
            <Card.Img variant="top" src={imageURL} className={`card-img-top ${styles.thumbnail}`} />
            <Card.Body className={styles.information}>
                <Card.Title className={styles.heading}>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <div className={styles.options}>
                    <Button variant="primary" className={styles.buy} onClick={handleClick}>Add To Basket</Button>
                    <input className={styles.quantity} type="number" min="1" max="10" value={quantity} onChange={handleQuantityChange}></input>
                </div>
            </Card.Body>
      </Card>
    )
}

export default StoreCard;