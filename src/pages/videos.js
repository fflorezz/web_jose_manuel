import React from 'react'
import PageTitle from '../components/page-title'
import Layout from './../components/layout'

import './video.css'

const Videos = () => {
  return (
    <Layout>
      <PageTitle>Videos</PageTitle>
      <div className="iframe-container mt-10">
        <iframe
          className=""
          width="853"
          height="480"
          src="https://www.youtube.com/embed/rlTen1-0v_Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  )
}

export default Videos
