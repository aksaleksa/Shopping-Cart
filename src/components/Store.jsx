import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './Navigation'
import StoreCard from './StoreCard'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Store.module.css'

// If the user's computer has interacted with the app before, we retrieve the basket, items
// and total from localStorage. Otherwise we set them to 0/empty.
const Store = () => {
    const [basket, setBasket] = useState(() => {
        return JSON.parse(window.localStorage.getItem("basket")) || [];
    });
    const [items, setItems] = useState(() => {
        return JSON.parse(window.localStorage.getItem("items")) || 0;
    });
    const [total, setTotal] = useState(() => {
        return JSON.parse(window.localStorage.getItem("total")) || 0;
    });

    // When the user clicks "remove", the react component's title is compared to all of those
    // in the basket. When the correct product is found, the basket is rebuilt without it.
    // We update the state of basket and revise the count and cost values as well.
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

    return (
        <>
            <Navigation />
            <h1 className={styles.heading}>Our Product Selection</h1>
            <div className={styles.page}>
                <div className={styles.grid}>                    
                    <StoreCard index={1} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                    <StoreCard index={2} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                    <StoreCard index={5} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                    <StoreCard index={6} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                    <StoreCard index={7} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                    <StoreCard index={8} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                    <StoreCard index={9} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                    <StoreCard index={10} basket={basket} setBasket={setBasket} items={items} setItems={setItems} total={total} setTotal={setTotal}/>
                </div>
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
                    <Button variant="primary" className={styles.checkoutButton}><Link to="/checkout">Checkout</Link></Button>
                </div>
            </div>
        </>
    )
}

export default Store;