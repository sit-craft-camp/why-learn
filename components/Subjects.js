import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Col} from 'reactstrap'
import Particles from 'react-particles-js'
import Ink from 'react-ink'
import jump from 'jump.js'
import Link from 'next/link'

import App from '../components/App'
import Hero from '../components/Hero'
import {subjects} from '../components/Landing'

const Section = styled.section`
  background: #f6f9fc;
  min-height: 27em;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4em 3em;
  max-width: 1200px;
  margin: 0 auto;

  .row {
    width: 100%;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  padding: 0.8em 0.8em 1.1em 0.8em;
  background: white;
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  max-width: 16em;
  margin: 0 auto;

  &:hover {
    transform: translateY(-1em);
  }
`

const CardTitle = styled.h2`
  margin: 0;
  margin-top: 0.6em;

  font-weight: 300;
  font-family: Roboto;
  font-size: 1.6em;
  color: #666;
`

const CardImage = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10em;
  background: ${props => props.color || '#ef2575'};

  img {
    margin: 0 auto;
    width: 6em;
    height: 100%;
    user-select: none;
  }
`

const Heading = styled.h1`
  font-weight: 300;
  color: #555;
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 1.3em;
`

const Subjects = () => (
  <Section className="menus">
    <Container>
      <Heading>Choose Your Destiny. Wisely.</Heading>
      <Row>
        {subjects.map((subject, index) => (
          <Col key={index}>
            <Card>
              <Link href={`/details?id=${subject.name}`} passHref prefetch>
                <CardImage color={subject.color}>
                  <Ink opacity={0.15} />
                  <img
                    src={`/static/${subject.image}.png`}
                    alt={subject.name}
                  />
                </CardImage>
              </Link>
              <CardTitle>{subject.name}</CardTitle>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
)

export default Subjects
