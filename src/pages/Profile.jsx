import React from 'react'
import ProfileCard from '../components/ProfileCard'
import UpcomingJobs from '../components/UpcomingJobs'
import NavBar from '../components/NavBar'

export default function Profile() {
  return (
    <>
			<NavBar/>
			<ProfileCard />
			<UpcomingJobs />
		</>
  )
}
