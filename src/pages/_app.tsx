import '../styles/globals.css'

import { Handbag } from 'phosphor-react'
import Logo from '../assets/Logo.svg'
import type { AppProps } from 'next/app'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-start justify-center">
      <header className="flex justify-between items-center w-full max-w-5xl mx-auto py-8">
        <Image src={Logo} width={100} alt="Logo" />
        <div className="bg-elements p-2 rounded-md">
          <Handbag size={24} weight="bold" className="text-icon" />
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  )
}
