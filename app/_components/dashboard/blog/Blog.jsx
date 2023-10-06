"use client"

import { BsCardImage } from 'react-icons/bs'
import {
    Container,
    SectionTitle,
    CardsContainer,
    Card,
    CardImage,
    CardImagePlaceholder,
    Placeholder,
    Content,
    Title,
    Summary,
} from "./Elements"

const Blog = ({ posts }) => {

    return (
        <Container>
            <SectionTitle>Blog</SectionTitle>
            <CardsContainer>
                {
                    posts.map(post => {
                        return(
                            <Card key={post.node.slug} href={`blog/${encodeURIComponent(post.node.slug)}`}>
                                {
                                    post.node.featuredImage ?
                                    <CardImage src={post.node.featuredImage.node.sourceUrl} alt="" /> :
                                    <CardImagePlaceholder><Placeholder><BsCardImage /></Placeholder></CardImagePlaceholder>
                                }
                                <Content>
                                    <Title>{post.node.title}</Title>
                                    <Summary dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                                </Content>
                            </Card>
                        )
                    })
                }
            </CardsContainer>
        </Container>
    )
}

export default Blog