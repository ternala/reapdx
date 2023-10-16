import React from "react"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import HeroSectionHome from "../components/HeroSection"
import BlankSection from "../components/BlankSection"
import data from "../data/Home.json"
import hero from "../data/Hero.json"

function Home() {
  return (
    <div className="wrapper">
      <main>
        <HeroSectionHome {...hero[0]} />
        <PrimarySection {...data[0]} />
        <PrimarySection {...data[1]} />
        <PrimarySection {...data[2]} />
        <PrimarySection {...data[3]} />
        <PrimarySection {...data[4]} />
        <PrimarySection {...data[5]} />
        <PrimarySection {...data[6]} />
        <BlankSection text="Form section" />
        <BlankSection text="Hero section" />
        <BlankSection text="Categories section" />
        <PrimarySection {...data[7]} />
        <BlankSection text="Form section" />
        <Recent />
      </main>
    </div>
  )
}

export default Home
