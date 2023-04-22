import {
  Box,
  Flex,
  Image,
  Highlight,
  Text,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import React from 'react'
import Dot from '../Dots'
import Section from '../Section'
import avatar from '/avatar.jpg'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Profile() {
  return (
    <Box>
      <Section>
        <Flex gap="2" alignItems="center">
          <Image
            src={avatar}
            borderRadius="8px"
            w="100px"
            h="100px"
            objectFit="cover"
          />
          <Flex>
            <Dot to="https://github.com/Sebasssssss" title="Github" />
            <Dot
              title="Email"
              canCopy={true}
              toCopy="sebastian.rodriguez9714@gmail.com"
            />
            <Dot title="Linkedin" />
          </Flex>
        </Flex>
      </Section>
      <Section delay={0.1}>
        <Box
          textAlign="left"
          bg={useColorModeValue('#dfd3c3', '#111111')}
          borderRadius="8px"
          mt="15px"
          p="25px"
          pos="relative"
          boxShadow="lg"
          _before={{
            borderColor: `transparent transparent ${useColorModeValue(
              '#dfd3c3',
              '#111111'
            )} transparent`,
            borderStyle: 'solid',
            borderWidth: '0 10px 10px 10px',
            bottom: '100%',
            content: "''",
            left: '42px',
            pos: 'absolute'
          }}
        >
          <Text fontWeight="bold" fontSize="20px" className="font-mplus">
            Sebass Rodriguez
          </Text>
          <Text
            py="4px"
            opacity="0.7"
            letterSpacing="2px"
            fontWeight="400"
            fontSize="15px"
          >
            Developer
          </Text>
          <Text
            letterSpacing="0.2px"
            fontSize="14px"
            textIndent="1em"
            textAlign="justify"
          >
            <Highlight
              query={[
                'frontend',
                'backend',
                'php',
                'mysql',
                'javascript',
                'React'
              ]}
              styles={{
                color: useColorModeValue('#ff6d28', '#ea047e')
              }}
            >
              Sebass is a self-taught frontend developer based in Uruguay with a
              high enthusiasm for web development and web performance. He has
              additional knowledge in backend development with PHP and MySQL to
              help him work through real-world projects, problems, and future
              ideas. During his free time, he loves playing open-world games and
              listening to music. Currently, he is working on projects and
              learning JavaScript in order to code in React.
            </Highlight>
          </Text>
        </Box>
        <Box pt="10">
          <Button
            as={Link}
            to="/works"
            bg={useColorModeValue('#85586f', '#ea047e90')}
            _hover={{ bg: useColorModeValue('#ab718e', '#ea047e') }}
            _active={{ bg: useColorModeValue('#ab718e70', '#ea047e70') }}
            textColor="#fff"
            display="inline-flex"
            alignItems="center"
            gap="2"
          >
            My portofolio
            <ChevronRightIcon className="mt-0.5" />
          </Button>
        </Box>
      </Section>
    </Box>
  )
}
