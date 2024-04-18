import { Link } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={`navbar sticky-top navbar-expand-lg bg-body-tertiary ${styles.navbar}`}>
            <Container className="container-fluid">
                <Link className={`navbar-brand ${styles.brand}`} to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    Amazing Appliances 
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={`collapse navbar-collapse ${styles.navbarDiv}`} id="responsive-navbar-nav">
                    <Nav className="navbar-nav">
                        <Link className={`nav-link ${styles.link}`} aria-current="page" to="/">Home</Link>
                        <Link className={`nav-link ${styles.link}`} to="/store">Store</Link>
                        <Link className={`nav-link ${styles.link}`} to="/checkout">Checkout</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;