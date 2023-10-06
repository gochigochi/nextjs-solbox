"use client"

import { BsCardImage } from "react-icons/bs"
import {
    Container,
    Content,
    Body,
    Head,
    HeroImage,
    HeroPlaceholder,
    Overlay,
    Placeholder,
    Subtitle,
    TextContainer,
    Title,
} from "./Elements"

const Post = ({ post }) => {

    return (
        <Container>
            <Head>
                {
                    post.featuredImage ?
                        <HeroImage src={post.featuredImage.node.sourceUrl} alt="" /> :
                        <HeroPlaceholder><Placeholder><BsCardImage /></Placeholder></HeroPlaceholder>
                }
                <Overlay />
                <TextContainer>
                    <Subtitle>Solbox Blog</Subtitle>
                    <Title>{post.title}</Title>
                </TextContainer>
            </Head>
            <Body>
                <Content dangerouslySetInnerHTML={{ __html: post.content }} />
            </Body>
        </Container>
    )
}

export default Post