import React from 'react'
import {
  Box,
  Button,
  Link,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/Layout'
import Profile from '../../components/ProfileCard'
import image from '../../assets/pawdaPORT.png'
import Bio from '../../components/Bio'
import { ArrowDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link as ReachLink } from 'react-router-dom'

export default function Home() {
  return (
    <Layout delay="0.2">
      <Profile />
      <Box h="212px" w="full" overflow="hidden">
        <Image src={image} />
      </Box>
      <Button
        bg={useColorModeValue('#85586f', '#ea047e90')}
        textColor="#fff"
        _hover={{ bg: useColorModeValue('#85586f', '#ea047e') }}
      >
        <Text pr="1">Download CV</Text>
        <ArrowDownIcon />
      </Button>
      <Bio />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        <Link as={ReachLink} to="/detail" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/cc/c7/b7/ccc7b72e8d2ff092eccff8d52eb1af7c.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
          <h1 className="text-sm opacity-70">Subtitle</h1>
        </Link>
        <Link as={ReachLink} to="/detail" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/b1/7f/f0/b17ff0a32d55ec4adb61c1b51459a396.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
          <h1 className="text-sm opacity-70">Subtitle</h1>
        </Link>
      </div>

      <Button
        bg={useColorModeValue('#85586f', '#ea047e90')}
        textColor="#fff"
        _hover={{ bg: useColorModeValue('#85586f', '#ea047e') }}
        as={ReachLink}
        to="/page2"
      >
        My Portfolio <ChevronRightIcon />
      </Button>
    </Layout>
  )
}
