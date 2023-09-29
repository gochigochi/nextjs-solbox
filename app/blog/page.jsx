import Blog from "@/components/blog/Blog"

const BlogPage = async () => {

  let res 

  try {

    res = await fetch("https://solbox.energy/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query NewQuery {
          posts {
            edges {
              node {
                content
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                slug
                title
                date
                excerpt
              }
            }
          }
        } 
        `
      })
    })

  } catch (error) {

    console.log("Error fetching WP Posts....", error)

  }

  const json = await res.json()
  const posts = json.data.posts.edges

  return <Blog posts={posts} />
}

export default BlogPage