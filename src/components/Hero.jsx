import { Link } from "gatsby"
import * as React from "react"
import Container from "../components/Container"
import Button from "../components/ui/Button"
import HoverElement from "./common/HoverElement"

const Hero = () => {
  return (
      <section className="hero h-screen">
        <Container className="h-full flex flex-col items-center justify-center">
          <h1 className="text-center text-8xl mb-16">хочу танцевать</h1>
          <div className="flex items-center justify-center gap-8 text-accent">
            <Link to="#online"><HoverElement><Button><span className="text-2xl">online</span></Button></HoverElement></Link>
            <Link to="#offline"><HoverElement><Button><span className="text-2xl">offline</span></Button></HoverElement></Link>
          </div>
        </Container>
      </section>
  )
}

export default Hero
