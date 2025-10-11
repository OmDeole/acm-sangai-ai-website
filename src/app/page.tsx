import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import AchievementsSection from "@/components/AchievementsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import GridBackground from "@/components/GridBackground";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <div className="relative">
          <GridBackground />
          <section id="about">
            <AboutSection />
          </section>
          <section id="events">
            <EventsSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="team">
            <TeamSection />
          </section>
          <section id="achievements">
            <AchievementsSection />
          </section>
          <FAQSection />
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </main>
      <Footer />
      <EasterEgg />
    </div>
  );
}