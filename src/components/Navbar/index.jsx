import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Link
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import ToggleColorMode from '../toggleThemeButton'
import Footprint from '../Footprint'

export default function Navbar() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link
          href="#"
          className="group text-lg p-2 font-semibold inline-flex items-center gap-1.5 text-center tracking-tighter"
        >
          <Footprint />
          Sebass
        </Link>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Box display={'inline-flex'} alignItems="center">
              <InputGroup>
                <InputLeftElement className="opacity-40">
                  <Button type="submit" bg={'none'}>
                    <SearchIcon />
                  </Button>
                </InputLeftElement>
                <Input placeholder="Search here!" />
              </InputGroup>
            </Box>
            <ToggleColorMode />
            <Menu>
              <MenuButton
                bg={useColorModeValue('gray.100', 'gray.900')}
                _hover={{
                  backgroundColor: useColorModeValue('gray.300', 'gray.800')
                }}
                className="rounded-lg border px-3 bg-none"
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
