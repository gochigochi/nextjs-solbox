import Post from "@/app/_components/dashboard/post/Post"

const PostPage = async ({ params }) => {

    let res

    try {

        res = await fetch("https://solbox.energy/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
                    query {
                        post(id: "${params.slug}", idType: SLUG) {
                        content
                        featuredImage {
                            node {
                            altText
                            sourceUrl
                            }
                        }
                        slug
                        title
                        }
                    }
                `
            })
        })
    
    } catch(err) {

        console.log("Error fetching post: ", err)

    }

    const json = await res.json()
    const post = json.data.post

    return <Post post={post} />
}

export default PostPage