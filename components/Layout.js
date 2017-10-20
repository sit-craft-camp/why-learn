import React from 'react'
import styled, {keyframes} from 'styled-components'

// Fade In
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

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #00b7ff, #ffffc7);
  position: relative;

  border-top: 3px solid white;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #555;
  padding: 1.5em 1.5em 1.5em 1.9em;
  background: #ffffff;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  font-weight: 300;
  z-index: 1;

  animation-name: ${fadeIn};
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    transform: scale(1.05);
  }
`

export const particle = {
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
