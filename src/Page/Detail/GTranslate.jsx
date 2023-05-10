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
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import thumbnail from '/translateCard.png'
import thumbnail2 from '/translate.png'
import DetailImage from '../../components/BlurImage'

export default function GTranslate() {
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
              Google Translate
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
            <Dot to="https://github.com/Sebasssssss/GoogleTranslateGPT" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          The application is a translator that operates using{' '}
          <Link
            href="https://platform.openai.com/account/api-keys"
            color={useColorModeValue('#ff6d28', '#ea047e')}
          >
            Open AI API{' '}
          </Link>
          (Chat GPT). The user can input a message in any language and receive a
          response in the required language. The app is user-friendly and can be
          integrated into any website or online platform.
        </Text>
        <SimpleGrid row="2" gap="2" px="4" py="1">
          <Flex alignItems="center" gap="2">
            <Badge>Stack</Badge>
            <Text>Typescript / Javscript </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>libraries</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              React
            </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>learning</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              <Highlight
                query={['typescript', 'Chat GPT']}
                styles={{ color: useColorModeValue('black', '#ea047e') }}
              >
                Learned how to integrate Chat GPT with my projects, and it was
                really helpful to understand much better typescript.
              </Highlight>
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <DetailImage
            hash="LxJG{E~C^k%2?HNGRjWB?HNGRjWB"
            src={thumbnail}
            alt="MainImage"
          />
          <DetailImage
            hash="L04Lar?wRj9EoIM_ofogxuoJxuRk"
            src={thumbnail2}
            alt="secondImage"
          />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
