import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from '@/utils/imageByIndex'
import Image from 'next/image'

interface PropType {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className='pb-6'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex flex-row h-auto -ml-4'>
          {slides.map((index) => (
            <div className='grow-0 shrink-0 basis-full min-w-0 pl-4 relative' key={index}>
              <img
                className='block h-80 w-full object-cover'
                src={imageByIndex(index)}
                alt='Your alt text'
              />
              {/* <Image 
                 className='block h-80 w-full object-cover'
                 src={imageByIndex(index)}
                 alt='Your alt text'
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
