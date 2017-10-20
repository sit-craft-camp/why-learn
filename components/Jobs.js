import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Col} from 'reactstrap'
import Ink from 'react-ink'
import Link from 'next/link'

import Selector from './Selector'
import {subjects} from './Landing'
import {Page, Card, fadeIn} from './Layout'

export default class Jobs extends Component {
  state = {
    index: 0
  }

  nav = {
    left: () => {
      if (this.state.index > 0) this.setState({index: this.state.index - 1})
    },
    right: () => {
      if (this.state.index < this.props.data.length - 1) {
        this.setState({index: this.state.index + 1})
      }
    },
    max: this.props.data.length
  }

  componentWillMount() {
    this.subject = this.props.id
      ? subjects.filter(x => x.name === this.props.id)[0] || {}
      : this.props.data
  }

  render() {
    if (this.props.id && this.state.index === 0) {
      return (
        <Selector
          image={`/static/${this.subject.image}.png`}
          name={`Why do we learn ${this.subject.name}?`}
          desc={`${this.subject.desc} Press Right to Find Out!`}
          index={this.state.index}
          C={this.props.C}
          {...this.nav}
        />
      )
    }

    return (
      <Selector
        index={this.state.index}
        C={this.props.C}
        {...this.props.data[this.state.index + (this.props.id ? -1 : 0)]}
        {...this.nav}
      />
    )
  }
}
