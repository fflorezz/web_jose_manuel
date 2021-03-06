import React from 'react'
import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import PlayPreview from '../../components/play-preview'

import useObras from '../../hooks/use-obras'

const Obras = () => {
  const plays = useObras().filter(play => {
    return play.images.length
  })
  return (
    <Layout>
      <PageTitle>Obras</PageTitle>
      <section className="mt-6">
        {plays.map((play, idx) => {
          return <PlayPreview idx={idx} key={play.id} play={play} />
        })}
      </section>
    </Layout>
  )
}

export default Obras
