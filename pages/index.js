import React from 'react'

import App from '../components/App'
import Hero from '../components/Hero'
import Subjects from '../components/Subjects'

const Landing = () => (
  <div>
    <Hero />
    <Subjects />
  </div>
)

export default App(Landing)
