import React from 'react'
import { Button, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link as ReactLink } from 'react-router-dom'
import Card from '../Card'
import thumbnail1 from '../../assets/giffy.png'

export default function MyPortfolioSection() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="6" my="4">
        <Card
          id="personalBlog"
          title="Personal Blog"
          subtitle="Web based on devaslife WhatIuse but in php and with a backend included"
          thumbnail="https://user-images.githubusercontent.com/105828786/201495026-037ba440-a51c-4746-9bcd-cbcca07ef417.png"
        />

        <Card
          id="giffyapp"
          title="Giffy App"
          subtitle="Gifs web app created with Giphy's API"
          thumbnail={thumbnail1}
        />
      </SimpleGrid>
      <Button
        bg={useColorModeValue('#85586f', '#ea047e90')}
        textColor="#fff"
        _hover={{ bg: useColorModeValue('#ab718e', '#ea047e') }}
        as={ReactLink}
        to="/works"
      >
        Popular posts <ChevronRightIcon />
      </Button>
    </>
  )
}
