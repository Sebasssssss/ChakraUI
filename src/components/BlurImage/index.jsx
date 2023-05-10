import React, { useState, useEffect } from 'react'
import ZoomIn from '../ZoomIn'
import { Image as Img } from '@chakra-ui/react'
import { Blurhash } from 'react-blurhash'

export default function DetailImage({ hash, src, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  useEffect(() => {
    const myImage = new Image()
    myImage.onload = () => {
      setImageLoaded(true)
    }

    myImage.src = src
  }, [src])

  return !imageLoaded ? (
    <Blurhash
      hash={hash}
      width={485}
      height={273}
      resolutionX={32}
      resolutionY={32}
      punch={1}
    />
  ) : (
    <ZoomIn>
      <Img src={src} alt={alt} w="full" rounded="xl" objectFit="cover" />
    </ZoomIn>
  )
}
