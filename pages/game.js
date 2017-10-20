import React from 'react'

import Login from '../components/Login'
import App from '../components/App'
import GameEntry from '../components/GameEntry'

const Game = () => (
  <div>
    <GameEntry/>
    <Login />
  </div>
)

export default App(Game)
