import React from 'react'

import Layout from './../components/layout'
import PlayTitle from './../components/play-title'
import PlayIntro from './../components/play-intro'

const Play = ({ pageContext: { play } }) => {
  return (
    <Layout>
      <PlayTitle>{play.title}</PlayTitle>
      <div className="text-gray-400 text-3xl font-medium mt-2">{play.year}</div>
      <PlayIntro intro={play.intro} />
      <div className="mt-10">
        {play.abstract.paragraphs.map(par => {
          return <p>{par}</p>
        })}
      </div>
    </Layout>
  )
}

export default Play
