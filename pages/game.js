import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import Particle from 'react-particles-js'

import App from '../components/App'
import Question from '../components/Question'
import Wave from '../components/Wave'
import {Character} from '../components/Selector'
import {Page, Card, particle, fadeIn} from '../components/Layout'
import GameEntry from '../components/GameEntry'
import {questions} from '../components/Landing'

const Container = styled.div`
  max-width: 1100px;
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

// <Question
//   id={this.state.index}
//   text={questions[this.state.index].question}
//   choices={questions[this.state.index].choices}
//   answer={this.state.answers[this.state.index]}
//   onSubmit={this.handleSubmit}
// />

const Perspective = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  perspective: 1000px;
  height: 100%;
  position: relative;
`

export const rollIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.8);
  }

  to {
    opacity: 1;
    transform: rotateX(55deg) rotateY(0deg) rotateZ(50deg) translateZ(1px);
  }
`

const GridArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20em;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  margin: 0 auto;
  margin-left: 5em;

  animation-name: ${rollIn};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  transform: rotateX(55deg) rotateY(0deg) rotateZ(50deg) translateZ(1px);
`

const Vert = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`

const Area = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;

  height: 100%;
  width: 100%;
  min-height: 3.3em;

  font-size: 2em;
  color: #555;

  user-select: none;

  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
  cursor: pointer;
  transform: rotateX(0deg);

  &:hover {
    transform-style: preserve-3d;

    background: #333;
    color: white;
  }
`

// ${'' /* transform: rotateX(180deg) translateZ(-100px); */}

const GameGrid = ({areas, onClick}) => (
  <Perspective>
    <GridArea>
      {areas.map((area, y) => (
        <Vert key={y}>
          {area.map((num, x) => (
            <Area key={x} onClick={() => onClick(x, y)}>
              {num}
            </Area>
          ))}
        </Vert>
      ))}
    </GridArea>
  </Perspective>
)

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Col = styled.div`width: 100%;`

const Objective = styled.div`
  font-family: Prompt, Roboto, Helvetica Neue, sans-serif;
  text-align: center;
  font-size: 1.3em;
  line-height: 1.5em;
  color: #777;
`

class Game extends Component {
  state = {
    loading: true,
    intro: false,
    ready: false,
    index: 0,
    answers: [],
    areas: [[2, 8, 3], [9, '+', 1], [5, 7, 6]]
  }

  async componentDidMount() {
    // await delay(3000)
    this.setState({loading: false, intro: true})
    // await delay(5000)
    this.setState({intro: false, ready: true})
  }

  handleTurn = (x, y) => {
    const areas = this.state.areas
    const num = areas[y][x]

    if (num > 0) {
      console.info(x, y, num)
      areas[y][x] -= 1

      this.setState({areas})
    }
  }

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
              <Card>
                <Objective>
                  ที่นาแต่ละแปลงมีคนอยู่ดังนี้ ถ้าคุณเป็นพลเอกปลายุทธ์
                  จันทร์อังคาร คุณจะสั่งอพยพใครก่อน
                </Objective>
              </Card>
            </Col>
            <Col>
              <GameGrid areas={this.state.areas} onClick={this.handleTurn} />
            </Col>
          </Row>
        </Container>
      )}
    </Page>
  )
}

export default App(Game)
