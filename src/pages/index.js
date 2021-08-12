import * as React from 'react'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="w-full mt-16 border-transparent">
        <img
          className="h-screen lg:h-full object-cover"
          src="https://res.cloudinary.com/dnenhfh4v/image/upload/v1623207316/web_juan_manuel/jm-hero-lg_rpkouc.jpg"
          alt="Retrato José Manuel Freidel"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
