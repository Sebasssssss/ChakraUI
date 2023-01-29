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
import thumbnail2 from '../../assets/football.png'

export default function FootballWeb() {
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
              Football web
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
            <Dot
              to="https://github.com/Sebasssssss/Football-Wbsite-Frontend-Backend"
              name="Source"
            />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          <Highlight
            query={['php', 'backend', 'cron']}
            styles={{ color: useColorModeValue('black', '#ea047e') }}
          >
            Football Website with backend included! This is my first full
            website in php. It includes a cron that it's porpuse is to
            automatically, when it is open, install the data base with simple
            example information, and ready to use the web!
          </Highlight>
        </Text>
        <SimpleGrid row="2" gap="2" p="4">
          <Box></Box>
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
            <Text>Php / Mysql / Javscript </Text>
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
              Materializecss
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
              <Highlight
                query={['tailwindcss', 'dark mode', 'javascript']}
                styles={{ color: useColorModeValue('black', '#ea047e') }}
              >
                In this website i learned a lot in terms of how backend works,
                how to use databases, get the data from database and display it
                on the web and a lot more!
              </Highlight>
            </Text>
          </Flex>
        </SimpleGrid>
        <Image
          src={thumbnail2}
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl object-cover"
        />
      </Box>
    </Layout>
  )
}
