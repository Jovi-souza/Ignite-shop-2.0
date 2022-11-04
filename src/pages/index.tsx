import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Camisa1 from '../assets/1.png'

export default function Home() {
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
      <div className="flex p-4 cursor-pointer relative items-center justify-center overflow-hidden bg-gradient-to-t from-bgGradient1 to-bgGradient2 group/hover keen-slider__slide">
        <Image src={Camisa1} alt="" className="object-cover" />
        <footer className="absolute bottom-1 left-1 right-0 p-8 rounded-lg flex items-center justify-between  bg-gray-800 translate-y-maxCover group-hover/hover:translate-y-0 ease-in-out duration-300">
          <div className="text-xl flex flex-col">
            <strong className="text-gray-100">Camiseta rocketseat</strong>
            <span className="font-bold text-greenLight">R$ 79.99</span>
          </div>
          <div className="p-2 bg-greenDark rounded-md">
            <Handbag size={20} weight={'bold'} className="text-gray-100" />
          </div>
        </footer>
      </div>
      <div className="flex p-4 cursor-pointer relative items-center justify-center overflow-hidden bg-gradient-to-t from-bgGradient1 to-bgGradient2 group/hover keen-slider__slide">
        <Image src={Camisa1} alt="" className="object-cover" />
        <footer className="absolute bottom-1 left-1 right-0 p-8 rounded-lg flex items-center justify-between  bg-gray-800 translate-y-maxCover group-hover/hover:translate-y-0 ease-in-out duration-300">
          <div className="text-xl flex flex-col">
            <strong className="text-gray-100">Camiseta rocketseat</strong>
            <span className="font-bold text-greenLight">R$ 79.99</span>
          </div>
          <div className="p-2 bg-greenDark rounded-md">
            <Handbag size={20} weight={'bold'} className="text-gray-100" />
          </div>
        </footer>
      </div>
      <div className="flex p-4 cursor-pointer relative items-center justify-center overflow-hidden bg-gradient-to-t from-bgGradient1 to-bgGradient2 group/hover keen-slider__slide">
        <Image src={Camisa1} alt="" className="object-cover" />
        <footer className="absolute bottom-1 left-1 right-0 p-8 rounded-lg flex items-center justify-between  bg-gray-800 translate-y-maxCover group-hover/hover:translate-y-0 ease-in-out duration-300">
          <div className="text-xl flex flex-col">
            <strong className="text-gray-100">Camiseta rocketseat</strong>
            <span className="font-bold text-greenLight">R$ 79.99</span>
          </div>
          <div className="p-2 bg-greenDark rounded-md">
            <Handbag size={20} weight={'bold'} className="text-gray-100" />
          </div>
        </footer>
      </div>
      <div className="flex p-4 cursor-pointer relative items-center justify-center overflow-hidden bg-gradient-to-t from-bgGradient1 to-bgGradient2 group/hover keen-slider__slide">
        <Image src={Camisa1} alt="" className="object-cover" />
        <footer className="absolute bottom-1 left-1 right-0 p-8 rounded-lg flex items-center justify-between  bg-gray-800 translate-y-maxCover group-hover/hover:translate-y-0 ease-in-out duration-300">
          <div className="text-xl flex flex-col">
            <strong className="text-gray-100">Camiseta rocketseat</strong>
            <span className="font-bold text-greenLight">R$ 79.99</span>
          </div>
          <div className="p-2 bg-greenDark rounded-md">
            <Handbag size={20} weight={'bold'} className="text-gray-100" />
          </div>
        </footer>
      </div>
    </div>
  )
}
