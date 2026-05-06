import * as React from "react"
import Container from "../components/Container"
import BlurText from "../components/BlurText"

const Online = () => {
  return (
      <section id="online" className="relative">
        <Container><h2 className="text-accent text-6xl">online занятия</h2></Container>
        <BlurText />
      </section>
  )
}

export default Online;
