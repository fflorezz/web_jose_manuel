import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="w-full">
        <StaticImage
          src="../images/jm-hero.jpg"
          alt="Retrato José Manuel Freidel"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
