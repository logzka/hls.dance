import * as React from "react"
import Container from "../components/Container"
import BlurText from "../components/BlurText"
import SectionTitle from "./SectionTitle"

const Online = () => {
  return (
      <section id="online" className="relative">
        <Container>
          <SectionTitle>online занятия</SectionTitle>
        </Container>
        <BlurText />
      </section>
  )
}

export default Online;
