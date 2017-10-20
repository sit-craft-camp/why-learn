import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Particle from 'react-particles-js'

import App from '../components/App'
import Question from '../components/Question'
import Wave from '../components/Wave'
import {Character} from '../components/Selector'
import {Page, Card, particle, fadeIn} from '../components/Layout'
import GameEntry from '../components/GameEntry'
import {questions} from '../components/Landing'

const Container = styled.div`
  max-width: 800px;
  padding: 0 2.5em;
`

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const Zeeza = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(/static/scene_intro.gif);
  mix-blend-mode: lighten;

  animation-name: ${fadeIn};
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
`

class Game extends Component {
  state = {
    loading: true,
    intro: false,
    ready: false,
    index: 0,
    answers: []
  }

  async componentDidMount() {
    await delay(3000)
    this.setState({loading: false, intro: true})
    await delay(5000)
    this.setState({intro: false, ready: true})
  }

  handleSubmit = () => {}

  render = () => (
    <Page>
      <Particle {...particle} />
      {this.state.intro && <Zeeza />}
      {this.state.loading && <GameEntry />}
      {this.state.ready && (
        <Container>
          <Row>
            <Col>
              <Character src="/static/president.png" />
            </Col>
            <Col>
              <Question
                id={this.state.index}
                text={questions[this.state.index].question}
                choices={questions[this.state.index].choices}
                answer={this.state.answers[this.state.index]}
                onSubmit={this.handleSubmit}
              />
            </Col>
          </Row>
        </Container>
      )}
    </Page>
  )
}

export default App(Game)
