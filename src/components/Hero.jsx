import * as React from "react"
import Container from "../components/Container"
import Button from "../components/ui/Button"

const Hero = () => {
  return (
      <section className="hero h-screen">
        <Container className="h-full flex flex-col items-center justify-center">
          <h1 className="text-center text-6xl mb-16">хочу танцевать</h1>
          <div className="flex items-center justify-center gap-8 text-accent">
            <Button>online</Button>
            <Button>offline
              {/* <br/>Анапа | Москва | Донецк */}
              </Button>
          </div>
        </Container>
      </section>
  )
}

export default Hero
