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
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    transform: scale(1.08);
  }
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
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  position: relative;
  background: white;

  width: 23em;
  height: 23em;

  margin: 0 auto;

  animation-name: ${rollIn};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  transform: rotateX(55deg) rotateY(0deg) rotateZ(${props => props.deg || 0}deg)
    translateZ(1px);
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
`

const Vert = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
  perspective: 600px;
`

const Area = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  height: 100%;
  width: 100%;
  min-height: 3.3em;

  font-size: 2em;
  color: #555;
  position: relative;

  user-select: none;

  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: translateZ(100px);
    transform-style: preserve-3d;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
      0 5px 15px rgba(0, 0, 0, 0.07);
    background: linear-gradient(45deg, #00ffa1, aqua);
    color: white;
    border: 3px solid white;
  }
`

// ${'' /* transform: rotateX(180deg) translateZ(-100px); */}

const rotatingCircle = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`

const AlchemistCircle = styled.div`
  position: absolute;
  top: -4em;
  bottom: 0;
  left: -4em;
  right: 0;
  width: 30em;
  height: 30em;
  z-index: 0;

  opacity: 0.5;
  pointer-events: none;
  background-image: url('http://upload.wikimedia.org/wikipedia/commons/1/1b/Alchemic_Circle_FMA_Element.svg');
  background-size: cover;

  animation-name: ${rotatingCircle};
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  transition: all 1s ease-in-out;

  transform: rotateZ(${props => props.deg || 0}deg);
`

const GameGrid = ({deg, areas, onClick}) => (
  <Perspective>
    <GridArea deg={deg}>
      <AlchemistCircle />
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

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  width: 100%;
  z-index: 1;
`

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
    deg: 0,
    answers: [],
    areas: [['', 'X', ''], ['IX', 'IV', 'I'], ['', 'VII', '']]
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

    console.info(x, y, num)

    if (this.state.deg > 200) {
      areas[y][x] = 'VI'
    }

    if (num === 'X') {
      this.setState({deg: this.state.deg + 20, areas})
    } else if (num === 'VII') {
      this.setState({deg: this.state.deg - 20, areas})
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
                  ที่นาแต่ละแปลงมีคนอยู่ดังนี้ ถ้าคุณเป็นพลเอก ปลายุทธ์
                  จันทร์อังคาร คุณจะสั่งอพยพใครก่อน
                </Objective>
              </Card>
            </Col>
            <Col>
              <GameGrid
                deg={this.state.deg}
                areas={this.state.areas}
                onClick={this.handleTurn}
              />
            </Col>
          </Row>
        </Container>
      )}
    </Page>
  )
}

export default App(Game)
