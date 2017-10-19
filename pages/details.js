import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Container, Row, Col} from 'reactstrap'

import App from '../components/App'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Nav = () => (
  <div>
    <button>NEXT</button>
    <button>PREV</button>
  </div>
)

const Subjects = ({url: {query: {id}}}) => (
  <Page>
    <Row>
      <Col>
        <Character src="http://via.placeholder.com/500x600" />
      </Col>
      <Col>
        <Detail />
      </Col>
    </Row>
    <Nav />
  </Page>
)

export default App(Subjects)
