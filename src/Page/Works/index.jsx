import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { SimpleGrid, Text } from '@chakra-ui/react'
import Card from '../../components/Card'
import thumbnail1 from '../../assets/giffy.png'
import thumbnail2 from '../../assets/football.png'

export default function Works() {
  return (
    <Layout delay="0.2">
      <Text
        fontSize="xl"
        textAlign="left"
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
            thumbnail="https://user-images.githubusercontent.com/105828786/201495026-037ba440-a51c-4746-9bcd-cbcca07ef417.png"
          />
          <Card
            id="footballWeb"
            title="Manchester United web"
            subtitle="Web about Manchester United football team with backend"
            thumbnail={thumbnail2}
          />
          <Card
            id="giffyapp"
            title="Giffy App"
            subtitle="Gifs web app created with Giphy's API"
            thumbnail={thumbnail1}
          />
        </SimpleGrid>
      </Section>
    </Layout>
  )
}
