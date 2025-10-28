import NavBar from "../../components/NavBar/NavBar"
import AboutSection from "./sections/AboutSection/AboutSection"
import Hero from "./sections/Hero/Hero"
import SkillsSection from "./sections/SkillsSection/SkillsSection"

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
    </>
  )
}

export default Home
