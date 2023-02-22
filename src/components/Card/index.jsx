import React from 'react'
import { Link, Text, Image } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

export function Card({ id, title = 'Example', thumbnail, subtitle = 'Card' }) {
  return (
    <Link
      textDecorationLine="none"
      as={ReactLink}
      to={`/work/${id}`}
      _hover={{ textDecorationLine: 'none' }}
    >
      <Image
        src={thumbnail}
        alt={title}
        w="full"
        rounded="xl"
        objectFit="cover"
      />
      <Text fontSize="md" mt="2" fontWeight="semibold">
        {title}
      </Text>
      <Text fontSize="sm" opacity={0.7}>
        {subtitle}
      </Text>
    </Link>
  )
}
