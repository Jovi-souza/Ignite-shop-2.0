import '../styles/globals.css'

import { Handbag, X } from 'phosphor-react'
import Logo from '../assets/Logo.svg'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import camisa1 from '../assets/1.png'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-start justify-center relative">
      <header className="flex justify-between items-center w-full max-w-5xl mx-auto py-8">
        <Image src={Logo} width={120} alt="Logo" />
        <div className="bg-elements p-2 rounded-md">
          <Handbag size={24} weight="bold" className="text-icon" />
        </div>
      </header>
      <aside className="absolute top-0 right-0 bg-elements z-10 p-8 w-96 h-full flex flex-col gap-4">
        <X className="ml-auto cursor-pointer" size={20} />
        <h1 className="text-gray-100 mb-4 font-bold text-xl">
          Sacola de compras
        </h1>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="bg-gradient-to-t from-bgGradient1 to-bgGradient2 rounded-md">
              <Image src={camisa1} width={100} height={120} alt="" />
            </div>
            <div className="flex  flex-col gap-2">
              <span className="text-title">Camiseta Explorer</span>
              <strong className="text-lg">R$ 65,90</strong>
              <button className="flex justify-start text-greenLight">
                Remover
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="bg-gradient-to-t from-bgGradient1 to-bgGradient2 rounded-md">
              <Image src={camisa1} width={100} height={120} alt="" />
            </div>
            <div className="flex  flex-col gap-2">
              <span className="text-title">Camiseta Explorer</span>
              <strong className="text-lg">R$ 65,90</strong>
              <button className="flex justify-start text-greenLight">
                Remover
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="bg-gradient-to-t from-bgGradient1 to-bgGradient2 rounded-md">
              <Image src={camisa1} width={100} height={120} alt="" />
            </div>
            <div className="flex  flex-col gap-2">
              <span className="text-title">Camiseta Explorer</span>
              <strong className="text-lg">R$ 65,90</strong>
              <button className="flex justify-start text-greenLight">
                Remover
              </button>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <p className="flex justify-between">
            Quantidade <span>3 itens</span>
          </p>
          <p className="flex justify-between">
            Valor Total <strong> R$ 270,00</strong>
          </p>
          <button className="bg-greenDark w-full p-2 rounded-md">
            Finalizar compra
          </button>
        </div>
      </aside>
      <Component {...pageProps} />
    </div>
  )
}
