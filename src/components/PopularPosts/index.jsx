import React from 'react'
import {
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { Card } from '../Card'
import thumbnail1 from '/personalBlog.png'
import thumbnail2 from '/giffycard.png'
import avatar from '/avatar.jpg'

export default function PopularPosts() {
  return (
    <>
      <Heading
        textAlign="left"
        fontSize="xl"
        fontWeight="bold"
        textDecorationColor={useColorModeValue('#a1a1aa', '#3f3f46')}
        className="section-title"
      >
        Popular posts
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="6" my="8">
        <Card
          id="personalBlog"
          title="Personal Blog"
          subtitle="Web based on devaslife WhatIuse web but in php and with a backend included"
          thumbnail={thumbnail1}
        />

        <Card
          id="giffyapp"
          title="Giffy App"
          subtitle="Gifs web app created with Giphy's API"
          thumbnail={thumbnail2}
        />
      </SimpleGrid>
      <Button
        as="a"
        href={avatar}
        download
        bg={useColorModeValue('#85586f', '#ea047e90')}
        _hover={{ bg: useColorModeValue('#ab718e', '#ea047e') }}
        _active={{ bg: useColorModeValue('#ab718e70', '#ea047e70') }}
        textColor="#fff"
        display="inline-flex"
        alignItems="center"
        gap="8px"
      >
        Resume
        <DownloadIcon mt="1" fontSize="sm" />
      </Button>
    </>
  )
}
