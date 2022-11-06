import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import Link from 'next/link'

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
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="flex flex-col p-6 h-maxCover cursor-pointer relative items-center justify-center overflow-hidden bg-gradient-to-t from-bgGradient1 to-bgGradient2 group/hover rounded-md keen-slider__slide">
              <Image
                src={product.imageUrl}
                alt=""
                className="object-cover"
                width={520}
                height={480}
              />
              <footer className="absolute bottom-1 left-1 right-1 p-4 rounded-lg flex items-center justify-between  bg-gray-800 translate-y-maxCover group-hover/hover:translate-y-0 ease-in-out duration-300">
                <div className="text-xl flex flex-col">
                  <strong className="text-gray-100">{product.name}</strong>
                  <span className="font-bold text-greenLight">
                    {product.price}
                  </span>
                </div>
                <div className="p-2 bg-greenDark rounded-md">
                  <Handbag
                    size={20}
                    weight={'bold'}
                    className="text-gray-100"
                  />
                </div>
              </footer>
            </div>
          </Link>
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
