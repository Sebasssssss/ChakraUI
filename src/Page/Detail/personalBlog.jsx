import React from 'react'
import Layout from '../../components/layouts/article'
import { Link as ReactLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Link,
  Highlight,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import ZoomIn from '../../components/ZoomIn'
import thumbnail1 from '/personalBlog.png'
import thumbnail2 from '/personalblog2.png'
import thumbnail3 from '/personalblog3.png'
import thumbnail4 from '/personalblog4.png'
import thumbnail5 from '/personalblog5.png'
import personalBlogGif from '/personalBlogGif.mp4'

export default function PersonalBlog() {
  return (
    <Layout delay="0.2">
      <Box mt="6">
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
            <Dot to="https://github.com/Sebasssssss/PersonalBlog-PHP-Takuya-WhatIUse" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          This website is completely based on{' '}
          <Link
            href="https://uses.craftz.dog/"
            color={useColorModeValue('#ff6d28', '#ea047e')}
            isExternal
          >
            Devaslife's WhatIUse
          </Link>{' '}
          <Highlight
            query={['php', 'backend']}
            styles={{ color: useColorModeValue('#ff6d28', '#ea047e') }}
          >
            webpage! I tried to replicate the webpage Takuya created because I
            really liked how it looked in almost every aspect. In this case, I
            have made it completely in PHP, with a backend included!
          </Highlight>
        </Text>
        <SimpleGrid row="2" gap="2" px="4" py="2">
          <Flex gap="2" alignItems={['start', 'center']}>
            <Badge h="max">Stack</Badge>
            <Text>Php / Mysql / Javscript / Tailwindcss</Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>learning</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              On this website, I learned a lot of tricks with PHP that helped me
              simplify many details, pulled a lot of Tailwind CSS skills, and
              helped me understand how dark mode and responsive design works!
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <ZoomIn>
            <Image
              src={thumbnail1}
              alt="MainImage"
              w="full"
              rounded="xl"
              objectFit="cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={thumbnail2}
              alt="secondImage"
              w="full"
              rounded="xl"
              objectFit="cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={thumbnail3}
              alt="thirdImage"
              w="full"
              rounded="xl"
              objectFit="cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={thumbnail4}
              alt="forthImage"
              w="full"
              rounded="xl"
              objectFit="cover"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={thumbnail5}
              alt="fifthImage"
              w="full"
              rounded="xl"
              objectFit="cover"
            />
          </ZoomIn>
          <video
            alt="MainGif"
            src={personalBlogGif}
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
