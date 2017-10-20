import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Particle from 'react-particles-js'
import Ink from 'react-ink'
import Router from 'next/router'
import jump from 'jump.js'

import App from '../components/App'
import {Character} from '../components/Selector'
import {Page, Card, particle} from '../components/Layout'

const Text = styled.h1`
  color: #777;
  font-family: Prompt, Arial, sans-serif;
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 1.4em;
  line-height: 1.3em;
`

const Container = styled.div`
  max-width: 600px;
  padding: 2em 1.5em;
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

const characters = ['ssj', 'pavin']

const Question = ({text, choices, answer, id, onSubmit}) => (
  <Box>
    <Character src={`/static/${characters[id]}.png`} />
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
              {choice.text}
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
  </Box>
)

const questions = [
  {
    question:
      'คุณจะเริ่มต้นแก้ปัญหาอย่างไร หากโรงเรียนของคุณเกิดอุทกภัยขึ้นอย่างไม่มีสาเหตุ ทุกคนในโรงเรียนเกิดความวุ่นวาย และยังมีนักเรียนบางคนติดอยู่ในห้องเรียนอีกด้วย',
    choices: [
      {
        text: 'หาต้นเหตุ',
        score: {dictator: 2}
      },
      {
        text: 'สังเกตสภาพแวดล้อม',
        score: {dictator: 1}
      },
      {
        text: 'ตั้งสติ',
        score: {dictator: 3}
      }
    ]
  },
  {
    question:
      'สโตร์แฟลชเปียโนอัลมอนด์เซอร์วิส สปอร์ต เฟรมฉลุย นพมาศเอาต์โอเปร่า',
    choices: [
      {
        text: 'สุนทรีย์ มิวสิคความหมาย ยากูซ่าผู้นำ',
        score: {dictator: 2}
      },
      {
        text: 'สุนทรีย์ มิวสิคความหมาย ยากูซ่าผู้นำ',
        score: {dictator: 1}
      },
      {
        text: 'สุนทรีย์ มิวสิคความหมาย ยากูซ่าผู้นำ',
        score: {dictator: 3}
      }
    ]
  }
]

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
          <Question
            key={index}
            id={index}
            text={item.question}
            choices={item.choices}
            answer={this.state.answers[index]}
            onSubmit={this.handleSubmit}
          />
        ))}
      </Container>
    </Page>
  )
}

export default App(PsychoQuestion)
