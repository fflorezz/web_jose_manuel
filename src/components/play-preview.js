import React from 'react'
import { Link } from 'gatsby'

const PlayPreview = ({ play, idx }) => {
  if (!play.images) return null

  return (
    <article className="mb-6 md:mb-4 md:grid md:grid-cols-2 md:gap-4 md:grid-flow-col-dense">
      <div className={idx % 2 === 0 ? '' : 'order-last'}>
        <img
          src={play.images[0].url}
          alt={play.title}
          className="md:h-96 w-full object-cover"
        />
      </div>

      <Link
        to={play.slug}
        className="p-4 flex flex-col items-center justify-center bg-indigo-600 text-white  text-center cursor-pointer hover:bg-indigo-900 transition duration-300 ease-in-out md:py-0 md:px-10"
      >
        <h3 className="text-2xl sm:text-3xl font-medium md:text-4xl">
          {play.title}
        </h3>
        <div className="hidden md:inline-block md:border-t-2 md:px-6 md:pt-6 md:mt-6">
          <p className="text-white text-3xl pb-0 font-medium">{play.year}</p>
        </div>
      </Link>
    </article>
  )
}

export default PlayPreview
