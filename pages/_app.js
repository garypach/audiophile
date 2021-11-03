import { CartProvider } from '../components/CartProvider/cartprovider'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
    <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
