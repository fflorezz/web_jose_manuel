import * as React from 'react'

import Layout from '../components/layout'
import SocialLinks from '../components/social-links'
import agenda_1 from '../images/jsmf-1.jpeg'
import agenda_2 from '../images/jsmf-2.jpeg'
import agenda_3 from '../images/jsmf-3.jpeg'

const IndexPage = () => {
  return (
    <Layout>
      <div className="w-full mt-16 border-transparent relative">
        <SocialLinks></SocialLinks>
        <div className="flex flex-col gap-2">
          <img
            className=" object-cover w-full"
            src={agenda_1}
            alt="Retrato José Manuel Freidel"
          />
          <img
            className=" object-cover w-full"
            src={agenda_2}
            alt="Retrato José Manuel Freidel"
          />
          <img
            className=" object-cover w-full"
            src={agenda_3}
            alt="Retrato José Manuel Freidel"
          />
        </div>
        <img
          style={{ zIndex: '-10' }}
          className="h-screen lg:h-screen object-cover relative -mt-16 hidden"
          src="https://res.cloudinary.com/dnenhfh4v/image/upload/v1623207316/web_juan_manuel/jm-hero-lg_rpkouc.jpg"
          alt="Retrato José Manuel Freidel"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
