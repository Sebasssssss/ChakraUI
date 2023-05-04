import React from 'react'
import Layout from '../../components/layouts/article'
import Section from '../../components/Section'
import { SimpleGrid, Text } from '@chakra-ui/react'
import { Card } from '../../components/Card'
import { Helmet } from 'react-helmet-async'
import blogThumbnail from '/personalBlog.png'
import gifThumbnail from '/giffycard.png'
import footThumbnail from '/footballcard.png'
import vercelThumbnail from '/vercelCard.png'
import movieCard from '/cinemaCard.png'
import translateCard from '/translateCard.png'

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
          my="4"
          fontWeight="bold"
          className="font-mplus"
        >
          Works
        </Text>
        <SimpleGrid gap="6">
          <Section delay={0.2}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
              <Card
                id="personalBlog"
                title="Personal Blog"
                subtitle="Website based on devaslife's WhatIUse web, but built in PHP with a backend included"
                thumbnail={blogThumbnail}
              />
              <Card
                id="footballWeb"
                title="Manchester United web"
                subtitle="Web about Manchester United football team with backend"
                thumbnail={footThumbnail}
              />
            </SimpleGrid>
          </Section>
          <Section delay={0.3}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
              <Card
                id="giffyapp"
                title="Giffy App"
                subtitle="Gifs web app created with Giphy's API"
                thumbnail={gifThumbnail}
              />
              <Card
                id="vercelmirror"
                title="Vercel mirror"
                subtitle="Replica of vercel website with Next.js"
                thumbnail={vercelThumbnail}
              />
            </SimpleGrid>
          </Section>
          <Section delay={0.4}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
              <Card
                id="cinema"
                title="Cinema web app"
                subtitle="Cinema site for searching for movies and tv shows"
                thumbnail={movieCard}
              />
              <Card
                id="translate"
                title="Google Translate"
                subtitle="Translate app made with Chat GPT"
                thumbnail={translateCard}
              />
            </SimpleGrid>
          </Section>
        </SimpleGrid>
      </Layout>
    </>
  )
}
