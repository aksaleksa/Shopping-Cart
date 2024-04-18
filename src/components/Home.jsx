import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import image1 from '../pictures/carousel1.jpg'
import image2 from '../pictures/carousel2.jpg'
import image3 from '../pictures/carousel3.jpg'
import image4 from '../pictures/carousel4.jpg'
import image5 from '../pictures/carousel5.jpg'
import image6 from '../pictures/home1.jpg'
import image7 from '../pictures/home2.jpg'
import image8 from '../pictures/home3.jpg'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <>
            <Navigation />
            <div className={styles.topSection}>
                <h1 className={styles.mainHeading}>Start Shopping Now</h1>
                <Button variant="outline-primary" className={styles.storeLink}><Link to='/store'>Let's Go</Link></Button>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img src={image1} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={image2} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={image3} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={image4} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={image5} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <h2 className={styles.secondHeading}>Our Brand Values</h2>
            <div className={styles.cards}>
                <Card className={styles.card}>
                    <Card.Img variant="top" src={image6}></Card.Img>
                    <Card.Body>
                        <Card.Title className={styles.cardHeading}>High-Quality Materials</Card.Title>
                        <Card.Text>
                            We don't sacrifice quality for quantity. We responsibly source the best materials and test them thoroughly before use in our products.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.card}>
                    <Card.Img variant="top" src={image7}></Card.Img>
                    <Card.Body>
                        <Card.Title className={styles.cardHeading}>Expert Design</Card.Title>
                        <Card.Text>
                            Science and engineering are not everything. Our talented designers ensure that our gadgets look and feel great in your hands.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.card}>
                    <Card.Img variant="top" src={image8}></Card.Img>
                    <Card.Body>
                        <Card.Title className={styles.cardHeading}>A Strong Community</Card.Title>
                        <Card.Text>
                            Our team has diverse interests and skills. That's why we achieve such great results and are loved by so many customers.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className={styles.contact}>
                <p>Have Your Say</p>
                <p>Our company values its loyal customers and would be nothing without them. If there's something we can improve or you have
                    any comments and suggestions, let us know.
                </p>
                <p><b>Telephone</b>: 0123456789</p>
                <p><b>Email</b>: example@email.com</p>
            </div>
        </>
    )
}

export default Home;