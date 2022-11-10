import Image from 'next/image'
import { useContext, useState } from 'react'
import axios from 'axios'

import { Handbag, X } from 'phosphor-react'
import { ShoppingCartContext } from '../context/products'

export function Cart() {
  const [toggle, setToggle] = useState('translate-x-maxCover')
  const { shoppingCart, RemoveItemFromCart } = useContext(ShoppingCartContext)

  const handleToggleMenu = () => {
    setToggle(
      toggle === 'translate-x-maxCover'
        ? 'translate-x-0'
        : 'translate-x-maxCover',
    )
  }

  const handleRemoveItemFromCart = (event: any) => {
    RemoveItemFromCart(event.target.id)
  }

  async function handleBuyProducts() {
    try {
      const response = await axios.post('/api/checkout', {
        priceIds: shoppingCart.map((item) => {
          return item.defaultPriceId
        }),
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      alert('Falha ao redirecionar ao checkout')
    }
  }

  const converter = shoppingCart.map((value) => {
    return parseFloat(value.price.replace('R$', ''))
  })

  const TotalValue = converter.reduce((pv, cv) => {
    return pv + cv
  }, 0)

  const itemsinCart = shoppingCart.length
  const isDisable = itemsinCart === 0

  return (
    <div>
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
                <div className="flex flex-col gap-2 overflow-hidden">
                  <span className="text-title overflow-hidden w-max">
                    {item.name}
                  </span>
                  <strong className="text-lg">{item.price}</strong>
                  <button
                    className="flex justify-start text-greenLight"
                    onClick={handleRemoveItemFromCart}
                    id={item.id}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        <div className="flex flex-col gap-2 mt-auto">
          <p className="flex justify-between">
            Quantidade <span>{itemsinCart} itens</span>
          </p>
          <p className="flex justify-between">
            Valor Total <strong>{TotalValue}</strong>
          </p>
          <button
            className={`${
              itemsinCart ? 'cursor-pointer' : 'cursor-not-allowed'
            } bg-greenDark w-full p-2 rounded-md disabled:opacity-60`}
            onClick={handleBuyProducts}
            disabled={isDisable}
          >
            Finalizar compra
          </button>
        </div>
      </aside>
      <div
        className="relative p-2 bg-elements rounded-md hover:bg-gray-600 cursor-pointer"
        onClick={handleToggleMenu}
      >
        <Handbag size={24} weight="bold" className="text-icon" />
        <span
          className={`${
            !itemsinCart ? 'hidden' : 'flex'
          } absolute -top-7 -right-5 bg-greenLight px-2 py-1 h-max rounded-full text-cartItem border-4 border-backgroud`}
        >
          {itemsinCart}
        </span>
      </div>
    </div>
  )
}
