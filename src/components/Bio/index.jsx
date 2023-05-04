import React from 'react'
import {
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
  List,
  ListItem,
  Heading,
  Badge
} from '@chakra-ui/react'
import Section from '../Section'

export default function Bio() {
  return (
    <Section delay={0.4}>
      <SimpleGrid textAlign="left" gap="5" py="6">
        <Heading
          fontSize="xl"
          fontWeight="bold"
          my="2"
          textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
          className="section-title"
        >
          Bio
        </Heading>
        <Flex gap="3">
          <Text fontWeight="bold">2003</Text>
          <Text>Born in Montevideo, Uruguay.</Text>
        </Flex>
        <Flex gap="3" flexDir={{ base: 'column', md: 'row' }}>
          <Text fontWeight="bold" whiteSpace="nowrap">
            2021 DEC
          </Text>
          <Text>
            Learned basic concepts of html and css to understand web code
            structure and styling.
          </Text>
        </Flex>
        <Flex gap="3" flexDir={{ base: 'column', md: 'row' }}>
          <Text fontWeight="bold" whiteSpace="nowrap">
            2022 MAY - OCT
          </Text>
          <Text>
            Completed Web developer Php and Mysql bootcamp from Talleres de
            Informatica Uruguay.
          </Text>
        </Flex>
        <Flex gap="3" flexDir={{ base: 'column', md: 'row' }}>
          <Text fontWeight="bold" whiteSpace="nowrap">
            2022 To present
          </Text>
          <Text>
            Began studying from official documentation and other sources. Since
            then, he has been making projects in order to improve his skills
            based on different challenges.
          </Text>
        </Flex>
        <Heading
          py="2"
          fontSize="xl"
          fontWeight="bold"
          textAlign="left"
          className="font-mplus section-title"
          textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
        >
          I am well-acquainted with
        </Heading>
        <List textAlign="left" px="4">
          <ListItem display="flex" alignItems="center" gap="2">
            <Badge>Language</Badge>
            Php / javascript
          </ListItem>
          <ListItem display="flex" alignItems="center" gap="2">
            <Badge>framework</Badge>
            React / tailwindcss
          </ListItem>
          <ListItem display="flex" alignItems="center" gap="2">
            <Badge>other tecs</Badge>
            Html / Css / Git / Npm / Mysql
          </ListItem>
        </List>
        <Heading
          display="inline-flex"
          alignItems="center"
          gap="1"
          py="2"
          fontSize="2xl"
          fontWeight="bold"
          textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
          className="section-title"
        >
          I ♥
        </Heading>
        <Text textIndent="1em">
          Music, Drawing, Photography, Chess, Movies, Sports, Minimalism.
        </Text>
      </SimpleGrid>
    </Section>
  )
}
