import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Col} from 'reactstrap'
import Ink from 'react-ink'
import Link from 'next/link'

import App from '../components/App'
import Selector from '../components/Selector'
import {subjects} from '../components/Landing'

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

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    background: ${primaryHover};
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

const jobs = [
  {
    name: 'Politician',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet, laborum ab',
    image: '/static/pavin.png'
  },
  {
    name: 'Presidential Candidate',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet, laborum ab',
    image: '/static/ssj.png'
  }
]

class Jobs extends Component {
  state = {
    index: 0
  }

  nav = {
    left: () => {
      if (this.state.index > 0) this.setState({index: this.state.index - 1})
    },
    right: () => {
      if (this.state.index < subjects.length - 1) {
        this.setState({index: this.state.index + 1})
      }
    },
    max: subjects.length
  }

  componentWillMount() {
    this.subject = subjects.filter(x => x.name === this.props.id)[0] || {}
  }

  render() {
    if (this.state.index === 0) {
      return (
        <Selector
          image={`/static/${this.subject.image}.png`}
          name={`Why do we learn ${this.subject.name}?`}
          desc={`${this.subject.desc} Press Right to Find Out!`}
          index={this.state.index}
          {...this.nav}
        />
      )
    }

    return (
      <Selector
        index={this.state.index}
        {...jobs[this.state.index - 1]}
        {...this.nav}
      />
    )
  }
}

const Subjects = ({url: {query: {id}}}) => (
  <Page>
    <Tagline>
      Why Learn <b>&nbsp;{id}</b>?
    </Tagline>
    <Container>
      <Jobs id={id} />
      <Link href="/question" passHref prefetch>
        <Button>
          <Ink />
          Get Started
        </Button>
      </Link>
    </Container>
  </Page>
)

export default App(Subjects)
