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
  FormLabel
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Homepage</title>
      </Helmet>
      <Layout delay="0.2">
        <Text fontSize="xl" mb="4" fontWeight="bold" className="font-mplus">
          Contact
        </Text>
        <Section>
          <Text my="4">
            Feel free to contact me anytime you want, i will be pleased to
            answer you. Send me a message down here 😁
          </Text>
        </Section>
        <Section delay={0.2}>
          <Card
            shadow="xl"
            w="max"
            mx="auto"
            rounded="1rem"
            bg={useColorModeValue('#dfd3c3', '#111b')}
          >
            <CardBody>
              <FormControl
                display="flex"
                flexDirection="column"
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
                      w="32"
                      borderColor={useColorModeValue('#16161b', null)}
                      focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      w="32"
                      borderColor={useColorModeValue('#16161b', null)}
                      focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                    />
                  </Box>
                </Box>
                <Box>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    w="72"
                    borderColor={useColorModeValue('#16161b', null)}
                    focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                  />
                </Box>
                <Box>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    w="72"
                    resize="none"
                    borderColor={useColorModeValue('#16161b', null)}
                    focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
                  />
                </Box>
                <Button type="submit" colorScheme="teal">
                  Send!
                </Button>
              </FormControl>
            </CardBody>
          </Card>
        </Section>
      </Layout>
    </>
  )
}
