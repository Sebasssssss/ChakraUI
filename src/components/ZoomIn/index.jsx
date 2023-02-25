import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ZoomIn({ children }) {
  return <Zoom>{children}</Zoom>
}
