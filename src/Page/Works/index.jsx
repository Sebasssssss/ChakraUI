import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

export default function Works() {
  return (
    <Layout delay="0.2">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        <Link to="/works/detail" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/ba/01/53/ba0153e8eeb70803363fac68e84a266d.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
          <h1 className="text-sm opacity-70">Subtitle</h1>
        </Link>
        <Link to="/works/detail" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/d5/13/96/d51396e503335e73b94f6e3ebb9ec1ba.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
          <h1 className="text-sm opacity-70">Subtitle</h1>
        </Link>
        <Link to="/detail" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/77/47/7a/77477a61e793deba9717e0d8e2502df4.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
          <h1 className="text-sm opacity-70">Subtitle</h1>
        </Link>
        <Link to="/detail" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/98/0e/d6/980ed60dda5b23b7499bd4a46269952c.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
          <h1 className="text-sm opacity-70">Subtitle</h1>
        </Link>
      </div>
    </Layout>
  )
}
