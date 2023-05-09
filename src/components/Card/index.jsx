import React, { useState, useEffect } from 'react'
import { Link, Text, Image as Img } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { Blurhash } from 'react-blurhash'

export function Card({
  id,
  title = 'Example',
  thumbnail,
  subtitle = 'Card',
  hash
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const myImage = new Image()
    myImage.onload = () => {
      setImageLoaded(true)
    }

    myImage.src = thumbnail
  }, [thumbnail])

  return (
    <Link
      textDecorationLine="none"
      as={ReactLink}
      to={`/work/${id}`}
      _hover={{ textDecorationLine: 'none' }}
    >
      {!imageLoaded ? (
        <Blurhash
          hash={hash}
          width={230}
          height={130}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ) : (
        <Img
          src={thumbnail}
          alt={title}
          w="full"
          rounded="xl"
          objectFit="cover"
        />
      )}

      <Text fontSize="md" mt="2" fontWeight="semibold">
        {title}
      </Text>
      <Text fontSize="sm" opacity={0.7}>
        {subtitle}
      </Text>
    </Link>
  )
}
