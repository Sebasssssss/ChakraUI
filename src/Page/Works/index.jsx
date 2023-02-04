import React from 'react'
import Layout from '../../components/layouts/article'
import Section from '../../components/Section'
import { SimpleGrid, Text } from '@chakra-ui/react'
import Card from '../../components/Card'
import thumbnail1 from '/personalBlog.png'
import thumbnail2 from '/giffy.png'
import thumbnail3 from '/football.png'
import { Helmet } from 'react-helmet-async'

export default function Works() {
  return (
    <>
      <Helmet>
        <title>Works | Homepage</title>
      </Helmet>
      <Layout delay="0.2">
        <Text
          fontSize="xl"
          textAlign="left"
          mt="6"
          mb="4"
          fontWeight="bold"
          className="font-mplus"
        >
          Works
        </Text>
        <Section>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
            <Card
              id="personalBlog"
              title="Personal Blog"
              subtitle="Web based on devaslife WhatIuse but in php and with a backend included"
              thumbnail={thumbnail1}
            />
            <Card
              id="footballWeb"
              title="Manchester United web"
              subtitle="Web about Manchester United football team with backend"
              thumbnail={thumbnail3}
            />
            <Card
              id="giffyapp"
              title="Giffy App"
              subtitle="Gifs web app created with Giphy's API"
              thumbnail={thumbnail2}
            />
          </SimpleGrid>
        </Section>
      </Layout>
    </>
  )
}
