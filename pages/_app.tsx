import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShoppingProvider } from '../store/shoppingContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingProvider>
      <Component {...pageProps} />
    </ShoppingProvider>
  )
}

export default MyApp
