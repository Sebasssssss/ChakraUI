import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import {
  Card,
  Input,
  CardBody,
  Text,
  Textarea,
  Box,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import useEmail from '../../hooks/useEmail'

export default function Contact() {
  const { sendEmail, form, isSent } = useEmail()

  return (
    <>
      <Helmet>
        <title>Contact | Homepage</title>
      </Helmet>
      <Layout delay="0.2">
        <Text
          fontSize="xl"
          mb="4"
          mt="8"
          fontWeight="bold"
          className="font-mplus"
        >
          Contact
        </Text>
        <Section>
          <Text my="4">
            Feel free to contact me anytime you want, i will be pleased to
            answer you. Send me a message down here 😁
          </Text>
        </Section>
        <Section delay={0.2}>
          <Card w="full" bg="transparent" shadow="none">
            <CardBody>
              <FormControl
                as="form"
                ref={form}
                onSubmit={sendEmail}
                display="flex"
                flexDir="column"
                gap="4"
                alignItems="center"
              >
                <Box
                  display="inline-flex"
                  justifyContent="space-between"
                  w="full"
                >
                  <Box>
                    <FormLabel>Name</FormLabel>
                    <Input
                      w="52"
                      borderColor={useColorModeValue('#16161b', null)}
                      focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                      isRequired
                      name="from_name"
                    />
                  </Box>
                  <Box>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      w="52"
                      borderColor={useColorModeValue('#16161b', null)}
                      focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                      isRequired
                      name="lastName"
                    />
                  </Box>
                </Box>
                <Box w="full">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    borderColor={useColorModeValue('#16161b', null)}
                    focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                    isRequired
                    name="email"
                  />
                </Box>
                <Box w="full">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    resize="none"
                    borderColor={useColorModeValue('#16161b', null)}
                    focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                    isRequired
                    name="message"
                  />
                </Box>
                <Button
                  type="submit"
                  colorScheme="pink"
                  _hover={{ boxShadow: '0 0 0 5px #ea047e5f' }}
                >
                  Send!
                </Button>
                {isSent ? (
                  <Alert status="success">
                    <AlertIcon /> Your message has been delivered correctly!
                  </Alert>
                ) : null}
              </FormControl>
            </CardBody>
          </Card>
        </Section>
      </Layout>
    </>
  )
}
