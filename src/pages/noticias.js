import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import NewsPreview from './../components/news-preview'

import useNoticias from './../hooks/use-noticias'

const Obras = () => {
  const newsList = useNoticias()
  return (
    <Layout>
      <PageTitle>Noticias</PageTitle>
      <section className="mt-6">
        {newsList.map((play, idx) => {
          return <NewsPreview idx={idx} key={play.id} news={play} />
        })}
      </section>
    </Layout>
  )
}

export default Obras
