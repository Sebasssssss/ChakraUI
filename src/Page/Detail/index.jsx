import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { GithubDot } from '../../components/Dots'

export default function Detail() {
  return (
    <Layout delay="0.2">
      <Box>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Link to="/page2">
              <Text pr="2" color={useColorModeValue('#fce700', '#ea047e')}>
                Works
              </Text>
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
          </Flex>
          <Box textAlign="right">
            <GithubDot to="https://github.com/Sebasssssss/PersonalBlog-PHP-Takuya-WhatIUse" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent={12}>
          Website completely based on Takuya Matsuyama's WhatIUse web! I tried
          to replicate the web Takuya's did because I really like how it look
          almost in every aspect and because I have not seen a similar web like
          this one before. In this case, I've made it completely in Php, with a
          backend included!
        </Text>
        <SimpleGrid row="2" gap="2" p="4">
          <Box>
            <Text
              textAlign="left"
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              w="max"
              px="1"
              rounded="sm"
              bg={useColorModeValue('#ccc', '#ff6d2870')}
              color={useColorModeValue('#ccc', '#ff6d28')}
            >
              2022 oct - 2022 dec
            </Text>
          </Box>
          <Flex alignItems="center" gap="2">
            <Text
              textAlign="left"
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              w="max"
              px="1"
              rounded="sm"
              bg={useColorModeValue('#ccc', '#ff6d2870')}
              color={useColorModeValue('#ccc', '#ff6d28')}
            >
              Stack
            </Text>
            <Text>Php, Mysql, Alpine js</Text>
          </Flex>
        </SimpleGrid>
        <img
          src="https://wallpaperaccess.com/full/138728.jpg"
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-72 object-cover"
        />
      </Box>
    </Layout>
  )
}
