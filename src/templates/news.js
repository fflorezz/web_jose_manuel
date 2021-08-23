import React from 'react'

import Layout from './../components/layout'
import PlayTitle from './../components/play-title'

const News = ({ pageContext: { news } }) => {
  return (
    <Layout>
      <PlayTitle>{news.title}</PlayTitle>
      <h3 className="mt-6 text-gray-500">
        {news.source} - {news.date}
      </h3>
      {news.author && <p className="font-medium ">Por {news.author}</p>}
      <img className="w-full mt-2 mb-10" src={news.images[0].url} alt="" />
      {news.sections.map((section, idx) => {
        return (
          <div key={idx}>
            {section.subtitle && (
              <div className="text-gray-600 text-xl mt-6 mb-4">
                {section.subtitle}
              </div>
            )}
            {section.paragraphs.map((par, idx) => {
              return <p key={idx}>{par}</p>
            })}
          </div>
        )
      })}
    </Layout>
  )
}

export default News
