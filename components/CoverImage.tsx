import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  image: string
  slug?: string
  width?: number
  height?: number
}

const DEFAULT_WIDTH = 2000
const DEFAULT_HEIGHT = 1000

export default function CoverImage ({ title, image, slug, width, height }: Props): JSX.Element {
  const imageComponent = (
    <Image
      width={width === undefined ? DEFAULT_WIDTH : width}
      height={height === undefined ? DEFAULT_HEIGHT : height}
      alt={title}
      src={image}
      //fill
    />
  )
  return (
    <div className='sm:mx-0'>
      {slug !== undefined
        ? (
          <Link href={`/projects/${slug}`} aria-label={title}>
            {imageComponent}
          </Link>
          )
        : (imageComponent)}
    </div>
  )
}
