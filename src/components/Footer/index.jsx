import React from 'react'

export default function Footer() {
  return (
    <ul className="inline-flex list-none h-10 w-full pt-10 justify-center">
      <li className="footerDots group">
        <span className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-none before:h-2 before:w-2 before:bg-zinc-300 before:left-[50%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)]  before:translate-2/4 before:rotate-45">
          Github
        </span>
      </li>
      <li className="footerDots group">
        <span className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-none before:h-2 before:w-2 before:bg-zinc-300 before:left-[50%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)]  before:translate-2/4 before:rotate-45">
          Facebook
        </span>
      </li>
      <li className="footerDots group">
        <span className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-none before:h-2 before:w-2 before:bg-zinc-300 before:left-[50%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)]  before:translate-2/4 before:rotate-45">
          Twitter
        </span>
      </li>
    </ul>
  )
}
