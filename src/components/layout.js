import React from "react";
import Helmet from "react-helmet";
import Header from "./header";

import useSiteMetadata from "../hooks/use-sitemetadata";

import "./layout.css";

export default function Layout({ children }) {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="es" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </div>
  );
}
