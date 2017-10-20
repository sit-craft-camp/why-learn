import React from 'react'
import styled, {keyframes} from 'styled-components'
import Particle from 'react-particles-js'

import {Character} from '../pages/details'

// import {particle} from './Hero'

const particle = {
  style: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  params: {
    particles: {
      number: {
        value: 35,
        density: {
          enable: true,
          value_area: 800
        }
      },
      opacity: {
        value: 0.8,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.5,
          sync: false
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        }
      }
    }
  }
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(2em) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1.0);
  }
`

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;

  background: linear-gradient(45deg, #00ffa1, aqua);
`

// background: repeating-linear-gradient(
//   45deg,
//   #00ffa1,
//   #00ffa1 15px,
//   #00ffff 15px,
//   #00ffff 30px
// );

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  background: white;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  padding: 1.4em 3em;

  animation-name: ${fadeIn};
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
`

const Heading = styled.h1`
  margin: 0;
  font-size: 4.2em;
  line-height: 1.3em;
  font-weight: 400;
  font-family: Roboto, Helvetica Neue, sans-serif;
  letter-spacing: 0.2em;

  background: linear-gradient(45deg, #00ffa1, aqua);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

const SubHeading = styled.h1`
  margin: 0;
  color: #777;
  font-size: 1.8em;
  line-height: 1.5em;
  font-weight: 300;
  font-family: Roboto, Helvetica Neue, sans-serif;
  letter-spacing: 0.25em;
`

const GameEntry = () => (
  <Backdrop>
    <Particle {...particle} />
    <Character src="/static/social.png" />
    <Box>
      <SubHeading>WELCOME TO</SubHeading>
      <Heading>DEKKAPOK</Heading>
    </Box>
  </Backdrop>
)

export default GameEntry
