import { createContext, ReactNode, useState } from 'react'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ProductsCartProps {
  shoppingCart: Product[]
  addItemToCart: (data: Product) => void
  RemoveItemFromCart: (id: string) => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ProductsCartProps)

export function ProductsContext({ children }: ChildrenProps) {
  const [shoppingCart, setShoppingCart] = useState<Product[]>([])

  function addItemToCart(data: Product) {
    const havethisItemInCart = shoppingCart.find((item) => item.id === data.id)

    if (havethisItemInCart) {
      alert('Este item já existe em seu carrinho')
    }

    if (!havethisItemInCart) {
      setShoppingCart((state) => [...state, data])
    }
  }

  function RemoveItemFromCart(id: string) {
    const itemToRemove = shoppingCart.filter((item) => item.id !== id)
    setShoppingCart(itemToRemove)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addItemToCart,
        RemoveItemFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
