import React from 'react'
import Layout from '../../components/layouts/article'
import { Link as ReactLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Link,
  Highlight,
  SimpleGrid,
  Text,
  useColorModeValue,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import thumbnail from '/vercel.webp'
import thumbnail1 from '/vercel1.webp'
import thumbnail2 from '/vercel2.webp'
import thumbnail3 from '/vercel3.webp'
import thumbnail4 from '/vercel4.webp'
import thumbnail5 from '/vercel5.webp'
import DetailImage from '../../components/BlurImage'

export default function VercelWeb() {
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
                  Vercel Mirror
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
              2023
            </Text>
          </Flex>
          <Box textAlign="right">
            <Dot to="https://github.com/Sebasssssss/Vercel-Mirror" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          This web app was made to practice and learn{' '}
          <Link
            href="https://nextjs.org/"
            textColor={useColorModeValue('#ff6d28', '#ea047e')}
            isExternal
          >
            Next.js 13
          </Link>{' '}
          with the new{' '}
          <Link
            href="https://beta.nextjs.org/docs/app-directory-roadmap"
            textColor={useColorModeValue('#ff6d28', '#ea047e')}
            isExternal
          >
            "app experimental dir"
          </Link>{' '}
          and does not have any of the functionalities of the original one. This
          was an experimental project, so it's not ready for deployment yet
          because there are still some things to be done.{' '}
        </Text>
        <SimpleGrid row="2" gap="2" px="4" py="2">
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
                styles={{ color: useColorModeValue('#ff6d28', '#ea047e') }}
              >
                Learned the basics of Nextjs and server side rendering
                components.
              </Highlight>
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <DetailImage
            hash="LdDcXTxufQof%Mt7WBof~q%MM{t7"
            src={thumbnail}
            alt="MainImage"
          />
          <DetailImage
            hash="L02O|r%Lt7xu%Kxbxtt7xaxuxut7"
            src={thumbnail1}
            alt="vercel1"
          />
          <DetailImage
            hash="L11{TtRjRi?b_2RjWA-;%Mj[ofxu"
            src={thumbnail2}
            alt="vercel2"
          />
          <DetailImage
            hash="L01{Qm~qs.9Fxtxu-pxtM{M{-p?b"
            src={thumbnail3}
            alt="vercel3"
          />
          <DetailImage
            hash="L00l#Z%M%2s:-:xu%Lt6%Mxu%Lt7"
            src={thumbnail4}
            alt="vercel4"
          />
          <DetailImage
            hash="L02rpwM{9Fx]_3RP_3x]niWB~qxu"
            src={thumbnail5}
            alt="vercel5"
          />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
