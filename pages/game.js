import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Particle from 'react-particles-js'

import App from '../components/App'
import Question from '../components/Question'
import Wave from '../components/Wave'
import {Character} from '../components/Selector'
import {Page, Card, particle} from '../components/Layout'
import GameEntry from '../components/GameEntry'
import {questions} from '../components/Landing'

const Container = styled.div`
  max-width: 800px;
  padding: 0 2.5em;
`

class Game extends Component {
  state = {
    loading: true,
    index: 0,
    answers: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000)
  }

  handleSubmit = () => {}

  render = () => (
    <Page>
      <Particle {...particle} />
      {this.state.loading ? (
        <GameEntry />
      ) : (
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
