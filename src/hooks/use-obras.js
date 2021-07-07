import { graphql, useStaticQuery } from 'gatsby'

const useObras = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          obras {
            id
            slug
            title
            year
            intro {
              character
              paragraphs
            }
            images {
              url
            }
            abstract {
              paragraphs
            }
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.obras
}

export default useObras
