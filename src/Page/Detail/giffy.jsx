import React from 'react'
import Layout from '../../components/layouts/article'
import { Link as ReactLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  Badge,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import thumbnail from '/giffycard.png'
import thumbnail1 from '/giffy.png'
import thumbnail2 from '/giffy2.png'
import thumbnail3 from '/giffy3.png'
import giffyGif from '/giffyGif.mp4'
import DetailImage from '../../components/BlurImage'

export default function GiffyApp() {
  return (
    <Layout delay="0.2">
      <Box my="6">
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.300" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  as={ReactLink}
                  to="/works"
                  fontWeight="semibold"
                  color={useColorModeValue('#ff6d28', '#ea047e')}
                >
                  Works
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <Text fontSize="lg" fontWeight="bold" className="font-mplus">
                  Giffy App
                </Text>
              </BreadcrumbItem>
            </Breadcrumb>
            <Text
              fontSize="xs"
              fontWeight="bold"
              w="max"
              px="1"
              mx="2"
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
          This is a web app where you'll be able to search for whatever GIF or
          sticker you want. You can sort them by ranking or look for the most
          popular ones. If you feel like finding out what the most searched
          things are by people, you can do so by heading to the footer section!{' '}
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
            <Text>JavaScript / Tailwind CSS</Text>
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
              With this web app, I learned and understood a lot about how
              JavaScript and React work. I learned how to do simple API data
              fetches, many React hooks, and how to deploy a web app with{' '}
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
          <DetailImage
            hash="L655LRNG9Zof~qM{D%t8?bM{IU%M"
            src={thumbnail}
            alt="MainImage"
          />
          <DetailImage
            hash="L00vh$ayDiaxx^ayVsf6IVWB%Mj["
            src={thumbnail1}
            alt="firstImage"
          />
          <DetailImage
            hash="L88||uE100^R}tR%E|xaF^smwJOE"
            src={thumbnail2}
            alt="secondImage"
          />
          <DetailImage
            hash="LAAv%]9#00},%4oHELWG00-O^+9%"
            src={thumbnail3}
            alt="thirdImage"
          />
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
