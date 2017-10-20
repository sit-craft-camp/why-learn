import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Link from 'next/link'

import App from '../components/App'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Character = styled.img`
  height: 100%;
  width: 50%;
`

const Detail = () => (
  <div>
    <div>
      <h1>Thief</h1>
    </div>
    <div>
      <h3>Steal</h3>
    </div>
  </div>
)

const Heading = styled.h2``

const Desc = styled.span``

const Card = styled.div``

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1em;
  outline: none;
  border: none;
  padding: 0.6em 1.2em;
  color: #fff;
  background: #e74c3c;
  box-shadow: 0 4px #c0392b;
`

const Detail = () => (
  <Card>
    <Heading>Thief</Heading>
    <Desc>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius
      ullam nisi neque deleniti adipisci nobis blanditiis quia, id laboriosam
      sint quidem atque accusantium. Maxime est modi tempora illum, eos!
    </Desc>
  </Card>
)

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15em;
  margin-top: 5em;
`

const Nav = () => (
  <NavWrapper>
    <Button>PREV</Button>
    <Button>NEXT</Button>
  </NavWrapper>
)

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1000px;
  margin: 0 auto;
`
const Subjects = ({url: {query: {id}}}) => (
  <Page>
    <Container>
      <Row>
        <Col>
          <Character src="http://via.placeholder.com/700x600" />
        </Col>
        <Col>
          <Detail />
        </Col>
      </Row>
      <Nav />
    </Container>
  </Page>
)

export default App(Subjects)
