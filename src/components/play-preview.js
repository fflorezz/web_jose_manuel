import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

const PlayPreview = ({ play, idx }) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4 grid-flow-col-dense">
      <div className={idx % 2 === 0 ? '' : 'order-last'}>
        <StaticImage
          src="https://res.cloudinary.com/dnenhfh4v/image/upload/v1623202532/web_juan_manuel/jm-port-01-md_xz9eoc.jpg"
          alt="retrato José Manuel Freidel"
          aspectRatio={16 / 9}
        />
      </div>
      <div className="flex flex-col px-10 items-center justify-center bg-indigo-600 text-white  text-center cursor-pointer hover:bg-indigo-800">
        <h3 className="text-4xl font-medium">{play.title}</h3>
        <div className="inline-block border-t-4 pt-6 mt-6">
          <p className="text-white text-3xl pb-0 font-medium">{play.year}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayPreview
