import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  useColorModeValue,
  Box
} from '@chakra-ui/react'
import useEmail from '../../services/emailjs'

export default function ContacForm() {
  const { sendEmail, form, isSent } = useEmail()
  return (
    <Box w="full" px="5">
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
          display={{ base: 'block', md: 'inline-flex' }}
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <FormLabel>Name</FormLabel>
            <Input
              w={{ base: 'full', md: '52' }}
              borderColor={useColorModeValue('#16161b', null)}
              focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
              isRequired
              name="from_name"
            />
          </Box>
          <Box mt={{ base: '4', md: '0' }}>
            <FormLabel>Last Name</FormLabel>
            <Input
              w={{ base: 'full', md: '52' }}
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
    </Box>
  )
}
