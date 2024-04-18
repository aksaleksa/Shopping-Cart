import Home from './components/Home'
import Store from './components/Store'
import Checkout from './components/Checkout'
import ErrorPage from './components/ErrorPage'

const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/store',
        element: <Store />
    },
    {
        path: '/checkout',
        element: <Checkout />
    }
]

export default routes;