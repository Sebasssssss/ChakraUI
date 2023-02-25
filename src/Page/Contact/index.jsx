import React, { useState } from 'react'
import Layout from '../../components/layouts/article'
import Section from '../../components/Section'
import ContacForm from '../../components/ContactForm'
import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { CheckIcon } from '@chakra-ui/icons'

export default function Contact() {
  const [copy, setCopy] = useState(false)
  const email = 'sebastian.rodriguez9714@gmail.com'
  const handleCopy = e => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopy(true)
    setTimeout(() => setCopy(false), 3000)
  }

  return (
    <>
      <Helmet>
        <title>Contact | Homepage</title>
      </Helmet>
      <Layout delay="0.2">
        <Text fontSize="xl" fontWeight="bold" className="font-mplus" my="4">
          Contact
        </Text>
        <Section>
          <Text my="1" mb="4">
            Feel free to contact me anytime you want, i will be pleased to
            answer you. Send me a message down here or email me manually by{' '}
            <Link
              href="#"
              onClick={handleCopy}
              display="inline-flex"
              alignItems="center"
              gap="2"
              textColor={
                copy
                  ? useColorModeValue('#ea047e', '#00abb2')
                  : useColorModeValue('#00abb2', '#ea047e')
              }
            >
              copying my email
              <CheckIcon
                opacity={copy ? 1 : 0}
                transition="all"
                transitionDuration={200}
                translateX={copy ? '0' : '-20px'}
              />
            </Link>
          </Text>
        </Section>
        <Section delay={0.2}>
          <ContacForm />
        </Section>
      </Layout>
    </>
  )
}
