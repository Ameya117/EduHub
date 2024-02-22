import React from 'react'
import News from './News'
import HomeCard from './HomeCard'
import HealthInfo from './HealthInfo'
import HomepageVideos from './HomepageVideos'
import Footer from '../Footer'
import ReviewBox from './ReviewBox'

const Home = () => {
  return (
    <>
      <HomeCard />
      <News/>
      <HealthInfo/>
      <HomepageVideos />
      <ReviewBox />
      <Footer />
    </>
  )
}

export default Home
