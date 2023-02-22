import React from 'react'
import Layout from '../../components/layouts/article'
import Section from '../../components/Section'
import ContacForm from '../../components/ContactForm'
import { Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Homepage</title>
      </Helmet>
      <Layout delay="0.2">
        <Text fontSize="xl" fontWeight="bold" className="font-mplus" my='4'>
          Contact
        </Text>
        <Section>
          <Text my="1" mb="4">
            Feel free to contact me anytime you want, i will be pleased to
            answer you. Send me a message down here 😁
          </Text>
        </Section>
        <Section delay={0.2}>
          <ContacForm />
        </Section>
      </Layout>
    </>
  )
}
