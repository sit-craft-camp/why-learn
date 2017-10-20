import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Col} from 'reactstrap'
import Ink from 'react-ink'
import Link from 'next/link'

import App from '../components/App'
import {subjects} from '../components/Landing'

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

// background: #f6f9fc;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #00ffa1, aqua);

  border-top: 3px solid white;
`

const Tagline = styled.h1`
  display: flex;
  color: white;
  font-family: Roboto;
  font-weight: 300;
  font-size: 2.4em;

  margin-bottom: 1.3em;
`

const Heading = styled.h2`
  margin-bottom: 0.6em;
  font-weight: 400;
`

const Desc = styled.span``

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #555;
  padding: 1.5em 1.5em 1.5em 1.9em;
  background: #ffffff;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  font-weight: 300;

  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    transform: scale(1.05);
  }
`

const primary = '#007bff'
const primaryHover = '#036cdd'

const Button = styled.a`
  position: relative;
  border: none;
  outline: none !important;
  font-weight: 300;

  margin-top: 1.8em;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  text-decoration: none !important;
  color: #fff !important;
  background: ${primary};

  white-space: nowrap;
  padding: 8px 14px;
  border-radius: 4px;
  font-size: 1.25em;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${primaryHover};
    transform: translateY(-0.3em);
  }
`

const NavButton = ({C, href, icon}) => (
  <Link href={href} passHref prefetch>
    <C>
      <Ink />
      <Icon viewBox="0 0 24 24">
        <path d={icon} />
      </Icon>
    </C>
  </Link>
)

const leftIcon = 'M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z'
const rightIcon = 'M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z'

const Detail = ({name, desc}) => (
  <Card>
    <Heading>{name}</Heading>
    <Desc>{desc}</Desc>
    <NavButton href="/details?id=Mathematics" icon={leftIcon} C={Left} />
    <NavButton href="/details?id=Computer" icon={rightIcon} C={Right} />
  </Card>
)

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15em;
  margin-top: 5em;
`

export const Character = styled.div`
  margin: 0 auto;
  min-height: 17em;
  height: 100%;
  width: 9em;
  background: linear-gradient(transparent, transparent, transparent, #06ffce), url("${props =>
    props.src}") no-repeat center;
  background-size: cover;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    transform: translateY(-1em) scale(1.06);
  }
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

const Center = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Icon = styled.svg`
  width: 2.1em;
  height: 2.1em;
  fill: white;
`

const NavBtn = styled.a`
  appearance: none;
  outline: none !important;

  position: absolute;
  padding: 0.18em;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${primary};
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    background: ${primaryHover};
    transform: scale(1.08);
  }
`

const Left = NavBtn.extend`left: -1.4em;`

const Right = NavBtn.extend`right: -1.4em;`

const Subjects = ({url: {query: {id}}}) => {
  const subject = subjects.filter(x => x.name === id)[0] || {}
  const image = `/static/${subject.image}.png`

  return (
    <Page>
      <Tagline>
        Why Learn <b>&nbsp;{id}</b>?
      </Tagline>
      <Container>
        <Row>
          <Character src={image} />
          <Center>
            <Detail name={subject.name} desc={subject.desc} />
          </Center>
        </Row>
        <Link href="/game?id=Programmer" passHref prefetch>
          <Button>
            <Ink />
            Get Started
          </Button>
        </Link>
      </Container>
    </Page>
  )
}

export default App(Subjects)
