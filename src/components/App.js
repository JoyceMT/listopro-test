import React from 'react'
import './App.css'
import CandidateCard from './CandidateCard/CandidateCard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const App = () => {
  return (
    <div>
      <CandidateCard />
    </div>
  )
}

export default App;
