import {
  Avatar,
  Box,
  Flex,
  Grid,
  Highlight,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Dot from '../Dots'

export default function Profile() {
  return (
    <Box>
      <Flex px={2} alignItems={'center'}>
        <Avatar
          src="https://i.pinimg.com/564x/ce/d6/3a/ced63aa39b72ebe3643b263b84195388.jpg"
          borderRadius="1rem"
          w="100px"
          h="100px"
          objectFit="cover"
          float="right"
        />
        <Flex px={2}>
          <Dot to="https://github.com/Sebasssssss" name="Github" />
          <Dot name="Email" />
          <Dot name="Instagram" />
        </Flex>
      </Flex>
      <Grid
        textAlign="left"
        bg={useColorModeValue('#dfd3c3', '#111111')}
        borderRadius="0.8rem"
        column="3"
        mt="15px"
        gap="2px"
        p="25px"
        pos="relative"
        w="full"
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
          h: '0',
          left: '48px',
          pos: 'absolute',
          w: '0'
        }}
      >
        <Text fontWeight="bold" fontSize="20px" className="font-mplus">
          Sebass Rodriguez
        </Text>
        <Text
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
              color: useColorModeValue('#85586f', '#ea047e'),
              rounded: 'sm'
            }}
          >
            Sebass is a self-taught frontend developer based in Uruguay with a
            big passion for minimalism, web development and web performance.
            He's got additional knowledge on backend with php and mysql to help
            his way through on real world projects, problems, and future ideas.
            He has got a high relish for all the process of building projects,
            from planning, inspiring and designing all the way to solving
            real-life problems with code. During free-time, he loves playing
            open world games like Dying light 2 or Elden Ring. Currently working
            on projects and learning javascript in order to code React.
          </Highlight>
        </Text>
      </Grid>
    </Box>
  )
}
