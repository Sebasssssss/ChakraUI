import React from 'react'
import { SimpleGrid, Text, Flex, useColorModeValue } from '@chakra-ui/react'

export default function Bio() {
  return (
    <SimpleGrid row={4} textAlign="left" gap="5" py="5">
      <Text
        fontSize="xl"
        fontWeight="bold"
        my="4"
        textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
        className="underline underline-offset-4 decoration-4"
      >
        Bio
      </Text>
      <Flex gap="3">
        <Text fontWeight="bold">2003</Text>
        <Text>Born in Montenvideo, Uruguay.</Text>
      </Flex>
      <Flex gap="3">
        <Text fontWeight="bold">2020</Text>
        <Text>Studied some basic programming concepts off school</Text>
      </Flex>
      <Flex gap="3">
        <Text fontWeight="bold">2022</Text>
        <Text>
          Completed full bootcamp course with qualification of php and mysql of
          Talleres de informatica Uruguay.
        </Text>
      </Flex>
      <Text
        alignItems="center"
        fontSize="2xl"
        fontWeight="bold"
        textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
        className="underline underline-offset-4 decoration-4"
      >
        I ♥
      </Text>
      <Text textIndent="1em">
        Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning
      </Text>
    </SimpleGrid>
  )
}
