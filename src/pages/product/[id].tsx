import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useContext } from 'react'
import Stripe from 'stripe'
import { ShoppingCartContext } from '../../context/products'
import { stripe } from '../../lib/stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItemInCart } = useContext(ShoppingCartContext)

  function handleAddItemInCart() {
    addItemInCart({
      id: product.id,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
    })
  }

  return (
    <div className="grid grid-cols-2 items-stretch gap-16 mx-auto max-w-5xl h-maxCover">
      <div className="w-full max-w-xl rounded-lg p-1 flex items-center justify-center bg-gradient-to-t from-bgGradient1 to-bgGradient2">
        <Image
          src={product.imageUrl}
          alt=""
          className="object-cover"
          width={390}
          height={350}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl text-text">{product.name}</h1>
        <span className="mt-4 block text-3xl text-greenLight">
          {product.price}
        </span>
        <p className="mt-10 text-base leading-relaxed text-text">
          {product.description}
        </p>
        <button
          className="mt-auto bg-greenDark border-0 text-title cursor-pointer rounded-lg font-bold text-sm p-4 disabled:opacity-5 disabled:cursor-not-allowed [&:not(:disabled)]:hover:bg-greenLight"
          onClick={handleAddItemInCart}
        >
          Colocar na sacola
        </button>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Mioed7apxzK7J1' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id

  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
