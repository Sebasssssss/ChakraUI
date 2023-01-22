import { Box, Flex, Stack, Link } from '@chakra-ui/react'
import ToggleColorMode from '../toggleThemeButton'
import Footprint from '../Footprint'
import SearchForm from '../SearchForm'

export default function Navbar() {
  return (
    <Box px={4} maxW={'3xl'} m={'auto'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link
          href="/"
          className="group text-xl p-2 font-semibold inline-flex items-center gap-1.5 tracking-tighter"
        >
          <Footprint />
          Sebass
        </Link>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <SearchForm />
            <ToggleColorMode />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
