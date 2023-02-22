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
  Box,
  Spinner
} from '@chakra-ui/react'
import useEmail from '../../hooks/useEmail'

export default function ContacForm() {
  const { sendEmail, form, isSent, loading } = useEmail()
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
            <FormLabel>Phone number (opcional)</FormLabel>
            <Input
              w={{ base: 'full', md: '52' }}
              borderColor={useColorModeValue('#16161b', null)}
              focusBorderColor={useColorModeValue('#ab718e', '#ea047e')}
              name="phoneNumber"
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
          bg={useColorModeValue('#85586f', '#ea047e90')}
          _hover={{
            bg: useColorModeValue('#ab718e', '#ea047e'),
            boxShadow: '0 0 0 5px #ea047e5f'
          }}
          _active={{ bg: useColorModeValue('#ab718e70', '#ea047e70') }}
        >
          {loading ? <Spinner /> : 'Send!'}
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
