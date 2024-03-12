import React from 'react'
import './main.css'
import Hero from '../Hero/Hero'
import Overview from '../Overview/Overview'
import Schedule from '../Schedule/Schedule'
import Talks from '../Talks/Talks'
import Speakers from '../Speakers/Speakers'
import Tickets from '../Tickets/Tickets'
import Sponsors from '../Sponsors/Sponsors'
import Faq from '../Faq/Faq'

const Main = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <Schedule />
      <Talks />
      <Speakers />
      <Tickets />
      <Sponsors />
      <Faq />
    </main>
  )
}

export default Main
