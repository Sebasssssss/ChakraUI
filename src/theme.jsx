import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f8ede3', '#16161b')(props),
      color: mode('#18181b', '#d4d4d8')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Badge: {
    baseStyle: props => ({
      bg: mode('#d0b8a8', '#ea047e50')(props),
      backgroundColor: mode('#d0b8a8', '#ea047e50')(props),
      color: mode('black', '#ea047e')(props),
      textColor: mode('black', '#ea047e')(props)
    })
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false
}

const theme = extendTheme({ config, styles, components })
export default theme
