import { Link, useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import Container from "../components/Container"
import Button from "../components/ui/Button"
import HoverElement from "./common/HoverElement"
import Video from "./Video"

const Hero = () => {
  const { video } = useStaticQuery(graphql`
    query HeroAssets {
      video: file(name: { eq: "test-dance" }) {
        publicURL
      }
    }
  `);
  return (
      <section className="hero h-screen">
        <Video video={video.publicURL} showOverlay />
        <Container className="relative h-full flex flex-col items-center justify-center">
          <h1 className="text-center text-8xl mb-16"><span className="text-green-300">хочу</span>танцевать</h1>
          <div className="flex items-center justify-center gap-8 text-green-300">
            <Link to="#online"><HoverElement><Button><span className="text-2xl">online</span></Button></HoverElement></Link>
            <Link to="#offline"><HoverElement><Button><span className="text-2xl">offline</span></Button></HoverElement></Link>
          </div>
        </Container>
      </section>
  )
}

export default Hero
