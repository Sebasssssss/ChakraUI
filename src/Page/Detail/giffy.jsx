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
import thumbnail from '/giffy.png'
import thumbnail1 from '/giffy1.png'
import thumbnail2 from '/giffy2.png'
import thumbnail3 from '/giffy3.png'
import giffyGif from '/giffyGif.mp4'
import ZoomIn from '../../components/ZoomIn'

export default function GiffyApp() {
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
            <Dot to="https://github.com/Sebasssssss/Giffy.app" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          Web app where you'll be able to search for wherever gif or sticker you
          want. You can sort them by ranking or look for the most popular ones.
          If you feel like looking whats the most search things by people, you
          can do it too by heading up to the footer section!
        </Text>
        <SimpleGrid row="2" gap="2" px="4" py="2">
          <Flex alignItems="center" gap="2">
            <Badge>website</Badge>
            <Link
              href="https://giffys-sebasssssss.vercel.app/"
              color={useColorModeValue('#ff6d28', '#ea047e')}
              isExternal
            >
              https://giffys-sebasssssss.vercel.app/ <ExternalLinkIcon />
            </Link>
          </Flex>
          <Flex alignItems="center" gap="2">
            <Badge>Stack</Badge>
            <Text>Javscript / Tailwindcss</Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>libraries</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              React / Wouter / Intersection-observer / just-debounce-it
            </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>learning</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              With this web app i learned and understand a lot of how Javascript
              and React works. Learned how to do simples fetch of api's data,
              many react hooks and how to deploy a web with{' '}
              <Link
                href="https://vercel.com/"
                color={useColorModeValue('#ff6d28', '#ea047e')}
                isExternal
              >
                Vercel
              </Link>
              .
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <ZoomIn>
            <Image
              alt="MainImage"
              src={thumbnail1}
              className="w-full rounded-xl object-cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              alt="Giffy1Image"
              src={thumbnail}
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
          <video
            alt="MainGif"
            src={giffyGif}
            className="w-full rounded-xl object-cover"
            autoPlay
            loop
            playsInline
            muted
          />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
