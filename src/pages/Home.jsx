import React from "react"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import home from "../data/Home.json"
// import Icon from "../components/Icon"

// Define the ShowcaseApplicants component
function ShowcaseApplicants(props) {
  const { applicants } = props

  return (
    <div>
      {applicants.map((applicant) => (
        <PrimarySection
          key={applicant.id}
          src={applicant.src}
          title={applicant.title}
          reverse={applicant.reverse}
        />
      ))}
    </div>
  )
}

function Home() {
  return (
    <div className="wrapper">
      <main>
        <ShowcaseApplicants applicants={home} />
        <Recent />
      </main>
    </div>
  )
}

export default Home
