import '../styles/globals.css'

import { Handbag, X } from 'phosphor-react'
import Logo from '../assets/Logo.svg'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import camisa1 from '../assets/1.png'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState('translate-x-maxCover')

  const handleToggleMenu = () => {
    setToggle(
      toggle === 'translate-x-maxCover'
        ? 'translate-x-0'
        : 'translate-x-maxCover',
    )
  }

  return (
    <div className="flex flex-col items-start justify-center relative h-screen overflow-hidden">
      <header className="flex justify-between items-center w-full max-w-5xl mx-auto py-8">
        <Image src={Logo} width={120} alt="Logo" />
        <div
          className="bg-elements p-2 rounded-md cursor-pointer hover:bg-gray-600"
          onClick={handleToggleMenu}
        >
          <Handbag size={24} weight="bold" className="text-icon" />
        </div>
      </header>
      <aside
        className={`${toggle} flex absolute top-0 right-0 bg-elements z-10 p-8 w-96 h-screen flex-col gap-4 duration-300`}
      >
        <X
          className="ml-auto cursor-pointer"
          size={20}
          onClick={handleToggleMenu}
        />
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
