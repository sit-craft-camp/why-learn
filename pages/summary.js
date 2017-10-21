import React from 'react'
import styled, {keyframes} from 'styled-components'
import Particle from 'react-particles-js'
import Ink from 'react-ink'
import Router from 'next/router'

import App from '../components/App'
import Button from '../components/Button'
import Jobs from '../components/Jobs'
import {jobs} from '../components/Landing'
import {Page, Card, particle, fadeIn} from '../components/Layout'

const Heading = styled.h1`
  margin: 0;
  font-size: 2.2em;
  line-height: 1.5em;
  text-align: center;
  font-weight: 300;
  font-family: Prompt, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: 0.07em;
  color: #777;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 0em 3em;
`

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2.4em;
  margin-bottom: 1.8em;
  text-align: center;
`

const Bold = styled.strong`font-weight: 600;`

const result = () => (
  <Page>
    <Particle {...particle} />
    <Container>
      <Card>
        <Heading>
          ยินดีด้วย! คุณเหมาะกับอาชีพ <Bold>นายกรัฐมนตรี</Bold>
        </Heading>
      </Card>
    </Container>
  </Page>
)

export default App(result)
