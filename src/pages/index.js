import * as React from "react"
import Header from "../components/Header"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import BlurText from "../components/BlurText"
import Offline from "../components/Offline"

const IndexPage = () => {
  return (
    <main className="font-base font-montserrat-alternates bg-dark min-h-screen text-slate-50">
      <Header />
      <Hero />
      <Offline />
      <section id="online" className="relative">
        <Container><h2 className="text-accent text-6xl">online</h2></Container>
        <BlurText />
      </section>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => {
  <>
    <title>Танцы в Анапе High Heels</title>
    <meta
        name="description"
        content={'Преподаю танцы в Анапе по таким направлениям как High Heels Classic | High Heels Base | High Heels Experimental'}
      />
  </>
}
