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
import thumbnail from '/footballcard.png'
import thumbnail1 from '/football.png'
import thumbnail2 from '/football2.png'
import thumbnail3 from '/football3.png'
import thumbnail4 from '/football4.png'
import thumbnail5 from '/football5.png'
import thumbnail6 from '/football6.png'
import footballWebGif from '/footballWebGif.mp4'
import ZoomIn from '../../components/ZoomIn'

export default function FootballWeb() {
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
            styles={{ color: useColorModeValue('#ff6d28', '#ea047e') }}
          >
            Manchester United website concept with backend included! This is my
            first full website in PHP. It includes a cron which purpose is to
            automatically install the database with simple example information
            and make the website ready to use!
          </Highlight>
        </Text>
        <SimpleGrid row="2" gap="2" px="4" py="1">
          <Flex alignItems="center" gap="2">
            <Badge>Stack</Badge>
            <Text>Php / Mysql / Javscript </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>libraries</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              Materializecss
            </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>learning</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              <Highlight
                query={['backend']}
                styles={{ color: useColorModeValue('black', '#ea047e') }}
              >
                On this website, I learned a lot in terms of how the backend
                works, how to use databases, how to retrieve data from a
                database and display it on the web, and much more!
              </Highlight>
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <ZoomIn>
            <Image
              src={thumbnail}
              alt="MainImage"
              w="full"
              rounded="xl"
              objectFit="cover"
            />
          </ZoomIn>
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
          <ZoomIn>
            <Image
              src={thumbnail6}
              alt="sixthImage"
              w="full"
              rounded="xl"
              objectFit="cover"
            />
          </ZoomIn>
          <video
            alt="MainGif"
            src={footballWebGif}
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
