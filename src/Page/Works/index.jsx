import React from 'react'
import Layout from '../../components/Layout'
import { Link as ReactLink } from 'react-router-dom'
import { Text, Link } from '@chakra-ui/react'
import Section from '../../components/Section'

export default function Works() {
  return (
    <Layout delay="0.2">
      <Text
        fontSize="xl"
        textAlign="left"
        mb="4"
        fontWeight="bold"
        className="font-mplus"
      >
        Works
      </Text>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            as={ReactLink}
            to="/Detail/personalBlog"
            className="w-full mb-4 text-center"
          >
            <img
              src="https://i.pinimg.com/564x/ba/01/53/ba0153e8eeb70803363fac68e84a266d.jpg"
              className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
            />
            <h6 className="text-md mt-3 font-mplus font-bold">Goku</h6>
            <h1 className="text-sm opacity-70">Subtitle</h1>
          </Link>
          <Link
            as={ReactLink}
            to="/Detail/footballWeb"
            className="w-full mb-4 text-center"
          >
            <img
              src="https://i.pinimg.com/564x/d5/13/96/d51396e503335e73b94f6e3ebb9ec1ba.jpg"
              className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
            />
            <h6 className="text-md mt-3 font-mplus font-bold">Goku</h6>
            <h1 className="text-sm opacity-70">Subtitle</h1>
          </Link>
          <Link
            as={ReactLink}
            to="/works/detail"
            className="w-full mb-4 text-center"
          >
            <img
              src="https://i.pinimg.com/564x/77/47/7a/77477a61e793deba9717e0d8e2502df4.jpg"
              className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
            />
            <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
            <h1 className="text-sm opacity-70">Subtitle</h1>
          </Link>
          <Link as={ReactLink} to="/detail" className="w-full mb-4 text-center">
            <img
              src="https://i.pinimg.com/564x/98/0e/d6/980ed60dda5b23b7499bd4a46269952c.jpg"
              className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
            />
            <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
            <h1 className="text-sm opacity-70">Subtitle</h1>
          </Link>
        </div>
      </Section>
    </Layout>
  )
}
