import React from 'react'
import Layout from '../../components/layouts/article'
import { Link as ReactLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Link,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import thumbnail1 from '/cinema.png'
import thumbnail2 from '/cinema2.png'
import thumbnail3 from '/cinema3.png'
import thumbnail4 from '/cinema4.png'
import thumbnail5 from '/cinema5.png'
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
              Cinema web App
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
              2023
            </Text>
          </Flex>
          <Box textAlign="right">
            <Dot to="https://github.com/Sebasssssss/Movies.app" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          This is a cinema web app made with{' '}
          <Link
            href="https://www.themoviedb.org/"
            color={useColorModeValue('#ff6d28', '#ea047e')}
          >
            TMDB's API
          </Link>
          . You'll find a lot of carousels with many movies and TV shows, and
          you will be able to sort them according to your personal preferences.
          Based on the movie you're looking for, we'll recommend some related
          movies/shows to you!{' '}
        </Text>
        <SimpleGrid row="2" gap="2" px="4" py="2">
          <Flex alignItems="center" gap="2">
            <Badge>website</Badge>
            <Link
              href="https://cinemawebapp.vercel.app/"
              color={useColorModeValue('#ff6d28', '#ea047e')}
              isExternal
            >
              https://cinemawebapp.vercel.app/ <ExternalLinkIcon />
            </Link>
          </Flex>
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
              Creating this project helped me learn the basic concepts of
              TypeScript, how it works, how helpful it can be, and made me
              understand Next.js much more.
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <ZoomIn>
            <Image
              alt="cinema1"
              src={thumbnail1}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="cinema2"
              src={thumbnail2}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="cinema3"
              src={thumbnail3}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="cinema4"
              src={thumbnail4}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="cinema5"
              src={thumbnail5}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
