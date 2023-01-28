import {
  Avatar,
  Box,
  Flex,
  Image,
  Button,
  Highlight,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Dot from '../Dots'
import { ArrowDownIcon } from '@chakra-ui/icons'
import pandaLookingCV from '../../assets/pawdaPORT.png'
import Section from '../Section'
import avatar from '../../assets/avatar.jpg'

export default function Profile() {
  return (
    <Box>
      <Section>
        <Flex gap="2" alignItems="center">
          <Image
            src={avatar}
            borderRadius="1rem"
            w="100px"
            h="100px"
            objectFit="cover"
          />
          <Flex>
            <Dot to="https://github.com/Sebasssssss" name="Github" />
            <Dot name="Email" />
            <Dot name="Instagram" />
          </Flex>
        </Flex>
      </Section>
      <Section delay={0.1}>
        <Box
          textAlign="left"
          bg={useColorModeValue('#dfd3c3', '#111111')}
          borderRadius="0.8rem"
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
              query={['frontend', 'backend', 'php', 'mysql']}
              styles={{
                color: useColorModeValue('#ff6d28', '#ea047e')
              }}
            >
              Sebass is a self-taught frontend developer based in Uruguay with
              high enthusiasm in web development and web performance. He's got
              additional knowledge on backend with php and mysql to help his way
              through on real world projects, problems, and future ideas. He has
              got a high relish for all the process of building projects, from
              planning, inspiring and designing all the way to solving real-life
              problems with code. During free-time, he loves playing open world
              games like Dying light 2 or Elden Ring. He is currently working on
              projects and learning javascript in order to code React.
            </Highlight>
          </Text>
        </Box>
        <Box>
          <Box h="212px" w="full" overflow="hidden">
            <Image src={pandaLookingCV} />
          </Box>
          <Button
            bg={useColorModeValue('#85586f', '#ea047e90')}
            textColor="#fff"
            _hover={{ bg: useColorModeValue('#ab718e', '#ea047e') }}
          >
            Download CV
            <ArrowDownIcon ml="1" />
          </Button>
        </Box>
      </Section>
    </Box>
  )
}
