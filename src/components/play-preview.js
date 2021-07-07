import React from 'react'
import { Link } from 'gatsby'

const PlayPreview = ({ play, idx }) => {
  if (!play.images) return null

  return (
    <article className="mb-4 grid grid-cols-2 gap-4 grid-flow-col-dense">
      <div className={idx % 2 === 0 ? '' : 'order-last'}>
        <img
          src={play.images[0].url}
          alt={play.title}
          className="h-96 w-full object-cover"
        />
      </div>

      <Link
        to={play.slug}
        className="flex flex-col px-10 items-center justify-center bg-indigo-600 text-white  text-center cursor-pointer hover:bg-indigo-900 transition duration-300 ease-in-out"
      >
        <h3 className="text-4xl font-medium">{play.title}</h3>
        <div className="inline-block border-t-2 px-6 pt-6 mt-6">
          <p className="text-white text-3xl pb-0 font-medium">{play.year}</p>
        </div>
      </Link>
    </article>
  )
}

export default PlayPreview
