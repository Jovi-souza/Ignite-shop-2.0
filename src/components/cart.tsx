import Image from 'next/image'
import { useContext, useState } from 'react'

import { Handbag, X } from 'phosphor-react'
import { ShoppingCartContext } from '../context/products'

export function Cart() {
  const [toggle, setToggle] = useState('translate-x-maxCover')
  const { shoppingCart } = useContext(ShoppingCartContext)
  console.log('teste', shoppingCart)

  const handleToggleMenu = () => {
    setToggle(
      toggle === 'translate-x-maxCover'
        ? 'translate-x-0'
        : 'translate-x-maxCover',
    )
  }

  return (
    <div className="bg-elements p-2 rounded-md hover:bg-gray-600">
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
        {shoppingCart.map((item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <div className="flex gap-4">
                <div className="bg-gradient-to-t from-bgGradient1 to-bgGradient2 rounded-md h-max">
                  <Image src={item.imageUrl} width={100} height={120} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-title">{item.name}</span>
                  <strong className="text-lg">{item.price}</strong>
                  <button className="flex justify-start text-greenLight">
                    Remover
                  </button>
                </div>
              </div>
            </div>
          )
        })}
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
      <Handbag
        size={24}
        weight="bold"
        className="text-icon cursor-pointer"
        onClick={handleToggleMenu}
      />
    </div>
  )
}
