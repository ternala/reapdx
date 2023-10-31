import React from "react"
import Recent from "../components/Recent"
import PrimaryFormSection from "../components/PrimaryFormSection"
import ListingsSection from "../components/ListingsSection"
import HeroSection from "../components/HeroSection"
import Breadcrumbs from "../components/Breadcrumbs"
// import data from "../data/Landing-1.json"
import hero from "../data/Hero.json"

function Listings() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs page="Listings"/>
        <HeroSection {...hero[4]} />
        <ListingsSection />
        <PrimaryFormSection
          title="Let`s Connect"
          type="primary"
          reverse="true"
        />
        <Recent title="Recent Articles"/>
      </main>
    </div>
  )
}

export default Listings
