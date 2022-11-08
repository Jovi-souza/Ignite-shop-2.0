import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { Products } from '../components/products'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.4,
      spacing: 48,
    },
  })

  return (
    <div
      ref={sliderRef}
      className="flex w-full max-w-[calc(100vw-((100vw-1024px)/2))] ml-auto overflow-hidden"
    >
      {products.map((product) => {
        return (
          <Products
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        )
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hrs
  }
}
