import React from 'react'
import {
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { Card } from '../Card'
import thumbnail1 from '/personalBlog.webp'
import thumbnail2 from '/giffycard.webp'
import resume from '/curriculum.pdf'
import Section from '../Section'

export default function PopularPosts() {
  return (
    <>
      <Section delay={0.6}>
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
            subtitle="Website based on devaslife's WhatIUse web, but built in PHP with a backend included"
            thumbnail={thumbnail1}
            hash="L25O1-bb01i_oJWCNGoe0eWC^kt6"
          />

          <Card
            id="giffyapp"
            title="Giffy App"
            subtitle="Gifs web app created with Giphy's API"
            thumbnail={thumbnail2}
            hash="L655LRNG9Zof~qM{D%t8?bM{IU%M"
          />
        </SimpleGrid>
        <Button
          as="a"
          href={resume}
          download
          target="_blank"
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
      </Section>
    </>
  )
}
