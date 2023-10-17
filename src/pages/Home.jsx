import React from "react"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import PrimaryFormSection from "../components/PrimaryFormSection"
import HeroSectionHome from "../components/HeroSectionHome"
import HeroSection from "../components/HeroSection"
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
        <PrimaryFormSection />
        <HeroSection image="dd">
          <h2>Greater Portland Real Estate Market Reports</h2>
          <div>
            <p>
              While our small team of expert agents are spread out past
              Portland, serving Vancouver, Salem, Bend, and beyond, our real
              estate news blog is focused on the greater Portland metro area. It
              is a top 100 real estate blog in the world with exclusive real
              estate reports you cannot find anywhere else . Here is a sample of
              some of our Portland real estate research reports written to help
              answer important questions
            </p>
          </div>
        </HeroSection>
        <BlankSection text="Categories section" />
        <PrimarySection {...data[7]} />
        <BlankSection text="Form section" />
        <Recent />
      </main>
    </div>
  )
}

export default Home
