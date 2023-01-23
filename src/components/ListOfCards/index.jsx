import React from 'react'
import { Link } from 'react-router-dom'

export default function ListOfCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
      <Link to="/page2" className="w-full mb-4 text-center">
        <img
          src="https://i.pinimg.com/564x/5e/2b/6b/5e2b6b57e68519bee6c9db90eeb18089.jpg"
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-32 object-cover"
        />
        <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
        <h1 className="text-sm opacity-70">Subtitle</h1>
      </Link>
      <Link to="/page2" className="w-full mb-4 text-center">
        <img
          src="https://i.pinimg.com/564x/5e/2b/6b/5e2b6b57e68519bee6c9db90eeb18089.jpg"
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-32 object-cover"
        />
        <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
        <h1 className="text-sm opacity-70">Subtitle</h1>
      </Link>
      <Link to="/page2" className="w-full mb-4 text-center">
        <img
          src="https://i.pinimg.com/564x/5e/2b/6b/5e2b6b57e68519bee6c9db90eeb18089.jpg"
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-32 object-cover"
        />
        <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
        <h1 className="text-sm opacity-70">Subtitle</h1>
      </Link>
      <Link to="/page2" className="w-full mb-4 text-center">
        <img
          src="https://i.pinimg.com/564x/5e/2b/6b/5e2b6b57e68519bee6c9db90eeb18089.jpg"
          className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-32 object-cover"
        />
        <h6 className="text-md mt-3 font-mplus font-bold">Title</h6>
        <h1 className="text-sm opacity-70">Subtitle</h1>
      </Link>
    </div>
  )
}
