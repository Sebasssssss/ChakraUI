import React, { useCallback, useState } from 'react'
import { Link, Text, useColorModeValue } from '@chakra-ui/react'

function Dot({ to, title = 'Source', toCopy = 'Example', canCopy = false }) {
  const [copy, setCopy] = useState(false)

  const copyText = useCallback(() => {
    if (canCopy) {
      navigator.clipboard.writeText(toCopy)
      setCopy(true)
    }
    null
  }, [canCopy])

  return (
    <Link
      bg={useColorModeValue('#18181b', '#ffecef')}
      _hover={{ bg: useColorModeValue('#85586f', '#42032C') }}
      className="group footerDots"
      href={to}
      isExternal
      onClick={copyText}
    >
      <Text
        bg={useColorModeValue('white', '#42032c ')}
        _before={{ bg: useColorModeValue('white', '#42032C') }}
        className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-[''] before:h-2 before:w-2 before:left-[44%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:-translate-2/4 before:rotate-45 before:-bottom-[3px]"
      >
        {copy ? 'Copied!' : title}
      </Text>
    </Link>
  )
}

export default React.memo(Dot)
