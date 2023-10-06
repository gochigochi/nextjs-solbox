"use client"

import {
    Container,
    Content,
    Header,
    Title,
  } from "./Elements"
  
  const Policy = ({ data }) => {
  
    return (
      <Container>
        <Header>
          <Title>{data.title}</Title>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: data.content }} />
      </Container>
    )
  }
  
  export default Policy