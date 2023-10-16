import React from "react"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import HeroSection from "../components/HeroSection"
import BlankSection from "../components/BlankSection"
import Breadcrumbs from "../components/Breadcrumbs"
import data from "../data/Landing-2.json"
import hero from "../data/Hero.json"

function Landing2() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs />
        <HeroSection {...hero[2]} />
        <BlankSection text="Video primary section" />
        <BlankSection text="Form section" />
        <PrimarySection {...data[1]} />
        <PrimarySection {...data[2]} />
        <PrimarySection {...data[3]} />
        <Recent />
      </main>
    </div>
  )
}

export default Landing2
