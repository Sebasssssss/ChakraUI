import React from 'react'
import { Link, Text, Image, useColorModeValue, Box } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import VercelIcon from '../icons/vercel'

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

export function VercelCard() {
  return (
    <Link
      textDecorationLine="none"
      as={ReactLink}
      to="/work/vercelmirror"
      _hover={{ textDecorationLine: 'none' }}
    >
      <Box
        w="230px"
        h="120px"
        rounded="xl"
        bg="black"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VercelIcon />
      </Box>
      <Text fontSize="md" mt="2" fontWeight="semibold">
        Vercel mirror
      </Text>
      <Text fontSize="sm" opacity={0.7}>
        Vercel Mirrro
      </Text>
    </Link>
  )
}
