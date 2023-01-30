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
  SimpleGrid
} from '@chakra-ui/react'

export default function Contact() {
  return (
    <Layout delay="0.2">
      <Section>
        <SimpleGrid gap="2" my="8">
          <Text className="font-mplus" fontWeight="semibold" fontSize="24px">
            Contact me!
          </Text>
          <Text>
            Feel free to contact me anytime you want, i will be pleased to
            answer you. Send me a message down here 😁
          </Text>
        </SimpleGrid>
      </Section>
      <Section delay={0.2}>
        <Card
          shadow="xl"
          w="max"
          mx="auto"
          bg={useColorModeValue('#dfd3c3', '#111b')}
          _before={{
            borderColor: `transparent transparent ${useColorModeValue(
              '#dfd3c3',
              '#111b'
            )} transparent`,
            borderStyle: 'solid',
            borderWidth: '0 10px 10px 10px',
            bottom: '100%',
            content: "''",
            left: '45%',
            pos: 'absolute'
          }}
        >
          <CardBody
            display="flex"
            flexDirection="column"
            gap="6"
            alignItems="center"
            py="10"
          >
            <Box display="inline-flex" justifyContent="space-between" w="full">
              <Input
                placeholder="Name"
                w="32"
                borderColor={useColorModeValue('#16161b', null)}
                focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
              />
              <Input
                placeholder="Last Name"
                w="32"
                borderColor={useColorModeValue('#16161b', null)}
                focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
              />
            </Box>
            <Input
              placeholder="email"
              w="72"
              borderColor={useColorModeValue('#16161b', null)}
              focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
            />
            <Textarea
              placeholder="Message..."
              w="72"
              resize="none"
              borderColor={useColorModeValue('#16161b', null)}
              focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
            />
            <Button
              type="submit"
              bg={useColorModeValue('#ab718e', null)}
              _hover={{ bg: useColorModeValue('#f6a2cc', null) }}
            >
              Send!
            </Button>
          </CardBody>
        </Card>
      </Section>
    </Layout>
  )
}
