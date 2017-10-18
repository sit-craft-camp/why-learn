import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
  width: 12em;

  margin-right: 1.5em;
  margin-bottom: 1.5em;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
`

const Text = styled.h1`
  margin: 0;
  font-family: Helvetica Neue;
  font-size: 1.4em;
  font-weight: 300;
  padding: 1em 0.5em;
`

const Card = ({title, url}) => (
  <Wrapper>
    <Image src={url} />
    <Text>{title}</Text>
  </Wrapper>
)

export default Card
