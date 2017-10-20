import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import Particles from 'react-particles-js'
import Ink from 'react-ink'
import jump from 'jump.js'

import Slogan from '../components/Slogan'

// Landing Fade In
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(4em) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1.0);
  }
`

// 110 - 220
const hueRotate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  45% {
    filter: hue-rotate(110deg);
  }

  55% {
    filter: hue-rotate(220deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
`

const Backdrop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(45deg, #3a3897, #a3a1ff);
  width: 100%;
  height: 100vh;
  animation-name: ${hueRotate};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
  border-bottom: 2px solid white;
`

const Logo = styled.img`
  width: 60%;
  max-width: 600px;
  user-select: none;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
`

const ScrollDown = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 2em;
  width: 50px;
  height: 50px;
  z-index: 2;

  border: 2px solid #ffffff;
  border-radius: 50%;

  font-size: 1.8em;
  background: linear-gradient(45deg, #333, #5a5454);
  cursor: pointer;
  fill: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    background: #39393c;
    box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
  }
`

const particle = {
  style: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  params: {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800
        }
      },
      opacity: {
        value: 0.5,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
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

const HeroBanner = styled.img`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 36%;
  pointer-events: none;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
`

const Heading = styled.div`
  width: 100%;
  height: 50%;
  top: 8%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  pointer-events: none;
`

const Hero = () => (
  <Backdrop>
    <Particles {...particle} />
    <Heading>
      <Logo src="/static/logo.png" />
      <Slogan />
    </Heading>
    <ScrollDown viewBox="0 0 24 24" onClick={() => jump('.menus')}>
      <path d="M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z" />
    </ScrollDown>
    <HeroBanner src="/static/banner.png" />
  </Backdrop>
)

export default Hero
