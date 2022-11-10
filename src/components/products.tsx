import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/products'

interface ProductsProps {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

export function Products({
  id,
  imageUrl,
  name,
  price,
  defaultPriceId,
}: ProductsProps) {
  const { addItemToCart } = useContext(ShoppingCartContext)

  function handleAddItemInCart() {
    addItemToCart({
      id,
      imageUrl,
      name,
      price,
      defaultPriceId,
    })
  }

  return (
    <div className="flex flex-col p-2 h-maxCover cursor-pointer relative items-center justify-center overflow-hidden bg-gradient-to-t from-bgGradient1 to-bgGradient2 group/hover rounded-md keen-slider__slide">
      <Link href={`/product/${id}`}>
        <Image
          src={imageUrl}
          alt=""
          className="object-cover"
          width={520}
          height={480}
        />
      </Link>
      <footer className="absolute bottom-1 left-1 right-1 p-4 rounded-lg flex items-center justify-between  bg-gray-800 translate-y-maxCover group-hover/hover:translate-y-0 ease-in-out duration-300">
        <div className="text-lg flex flex-col">
          <strong className="text-gray-100">{name}</strong>
          <span className="font-bold text-greenLight">{price}</span>
        </div>
        <div
          className="p-2 bg-greenDark rounded-md"
          onClick={handleAddItemInCart}
        >
          <Handbag size={20} weight={'bold'} className="text-gray-100" />
        </div>
      </footer>
    </div>
  )
}
