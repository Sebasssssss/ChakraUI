import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

function SearchForm() {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup display={'inline-flex'} alignItems="center">
        <InputLeftElement className="opacity-40">
          <Button type="submit" bg={'none'}>
            <SearchIcon />
          </Button>
        </InputLeftElement>
        <Input onChange={handleChange} placeholder="Search here!" />
      </InputGroup>
    </form>
  )
}

export default React.memo(SearchForm)
