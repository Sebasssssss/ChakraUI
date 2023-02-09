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
import thumbnail1 from '/vercel.png'
import thumbnail2 from '/vercel2.png'
import thumbnail3 from '/vercel3.png'
import thumbnail4 from '/vercel4.png'
import thumbnail5 from '/vercel5.png'

export default function VercelWeb() {
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
              Vercel Mirror
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
          This web was made to practice and learn{' '}
          <Link
            href="https://nextjs.org/"
            textColor={useColorModeValue('black', '#ea047e')}
            isExternal
          >
            Next.js 13
          </Link>{' '}
          with the new{' '}
          <Link
            href="https://beta.nextjs.org/docs/app-directory-roadmap"
            textColor={useColorModeValue('black', '#ea047e')}
            isExternal
          >
            {' '}
            app experimental dir
          </Link>{' '}
          and it does not have any functionalities like the original one. This
          was an experimental project therefore it's not ready even for deploy
          because it still has some things to get done.
        </Text>
        <SimpleGrid row="2" gap="2" p="4">
          <Flex alignItems="center" gap="2">
            <Badge>Stack</Badge>
            <Text>Next.js / Javscript / Tailwindcss </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>libraries</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              React / Geist UI
            </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>learning</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              <Highlight
                query={['tailwindcss', 'dark mode', 'javascript']}
                styles={{ color: useColorModeValue('black', '#ea047e') }}
              >
                Learned the basics of Nextjs and server side rendering
                components.
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
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
