import { Box, Text } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Box display="flex" flexDir="column" gap="-5">
      <Text mt="8" fontSize="5xl" className="font-mplus">
        Got lost?
      </Text>
      <Text className="font-mplus">404 Not found</Text>
    </Box>
  )
}
