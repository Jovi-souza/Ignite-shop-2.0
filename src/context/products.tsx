import { createContext, ReactNode, useState } from 'react'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ProductsCartProps {
  shoppingCart: Product[]
  addItemInCart: (data: Product) => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ProductsCartProps)

export function ProductsContext({ children }: ChildrenProps) {
  const [shoppingCart, setShoppingCart] = useState<Product[]>([])

  function addItemInCart(data: Product) {
    const newRequest = {
      id: data.id,
      imageUrl: data.imageUrl,
      name: data.name,
      price: data.price,
    }

    setShoppingCart((state) => [...state, newRequest])
    console.log('data', data)
  }

  console.log('cart', shoppingCart)

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, addItemInCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
