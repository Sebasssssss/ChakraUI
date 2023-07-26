import React from 'react'
import Layout from '../../components/layouts/article'
import Section from '../../components/Section'
import { SimpleGrid, Text } from '@chakra-ui/react'
import { Card } from '../../components/Card'
import { Helmet } from 'react-helmet-async'
import blogThumbnail from '/personalBlog.webp'
import gifThumbnail from '/giffycard.webp'
import footThumbnail from '/footballcard.webp'
import vercelThumbnail from '/vercelCard.webp'
import movieCard from '/cinemaCard.webp'
import translateCard from '/translateCard.webp'

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
                hash="L25O1-bb01i_oJWCNGoe0eWC^kt6"
              />
              <Card
                id="footballWeb"
                title="Manchester United web"
                subtitle="Web about Manchester United football team with backend"
                thumbnail={footThumbnail}
                hash="L35qCd}sRP0}5+1cn,$j#8S4xuSz"
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
                hash="L655LRNG9Zof~qM{D%t8?bM{IU%M"
              />
              <Card
                id="vercelmirror"
                title="Vercel mirror"
                subtitle="Replica of vercel website with Next.js"
                thumbnail={vercelThumbnail}
                hash="L55#hSt700M{WBWBofof00Rj~qxu"
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
                hash="L25X=PR-0KWB%~WVrqj?00o0}[oM"
              />
              <Card
                id="translate"
                title="Google Translate"
                subtitle="Translate app made with Chat GPT"
                thumbnail={translateCard}
                hash="L04Lar?wRj9EoIM_ofogxuoJxuRk"
              />
            </SimpleGrid>
          </Section>
        </SimpleGrid>
      </Layout>
    </>
  )
}
