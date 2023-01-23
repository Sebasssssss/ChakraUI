import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = {
  config: {
    intialColorMode: 'dark',
    disableTransitionOnChange: false,
    useSystemColorMode: true
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('#f8ede3', '#141416')(props)
      }
    })
  }
}

export default extendTheme(theme)
