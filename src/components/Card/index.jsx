import { Link, Text, Image } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

export default function Card({
  id,
  title = 'Example',
  thumbnail,
  subtitle = 'Card'
}) {
  return (
    <Link textDecorationLine="none" as={ReactLink} to={`/work/${id}`}>
      <Image
        src={thumbnail}
        alt={title}
        w="full"
        rounded="xl"
        h="36"
        objectFit="cover"
      />
      <Text fontSize="md" mt="2" fontWeight="bold" className="font-mplus">
        {title}
      </Text>
      <Text fontSize="sm" opacity={0.7}>
        {subtitle}
      </Text>
    </Link>
  )
}
