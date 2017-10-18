import React, {Component} from 'react'

export default class Slogan extends Component {
  state = {
    chara: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const {chara} = this.state

      this.setState({chara: chara < subjects.length - 1 ? chara + 1 : 0})
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render = () => (
    <Row>
      {subjects.map(subject => (
        <Col>
          <Card title={subject.name} url={`/static/${subject.image}.png`} />
        </Col>
      ))}
    </Row>
  )
}

