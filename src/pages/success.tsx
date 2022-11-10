import Image from 'next/image'
import Link from 'next/link'
import camisa from '../assets/1.png'

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-4/5">
      <div className="flex justify-center items-center mb-16">
        <div className="w-max h-max rounded-full p-1 mt-8 -ml-12 -mr-12 flex items-center justify-center bg-gradient-to-t from-bgGradient1 to-bgGradient2">
          <Image src={camisa} width={100} alt="" className="object-cover" />
        </div>
        <div className="w-max h-max rounded-full p-1 mt-8 -mr-12 flex items-center justify-center bg-gradient-to-t from-bgGradient1 to-bgGradient2">
          <Image src={camisa} width={100} alt="" className="object-cover" />
        </div>
        <div className="w-max h-max rounded-full p-1 mt-8 -mr-12 flex items-center justify-center bg-gradient-to-t from-bgGradient1 to-bgGradient2">
          <Image src={camisa} width={100} alt="" className="object-cover" />
        </div>
        <div className="w-max h-max rounded-full p-1 mt-8 -mr-12 flex items-center justify-center bg-gradient-to-t from-bgGradient1 to-bgGradient2">
          <Image src={camisa} width={100} alt="" className="object-cover" />
        </div>
      </div>
      <h1 className="text-xl text-title">Compra efetuada!</h1>
      <p className="text-lg text-text max-w-xl text-center mt-8 leading-normal">
        Uhuul <strong>Diego Fernandes</strong>, sua compra de 3 camisetas já
        está a caminho da sua casa.
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
