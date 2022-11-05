import Image from 'next/image'
import Camisa from '../../assets/1.png'
export default function Product() {
  return (
    <div className="grid grid-cols-2 items-stretch gap-16 mx-auto max-w-5xl">
      <div className="w-full max-w-xl rounded-lg p-1 flex items-center justify-center bg-gradient-to-t from-bgGradient1 to-bgGradient2">
        <Image src={Camisa} alt="" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl text-text">Camisa ignite</h1>
        <span className="mt-4 block text-3xl text-greenLight">R$ 79,90</span>
        <p className="mt-10 text-base leading-relaxed text-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          obcaecati ratione rerum illo facilis, minima voluptatem nulla,
          explicabo sunt voluptate voluptates
        </p>
        <button className="mt-auto bg-greenDark border-0 text-title cursor-pointer rounded-lg font-bold text-sm p-4 disabled:opacity-5 disabled:cursor-not-allowed [&:not(:disabled)]:hover:bg-greenLight">
          Comprar agora
        </button>
      </div>
    </div>
  )
}
