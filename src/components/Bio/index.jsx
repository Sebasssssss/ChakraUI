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
        pt="4"
        fontSize="20"
        fontWeight="bold"
        textAlign="left"
        className="font-mplus section-title"
        textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
        textColor={useColorModeValue('#85586f', '#ffecef')}
      >
        I am well-acquainted with
      </Text>
      <List textAlign="left">
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
            bg={useColorModeValue('#ccc', '#ea047e50')}
            color={useColorModeValue('#ccc', '#ea047e')}
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
            bg={useColorModeValue('#ccc', '#ea047e50')}
            color={useColorModeValue('#ccc', '#ea047e')}
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
            bg={useColorModeValue('#ccc', '#ea047e50')}
            color={useColorModeValue('#ccc', '#ea047e')}
          >
            other tecs
          </Tag>
          Git / Mysql
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
        Music, Drawing, Photography, Chess, Movies, Sports, Machine Learning
      </Text>
    </SimpleGrid>
  )
}
