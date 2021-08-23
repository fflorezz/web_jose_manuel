import React from 'react'
import { Link } from 'gatsby'

const NewsPreview = ({ news, idx }) => {
  if (!news.images.length) return null

  return (
    <article className="pl-0 mb-6 md:mb-4 md:grid md:grid-cols-12 md:gap-4 md:grid-flow-col-dense lg:pl-4">
      <div className="py-4 mt-6 flex flex-col col-span-7 md:py-0 md:px-0 sm:px-0">
        <h3 className="text-gray-500 text-2xl sm:text-2xl font-bold md:text-3xl">
          {news.title}
        </h3>
        <h4 className="mt-2 text-gray-500 text-lg font-bold">
          {news.source} - {news.date}
        </h4>
        {news.author && <p className=" pb-0 font-medium">Por {news.author}</p>}
        <p className="mt-6 pb-0">{news.abstract.paragraphs[0]}</p>
        <Link
          to={news.slug}
          className="transition duration-300 ease-in-out text-indigo-600 font-bold cursor-pointer hover:text-indigo-900"
        >
          Leer mas...
        </Link>
      </div>
      <div className="col-span-5">
        <img
          src={news.images[0].url}
          alt={news.title}
          className="md:h-72 w-full object-cover"
        />
      </div>
    </article>
  )
}

export default NewsPreview
