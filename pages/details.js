import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Col} from 'reactstrap'
import Ink from 'react-ink'
import Link from 'next/link'

import App from '../components/App'
import StandardButton from '../components/Button'
import Jobs from '../components/Jobs'
import {jobs} from '../components/Landing'

import {Page, Card, fadeIn} from '../components/Layout'

const Tagline = styled.h1`
  display: flex;
  color: white;
  font-family: Roboto;
  font-weight: 300;
  font-size: 2.4em;

  margin-bottom: 1.3em;

  @media screen and (max-width: 680px) {
    display: block;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0.8em;
  }
`

const Button = StandardButton.extend`
  margin-top: 2em;

  &:hover {
    transform: translateY(-0.3em);
  }

  @media screen and (max-width: 680px) {
    bottom: 1em;
  }
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15em;
  margin-top: 5em;
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  max-width: 680px;
  margin: 0 auto;
  padding: 0em 3em;
`

const Subjects = ({url: {query: {id}}}) => (
  <Page>
    <Tagline>
      Why Learn <b>&nbsp;{id}</b>?
    </Tagline>
    <Container>
      <Jobs id={id} data={jobs} />
      <Link href="/question" passHref prefetch>
        <Button>
          <Ink />
          ทดสอบความชอบของคุณ
        </Button>
      </Link>
    </Container>
  </Page>
)

export default App(Subjects)
