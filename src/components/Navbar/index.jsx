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
  InputLeftElement
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import ToggleColorMode from '../toggleThemeButton'
import { Form } from 'react-router-dom'
import Footprint from '../Footprint'

export default function Navbar() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box display={'inline-flex'} alignItems="center">
          <Footprint />
          Sebass
        </Box>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Box display={'inline-flex'} alignItems="center">
              <InputGroup>
                <InputLeftElement opacity={'40%'}>
                  <Button type="submit" className="bg-none hover:bg-none">
                    <SearchIcon />
                  </Button>
                </InputLeftElement>
                <Input placeholder="Search here!" />
              </InputGroup>
            </Box>
            <ToggleColorMode />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'7'}
                variant={'link'}
                border="1px"
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
