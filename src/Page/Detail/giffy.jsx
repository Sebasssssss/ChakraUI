import React from 'react'
import Layout from '../../components/Layout'
import { Link as ReactLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Link,
  Highlight,
  Image,
  SimpleGrid,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import thumbnail from '../../assets/giffy.png'

export default function GiffyApp() {
  return (
    <Layout delay="0.2">
      <Box>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Link
              as={ReactLink}
              to="/works"
              pr="2"
              color={useColorModeValue('#ff6d28', '#ea047e')}
            >
              <Text fontWeight="semibold">Works</Text>
            </Link>
            <ChevronRightIcon />
            <Text
              fontSize="lg"
              px="2"
              textAlign="left"
              fontWeight="bold"
              className="font-mplus"
            >
              Giffy App
            </Text>
            <Text
              fontSize="xs"
              fontWeight="bold"
              w="max"
              px="1"
              rounded="sm"
              bg={useColorModeValue('#ff6d2850', '#00f5ff30')}
              color={useColorModeValue('#ff6d28', '#00f5ff50')}
            >
              2022
            </Text>
          </Flex>
          <Box textAlign="right">
            <Dot to="https://github.com/Sebasssssss/Giffy.app" name="Source" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          <Highlight
            query={['most', 'search', 'popular']}
            styles={{ color: useColorModeValue('black', '#ea047e') }}
          >
            Web app where you'll be able to search for wherever gif or sticker
            you want. You can sort them by ranking or look for the most popular
            ones. If you feel like looking whats the most search things by the
            people, you can do it too by heading up to the footer section!
          </Highlight>
        </Text>
        <SimpleGrid row="2" gap="2" p="4">
          <Flex alignItems="center" gap="2">
            <Text
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              w="max"
              px="1"
              rounded="sm"
              bg={useColorModeValue('#ff6d2850', '#ea047e50')}
              color={useColorModeValue('#ff6d28', '#ea047e')}
            >
              Stack
            </Text>
            <Text>Javscript / Tailwindcss</Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Tag
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                w="max"
                h="max"
                px="1"
                size="sm"
                mt="1"
                rounded="sm"
                bg={useColorModeValue('#ff6d2850', '#ea047e50')}
                color={useColorModeValue('#ff6d28', '#ea047e')}
              >
                libraries
              </Tag>
            </Text>
            <Text textAlign="left" textIndent="1em">
              React / Wouter / Intersection-ovbserver / just-debounce-it
            </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Tag
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                w="max"
                h="max"
                px="1"
                size="sm"
                mt="1"
                rounded="sm"
                bg={useColorModeValue('#ff6d2850', '#ea047e50')}
                color={useColorModeValue('#ff6d28', '#ea047e')}
              >
                learning
              </Tag>
            </Text>
            <Text textAlign="left" textIndent="1em">
              With this web app i learned and understand a lot of how Javascript
              and React works. Learned how to do simples fetch of api's data and
              a lot of react hooks.
            </Text>
          </Flex>
        </SimpleGrid>
        <Image
          src={thumbnail}
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-72 object-cover"
        />
      </Box>
    </Layout>
  )
}
