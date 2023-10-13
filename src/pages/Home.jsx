import React from "react"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import home from "../data/Home.json"
// import Icon from "../components/Icon"

function Home() {
  return (
    <div className="wrapper">
      <main>
        <PrimarySection {...home[2]} />
        <PrimarySection {...home[1]} />
        <PrimarySection {...home[2]} />
        <PrimarySection {...home[3]} />
        <PrimarySection {...home[4]} />
        <PrimarySection {...home[5]} />
        <PrimarySection {...home[6]} />
        <PrimarySection {...home[7]} />
        <Recent />
      </main>
    </div>
  )
}

export default Home
