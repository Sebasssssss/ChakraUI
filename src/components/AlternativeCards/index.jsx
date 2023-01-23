import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'

export default function AlternativeCards() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        <Link to="/" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/ba/01/53/ba0153e8eeb70803363fac68e84a266d.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-44 object-cover"
          />
          <h6 className="text-xl mt-3 font-bold font-mplus">Title</h6>
          <h1 className="opacity-70">Subtitle</h1>
        </Link>
        <Link to="/" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/ba/01/53/ba0153e8eeb70803363fac68e84a266d.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-44 object-cover"
          />
          <h6 className="text-xl mt-3 font-bold font-mplus">Title</h6>
          <h1 className="opacity-70">Subtitle</h1>
        </Link>
        <Link to="/" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/ba/01/53/ba0153e8eeb70803363fac68e84a266d.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-44 object-cover"
          />
          <h6 className="text-xl mt-3 font-bold font-mplus">Title</h6>
          <h1 className="opacity-70">Subtitle</h1>
        </Link>
        <Link to="/" className="w-full mb-4 text-center">
          <img
            src="https://i.pinimg.com/564x/ba/01/53/ba0153e8eeb70803363fac68e84a266d.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-44 object-cover"
          />
          <h6 className="text-xl mt-3 font-bold font-mplus">Title</h6>
          <h1 className="opacity-70">Subtitle</h1>
        </Link>
      </div>
    </Layout>
  )
}
