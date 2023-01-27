import React from 'react'
import {
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
  Tag,
  List,
  ListItem
} from '@chakra-ui/react'

export default function Bio() {
  return (
    <SimpleGrid row={4} textAlign="left" gap="5" py="5">
      <Text
        fontSize="xl"
        fontWeight="bold"
        my="4"
        textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
        className="section-title"
      >
        Bio
      </Text>
      <Flex gap="3">
        <Text fontWeight="semibold">2003</Text>
        <Text>Born in Montevideo, Uruguay.</Text>
      </Flex>
      <Flex gap="3">
        <Text fontWeight="semibold" whiteSpace="nowrap">
          2021
          <Tag
            mx="1"
            fontSize="sm"
            bg={useColorModeValue('#d0b8a8', null)}
            color={useColorModeValue('black', null)}
          >
            DEC - MAY
          </Tag>
        </Text>
        <Text>
          Learned basic concepts of html and css to understand web code
          structure and styling.
        </Text>
      </Flex>
      <Flex gap="3">
        <Text fontWeight="semibold" whiteSpace="nowrap">
          2022{' '}
          <Tag
            mx="1"
            fontSize="sm"
            bg={useColorModeValue('#d0b8a8', null)}
            color={useColorModeValue('black', null)}
          >
            MAY - OCT
          </Tag>
        </Text>
        <Text>
          Completed Web developer Php and Mysql bootcamp from Talleres de
          Informatica Uruguay.
        </Text>
      </Flex>
      <Flex gap="3">
        <Text fontWeight="semibold" whiteSpace="nowrap">
          2022
          <Tag
            mx="1"
            fontSize="sm"
            bg={useColorModeValue('#d0b8a8', null)}
            color={useColorModeValue('black', null)}
          >
            JUN - To present
          </Tag>
        </Text>
        <Text>
          Began studying from official documentation and others ways. Since then
          i've been making projects in order to improve my skills based on
          differents challenges.
        </Text>
      </Flex>
      <Text
        pt="4"
        fontSize="20"
        fontWeight="bold"
        textAlign="left"
        className="font-mplus section-title"
        textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
      >
        I am well-acquainted with
      </Text>
      <List textAlign="left" px="4">
        <ListItem display="flex" alignItems="center" gap="2">
          <Tag
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            w="max"
            h="max"
            size="sm"
            px="1"
            mt="1"
            rounded="sm"
            bg={useColorModeValue('#d0b8a8', '#ea047e50')}
            color={useColorModeValue('black', '#ea047e')}
          >
            Language
          </Tag>
          Php / javascript
        </ListItem>
        <ListItem display="flex" alignItems="center" gap="2">
          <Tag
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            w="max"
            h="max"
            size="sm"
            px="1"
            mt="1"
            rounded="sm"
            bg={useColorModeValue('#d0b8a8', '#ea047e50')}
            color={useColorModeValue('black', '#ea047e')}
          >
            framework
          </Tag>
          React / tailwindcss
        </ListItem>
        <ListItem display="flex" alignItems="center" gap="2">
          <Tag
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            w="max"
            h="max"
            size="sm"
            px="1"
            mt="1"
            rounded="sm"
            bg={useColorModeValue('#d0b8a8', '#ea047e50')}
            color={useColorModeValue('black', '#ea047e')}
          >
            other tecs
          </Tag>
          Html / Css / Git / Npm / Mysql
        </ListItem>
      </List>
      <Text
        alignItems="center"
        fontSize="2xl"
        fontWeight="bold"
        textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
        className="section-title"
      >
        I ♥
      </Text>
      <Text textIndent="1em">
        Music, Drawing, Photography, Chess, Movies, Sports, Minimalism.
      </Text>
    </SimpleGrid>
  )
}
