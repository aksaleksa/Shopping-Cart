import { Link } from 'react-router-dom';
import styles from '../styles/ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className={styles.page}>
            <h1>Sorry, that page doesn't exist!</h1>
            <Link to='/'>Click here to return home.</Link>
        </div>
    )
}

export default ErrorPage;