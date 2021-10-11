import * as React from 'react'

import Layout from '../components/layout'
import SocialLinks from '../components/social-links'

const IndexPage = () => {
  return (
    <Layout>
      <div className="w-full mt-16 border-transparent relative">
        <SocialLinks></SocialLinks>
        <img
          style={{ zIndex: '-10' }}
          className="h-screen lg:h-screen object-cover relative -mt-16"
          src="https://res.cloudinary.com/dnenhfh4v/image/upload/v1623207316/web_juan_manuel/jm-hero-lg_rpkouc.jpg"
          alt="Retrato José Manuel Freidel"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
