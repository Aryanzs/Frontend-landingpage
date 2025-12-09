import React from 'react'
import ForumHeroSection from '../components/ForumHeroSection'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import QuestionsPage from '../components/QuestionsPage'

const ForumPage = () => {
  return (
  <>
      <main className="min-h-screen">
        <TopBar/>
        <Navbar/>
        <ForumHeroSection/>
        <QuestionsPage/>


        </main>


  </>  
  )
}

export default ForumPage