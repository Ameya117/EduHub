import React from 'react'
import News from './News'
import HomeCard from './HomeCard'
import HealthInfo from './HealthInfo'
import HomepageVideos from './HomepageVideos'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <HomeCard />
      <News/>
      <HealthInfo/>
      <HomepageVideos />
      <Footer />
    </>
  )
}

export default Home
