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
import thumbnail from '../../assets/personalblog.png'

export default function PersonalBlog() {
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
              Personal Blog
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
              to="https://github.com/Sebasssssss/PersonalBlog-PHP-Takuya-WhatIUse"
              name="Source"
            />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          <Highlight
            query={['php', 'backend']}
            styles={{ color: useColorModeValue('black', '#ea047e') }}
          >
            Website completely based on Takuya Matsuyama's WhatIUse web! I tried
            to replicate the web Takuya's did because I really like how it look
            almost in every aspect and because I have not seen a similar web
            like this one before. In this case, I've made it completely in Php,
            with a backend included!
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
            <Text>Php / Mysql / Javscript / Tailwindcss</Text>
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
              In this website i learned a a lot of tricks with php that helped
              me simplify many details, pulled a lot of tailwindcss skills, and
              helped me understand how dark mode works with javascript!
            </Text>
          </Flex>
        </SimpleGrid>
        <Image
          src={thumbnail}
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-max object-cover"
        />
      </Box>
    </Layout>
  )
}
