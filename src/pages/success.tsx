import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

interface SuccessProps {
  name: string
  items: string[]
  images: string[]
}

export default function Success({ name, items, images }: SuccessProps) {
  console.log(images)

  return (
    <div className="flex flex-col items-center justify-center mx-auto h-4/5">
      <div className="flex justify-center items-center mb-16">
        {images.map((item) => {
          return (
            <div
              key={item}
              className="w-max h-max rounded-full p-1 mt-8 -ml-6 -mr-8 flex items-center justify-center bg-gradient-to-t from-bgGradient1 to-bgGradient2"
            >
              <Image
                src={item}
                width={130}
                height={130}
                alt="shirt"
                className="object-cover"
              />
            </div>
          )
        })}
      </div>
      <h1 className="text-xl text-title">Compra efetuada!</h1>
      <p className="text-lg text-text max-w-xl text-center mt-8 leading-normal">
        Uhuul!!! <strong>{name}</strong>, sua compra de {items.length} camisetas
        já está a caminho da sua casa.
      </p>
      <Link
        href="/"
        className="block text-greenDark text-base mt-10 no-underline font-bold hover:text-greenLight"
      >
        Voltar ao catálogo
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })
  const clientName = session.customer_details?.name

  const listOfItems = session.line_items?.data
  const productsData = listOfItems?.map((item) => {
    return item.price?.product as Stripe.Product
  })

  const imagesUrls = productsData?.map((image) => {
    return image.images[0]
  })

  return {
    props: {
      name: clientName,
      items: listOfItems,
      images: imagesUrls,
    },
  }
}
