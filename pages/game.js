import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'

import App from '../components/App'
import Wave from '../components/Wave'
import {Character} from '../components/Selector'
import {Page, Card} from '../components/Layout'
import GameEntry from '../components/GameEntry'

const Container = styled.div`
  max-width: 800px;
  padding: 0 2.5em;
`

class Game extends Component {
  state = {loading: true}

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000)
  }

  render = () => (
    <Page>
      {this.state.loading ? (
        <GameEntry />
      ) : (
        <Container>
          <Row>
            <Col>
              <Character src="/static/president.png" />
            </Col>
            <Col>
              <Card>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit vero nihil exercitationem delectus recusandae fugit
                sunt dicta animi, alias, neque ullam aut, omnis laborum eum
                facere laudantium accusantium placeat ab!
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Page>
  )
}

export default App(Game)
