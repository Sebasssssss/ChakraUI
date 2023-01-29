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
import thumbnail1 from '../../assets/football.png'
import thumbnail2 from '../../assets/football2.png'
import thumbnail3 from '../../assets/football3.png'
import thumbnail4 from '../../assets/football4.png'
import thumbnail5 from '../../assets/football5.png'
import thumbnail6 from '../../assets/football6.png'

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
            <Dot to="https://github.com/Sebasssssss/Football-Wbsite-Frontend-Backend" />
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
        <SimpleGrid gap="6">
          <Image
            src={thumbnail1}
            alt="MainImage"
            w="full"
            rounded="xl"
            objectFit="cover"
          />
          <Image
            src={thumbnail2}
            alt="secondImage"
            w="full"
            rounded="xl"
            objectFit="cover"
          />
          <Image
            src={thumbnail3}
            alt="thirdImage"
            w="full"
            rounded="xl"
            objectFit="cover"
          />
          <Image
            src={thumbnail4}
            alt="forthImage"
            w="full"
            rounded="xl"
            objectFit="cover"
          />
          <Image
            src={thumbnail5}
            alt="fifthImage"
            w="full"
            rounded="xl"
            objectFit="cover"
          />
          <Image
            src={thumbnail6}
            alt="sixthImage"
            w="full"
            rounded="xl"
            objectFit="cover"
          />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
