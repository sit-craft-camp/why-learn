import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Particle from 'react-particles-js'
import Ink from 'react-ink'
import jump from 'jump.js'

import App from '../components/App'
import {Character} from './details'
import {Page, Card, particle} from '../components/Layout'

const Text = styled.h1`
  color: #777;
  font-family: Prompt, Arial, sans-serif;
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 2em;
  line-height: 1.3em;
`

const Container = styled.div`
  max-width: 600px;
  padding: 2em 3em;
`

const primary = '#007bff'
const primaryHover = '#036cdd'

const chosen = '#9b59b6'
const chosenHover = '#8e44ad'

const Button = styled.button`
  position: relative;
  border: none;
  outline: none !important;
  width: 100%;

  font-weight: 300;

  text-decoration: none !important;
  color: #fff !important;
  background: ${props => (props.chosen ? chosen : primary)};
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);

  white-space: nowrap;
  padding: 8px 14px;
  border-radius: 4px;
  font-size: 1.25em;
  font-weight: 300;
  font-family: Prompt, Arial, sans-serif;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  margin: 0.5em auto 0.5em auto;

  &:hover {
    background: ${props => (props.chosen ? chosenHover : primaryHover)};
    transform: translateY(-0.1em);
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

const Question = ({text, choices, answer, id, onSubmit}) => (
  <Box>
    <Character src="/static/ssj.png" />
    <Card className={`q${id}`}>
      <Text>{text}</Text>
      <Row>
        {choices.map((choice, choiceIndex) => (
          <Col xs={12} key={choiceIndex}>
            <Button
              onClick={() => onSubmit(id, choiceIndex)}
              chosen={choiceIndex === answer}
            >
              <Ink />
              {choice}
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
  </Box>
)

const questions = [
  'สโตร์แฟลชเปียโนอัลมอนด์เซอร์วิส สปอร์ต เฟรมฉลุย นพมาศเอาต์โอเปร่า',
  'สโตร์แฟลชเปียโนอัลมอนด์เซอร์วิส สปอร์ต เฟรมฉลุย นพมาศเอาต์โอเปร่า'
]

const choices = [
  'สุนทรีย์ มิวสิคความหมาย ยากูซ่าผู้นำ',
  'สุนทรีย์ มิวสิคความหมาย ยากูซ่าผู้นำ',
  'สุนทรีย์ มิวสิคความหมาย ยากูซ่าผู้นำ'
]

class PsychoQuestion extends Component {
  state = {
    answers: []
  }

  handleSubmit = (answer, choice) => {
    const answers = this.state.answers
    answers[answer] = choice
    this.setState({answers})

    setTimeout(() => jump(`.q${answer + 1}`), 600)
  }

  render = () => (
    <Page>
      <Particle {...particle} />
      <Container>
        {questions.map((question, index) => (
          <Question
            key={index}
            id={index}
            text={question}
            choices={choices}
            answer={this.state.answers[index]}
            onSubmit={this.handleSubmit}
          />
        ))}
      </Container>
    </Page>
  )
}

export default App(PsychoQuestion)
