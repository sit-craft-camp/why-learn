import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Particle from 'react-particles-js'
import Ink from 'react-ink'

import {Card} from '../components/Layout'
import StandardButton from '../components/Button'

const Text = styled.h1`
  color: #777;
  font-family: Prompt, Arial, sans-serif;
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 1.4em;
  line-height: 1.3em;
`

const primary = '#007bff'
const primaryHover = '#036cdd'

const chosen = '#9b59b6'
const chosenHover = '#8e44ad'

const Button = StandardButton.extend`
  background: ${props => (props.chosen ? chosen : primary)};
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
  margin: 0.5em auto 0.5em auto;

  &:hover {
    background: ${props => (props.chosen ? chosenHover : primaryHover)};
    transform: translateY(-0.1em);
  }
`

const Question = ({text, choices, answer, id, onSubmit}) => (
  <Card>
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
)

export default Question
