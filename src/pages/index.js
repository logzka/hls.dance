import * as React from "react"
import Header from "../components/Header"
import Container from "../components/Container"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <main className="font-base font-montserrat-alternates bg-dark min-h-screen text-slate-50">
      <Header />
      <Hero />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Dance Heels</title>
