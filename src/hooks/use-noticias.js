import { graphql, useStaticQuery } from 'gatsby'

const useNoticias = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          noticias {
            id
            slug
            title
            source
            date
            author
            sections {
              subtitle
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

  return data.site.siteMetadata.noticias
}

export default useNoticias
