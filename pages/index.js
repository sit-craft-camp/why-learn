import React, {Component} from 'react'
import {keyframes} from 'emotion'
import styled from 'react-emotion'
import axios from 'axios'
import Typist from 'react-typist'
import {Container, Row, Col} from 'reactstrap'

import App from '../components/App'
import Card from '../components/Card'

import Todo from '../components/Todo'
import Login from '../components/Login'

// prettier-ignore
import {Page, Tagline, Bold, Character, Title, getChar, subjects} from '../components/Landing'

const Logo = styled.h1`
  font-family: Helvetica Neue;
  font-size: 4.6em;
  font-weight: 300;
  color: #555;
`

const Fold = ({index}) => (
  <Page>
    <Logo>WHY LEARN</Logo>
    <Tagline>
      Why do we learn
      <Title index={index} />
    </Tagline>
    <div />
  </Page>
)

class Slogan extends Component {
  state = {
    chara: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const {chara} = this.state

      this.setState({chara: chara < subjects.length - 1 ? chara + 1 : 0})
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render = () => (
    <Row>
      {subjects.map(subject => (
        <Col>
          <Card title={subject.name} url={`/static/${subject.image}.png`} />
        </Col>
      ))}
    </Row>
  )
}

/* <Fold index={this.state.chara} /> */

const Landing = () => (
  <Container>
    <Todo />
    {/* <Login /> */}
  </Container>
)

export default App(Landing)
