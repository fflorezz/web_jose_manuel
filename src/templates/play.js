import React from 'react'

import Layout from './../components/layout'
import PlayTitle from './../components/play-title'

const Play = ({ pageContext: { play } }) => {
  return (
    <Layout>
      <PlayTitle>{play.title}</PlayTitle>
      <div className="text-gray-400 text-3xl font-medium mt-2">{play.year}</div>
      <div className="mt-10 italic text-justify px-4">
        {play.intro.map(fragment => {
          return (
            <div className="grid grid-cols-12">
              {fragment.character ? (
                <h5 className="text-sm font-medium text-gray-500">
                  {fragment.character + ':'}
                </h5>
              ) : null}
              {fragment.paragraphs ? (
                <div
                  className={fragment.character ? 'col-span-11' : 'col-span-12'}
                >
                  {fragment.paragraphs.map(par => (
                    <p className="text-sm">{par}</p>
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
      <div className="mt-10">
        {play.abstract.paragraphs.map(par => {
          return <p>{par}</p>
        })}
      </div>
    </Layout>
  )
}

export default Play
