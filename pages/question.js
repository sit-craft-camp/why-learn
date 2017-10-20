import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Particle from 'react-particles-js'
import Ink from 'react-ink'
import Router from 'next/router'
import jump from 'jump.js'

import App from '../components/App'
import Question from '../components/Question'
import {Character} from '../components/Selector'
import {Page, Card, particle} from '../components/Layout'
import {questions} from '../components/Landing'

const Container = styled.div`
  max-width: 600px;
  padding: 2em 1.5em;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

const characters = ['president', 'police', 'lawgirl']

class PsychoQuestion extends Component {
  state = {
    answers: []
  }

  handleSubmit = (answer, choice) => {
    const answers = this.state.answers
    answers[answer] = choice
    this.setState({answers})

    setTimeout(() => {
      if (answer === questions.length - 1) {
        Router.push('/result')
      } else {
        jump(`.q${answer + 1}`)
      }
    }, 500)
  }

  render = () => (
    <Page>
      <Particle {...particle} />
      <Container>
        {questions.map((item, index) => (
          <Box key={index} className={`q${index}`}>
            <Character src={`/static/${characters[index]}.png`} />
            <Question
              id={index}
              text={item.question}
              choices={item.choices}
              answer={this.state.answers[index]}
              onSubmit={this.handleSubmit}
            />
          </Box>
        ))}
      </Container>
    </Page>
  )
}

export default App(PsychoQuestion)
