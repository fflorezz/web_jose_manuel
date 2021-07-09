exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
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

  if (result.errors) {
    reporter.panic('failed to create plays', result.errors)
  }

  const plays = result.data.site.siteMetadata.obras

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
}
