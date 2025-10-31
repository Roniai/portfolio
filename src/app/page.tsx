import { NavBarMenu } from "@/components/navbar-menu";
import { Contact } from "@/components/section/contact";
import { Experiences } from "@/components/section/experiences";
import { Footer } from "@/components/section/footer";
import { HomePage } from "@/components/section/home";
import { Projects } from "@/components/section/projets";
import { Services } from "@/components/section/services";
import { Skills } from "@/components/section/skills";

export default async function Home() {
  return (
    <div>
      <header>
        <NavBarMenu />
      </header>
      <main>
        <HomePage />
        <div className="flex flex-col space-y-16 container mx-auto">
          <Services />
          <Skills />
          <Projects />
          <Experiences />
          <Contact />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
