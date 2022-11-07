import '../styles/globals.css'
import Logo from '../assets/Logo.svg'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { ProductsContext } from '../context/products'
import { Cart } from '../components/cart'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsContext>
      <div className="flex flex-col items-start justify-center relative h-screen overflow-hidden">
        <header className="flex justify-between items-center w-full max-w-5xl mx-auto py-8">
          <Image src={Logo} width={120} alt="Logo" />
          <Cart />
        </header>
        <Component {...pageProps} />
      </div>
    </ProductsContext>
  )
}
