exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultPlays = await graphql(`
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

  if (resultPlays.errors) {
    reporter.panic('failed to create plays', resultPlays.errors)
  }

  const plays = resultPlays.data.site.siteMetadata.obras

  plays.forEach(play => {
    actions.createPage({
      path: `obras/${play.slug}`,
      component: require.resolve('./src/templates/play.js'),
      context: {
        slug: play.slug,
        play,
      },
    })
  })

  const resultNews = await graphql(`
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

  if (resultNews.errors) {
    reporter.panic('failed to create plays', resultNews.errors)
  }

  const newsList = resultNews.data.site.siteMetadata.noticias

  newsList.forEach(news => {
    actions.createPage({
      path: `noticias/${news.slug}`,
      component: require.resolve('./src/templates/news.js'),
      context: {
        slug: news.slug,
        news,
      },
    })
  })
}
