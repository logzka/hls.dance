import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Offline from "../components/Offline"
import Online from "../components/Online"
import Menu from "../components/Menu"
import { MenuContextProvider } from '../context/menu.context';

const IndexPage = () => {
  return (
    <main className="font-base font-montserrat-alternates bg-dark min-h-screen text-slate-50">
      <MenuContextProvider>
        <Header />
        <Menu />
      </MenuContextProvider>
      <Hero />
      <Offline />
      <Online />
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
