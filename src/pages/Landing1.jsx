import React from "react"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import HeroSection from "../components/HeroSection"
import BlankSection from "../components/BlankSection"
import Breadcrumbs from "../components/Breadcrumbs"
import data from "../data/Landing-1.json"
import hero from "../data/Hero.json"

function Landing1() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs />
        <HeroSection {...hero[1]} />
        <BlankSection text="Video primary section" />
        <BlankSection text="Form section" />
        <PrimarySection {...data[0]} />
        <PrimarySection {...data[1]} />
        <PrimarySection {...data[2]} />
        <PrimarySection {...data[3]} />
        <PrimarySection {...data[4]} />
        <BlankSection text="Form section" />
        <Recent />
      </main>
    </div>
  )
}

export default Landing1
