import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { SimpleGrid, Text } from '@chakra-ui/react'
import Card from '../../components/Card'

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
            title="Goku"
            subtitle="Example"
            thumbnail="https://i.pinimg.com/564x/ba/01/53/ba0153e8eeb70803363fac68e84a266d.jpg"
          />
          <Card
            id="footballWeb"
            title="Goku"
            subtitle="Example"
            thumbnail="https://i.pinimg.com/564x/d5/13/96/d51396e503335e73b94f6e3ebb9ec1ba.jpg"
          />
          <Card
            id="giffyapp"
            title="Giffy"
            subtitle="React Website"
            thumbnail="https://i.pinimg.com/564x/d5/13/96/d51396e503335e73b94f6e3ebb9ec1ba.jpg"
          />
        </SimpleGrid>
      </Section>
    </Layout>
  )
}
