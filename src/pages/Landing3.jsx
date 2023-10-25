import React from "react"
import Recent from "../components/Recent"
import Breadcrumbs from "../components/Breadcrumbs"
import TeamSection from "../components/TeamSection"

function Landing3() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs />
        <TeamSection />
        <Recent title="Recent Articles" />
      </main>
    </div>
  )
}

export default Landing3
