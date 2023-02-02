import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404: This page could not be found</title>
      </Helmet>
      <Box display="flex" flexDir="column" gap="-5" h="200px">
        <Text mt="8" fontSize="5xl" className="font-mplus">
          Got lost?
        </Text>
        <Text className="font-mplus">404 Not found</Text>
      </Box>
    </>
  )
}
