import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f8ede3', '#16161b')(props)
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

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
