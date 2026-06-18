import { Link, useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import Container from "../components/Container"
import Button from "../components/ui/Button"
import CallMeMaybe from "./CallMeMaybe"
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
      <section className="hero relative h-[50vh] sm:h-[75vh] md:h-screen">
        <Video video={video.publicURL} showOverlay />
        <Container className="relative h-full flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl sm:text-6xl md:text-7xl lg:text-8xl mb-16"><span className="text-accent">хочу</span>танцевать</h1>
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-green-300">
            <Link to="#online"><HoverElement><Button><span className="sm:text-2xl">online</span></Button></HoverElement></Link>
            <Link to="#offline"><HoverElement><Button><span className="sm:text-2xl">offline</span></Button></HoverElement></Link>
          </div>
        </Container>
        <CallMeMaybe className="absolute left-40 sm:left-[unset] sm:right-32 bottom-4 md:-bottom-4"><div className="bg-yellow-100 shadow-lg shadow-green-300/40 transition-all cursor-pointer hover:rotate-0 hover:shadow-none rotate-15 rounded-full px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-center"><p className="text-center font-bold uppercase text-accent text-sm sm:text-base">Пробное<br/>бесплатно</p></div></CallMeMaybe>
      </section>
  )
}

export default Hero
