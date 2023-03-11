import React from 'react'
import Layout from '../../components/layouts/article'
import { Link as ReactLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Link,
  Image,
  SimpleGrid,
  Highlight,
  Text,
  useColorModeValue,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import thumbnail from '/cinema.png'
import thumbnail1 from '/cinema2.png'
import thumbnail2 from '/cinema3.png'
import thumbnail3 from '/cinema4.png'
import thumbnail4 from '/cinema5.png'
import ZoomIn from '../../components/ZoomIn'

export default function CinemaApp() {
  return (
    <Layout delay="0.2">
      <Box my="6">
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
              Cinema web app
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
            <Dot to="https://github.com/Sebasssssss/Movies.app" />
          </Box>
        </Flex>
        <Flex alignItems="flex-start">
          <Text textAlign="left" textIndent="1em">
            Cinema web app made with{' '}
            <Link
              href="https://www.themoviedb.org/"
              color={useColorModeValue('#ff6d28', '#ea047e')}
              isExternal
            >
              tmdb's api
            </Link>
            . You'll find a lot of carousels with a lot of movies and tv shows,
            and you will be able to sort them by your preferences. Based on the
            movie you're looking for, we're going to recommend some to you in
            relation to the movie/show!
          </Text>
        </Flex>
        <SimpleGrid row="2" gap="2" px="4" py="2">
          <Flex alignItems="center" gap="2">
            <Badge>Stack</Badge>
            <Text>Next.js 13 / Tailwindcss / Typescript</Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>libraries</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              React / Swiper
            </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>learning</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              <Highlight
                query={['typecript', 'Next js']}
                styles={{ color: useColorModeValue('#ff6d28', '#ea047e') }}
              >
                Creating this project helped me to learn the basic concepts of
                typecript, how it works and how helpfull can be, and made me
                understand much more Next js
              </Highlight>
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <ZoomIn>
            <Image
              alt="MainImage"
              src={thumbnail}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="MainImage"
              src={thumbnail1}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="Giffy2Image"
              src={thumbnail2}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="Giffy3Image"
              src={thumbnail3}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="Giffy3Image"
              src={thumbnail4}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
