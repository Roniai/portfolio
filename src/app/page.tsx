import { NavBarMenu } from "@/components/navbar-menu";
import { Contact } from "@/components/section/contact";
import { Experiences } from "@/components/section/experiences";
import { Footer } from "@/components/section/footer";
import { HomePage } from "@/components/section/home";
import { Projects } from "@/components/section/projets";
import { Services } from "@/components/section/services";
import { Skills } from "@/components/section/skills";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("NavBarMenu");
  const menu = t.raw("menu");

  return (
    <div>
      <header>
        <NavBarMenu menu={menu} />
      </header>
      <main className="overflow-x-hidden">
        <HomePage />
        <div className="flex flex-col space-y-16 xl:container mx-auto px-4">
          <Services />
          <Skills />
          <Projects />
          <Experiences />
          <Contact />
        </div>
      </main>
      <footer className="row-start-3 flex gap-24 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
