import { projects } from "./data/projects"; 
import { ProjectCard } from "./components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import tailwindConfig from "../tailwind.config";

export default function Home() {
  return (
    <main className="flex flex-col font-sans">

      <section className="relative bg-portfolio-hero h-screen flex items-center justify-center">

        <div className="absolute inset-0 bg-black/1"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex justify-center">
          <div
            className="
              w-80 h-240
              rounded-2xl
              bg-portfolio-hero/10
              backdrop-blur-md
              shadow-xl shadow-black/16
              px-0 py-18
              pt-0 pb-6
              flex flex-col items-center
              text-center
              text-portfolio-textLight
              transition-all duration-300
            "
          >
            <img
              src="https://avatars.githubusercontent.com/u/208907254?s=400"
              alt="Erivelton Araújo"
              className="w-80 h-80 rounded-full p-4"
            />

            <h1 className="font-sans text-4xl font-semibold text-white">Erivelton Araújo</h1>


            <p className="font-sans text-sm text-xl font-semibold text-white/80 pt-4">
              Software developer
            </p>

            <div className="flex gap-4 pt-3">
              <a
                href="https://github.com/tomzudo"
                target="_blank"
              >
                <FaGithub className=" text-white/80 text-2xl" />
       
              </a>

              <a
                href="https://www.linkedin.com/in/eriveltonarj/"
                target="_blank"
              >
                <FaLinkedin className=" text-white/80 gap-4 text-2xl" />

              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-portfolio-background px-6 py-10"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-portfolio-surface mb-16">
            Sobre mim
          </h2>

          <div className="flex items-center gap-10">

            <div className="shrink-0">
              <img
                src="https://avatars.githubusercontent.com/u/208907254?s=400"
                alt="Erivelton Araújo"
                className="
                  w-32 h-32
                  rounded-full
                  object-cover
                  shadow-lg
                "
              />
            </div>

            <div
              className="
                relative
                bg-white/70
                rounded-2xl
                p-8
                flex flex-col gap-6
                border border-white/10
                shadow-lg shadow-black/30
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300
              "
            >
              <span
                className="
                  absolute
                  -left-3
                  top-10
                  w-6 h-6
                  bg-white/40
                  rotate-45
                  shadow-lg
                "
              />

              <p className=" text-portfolio-grayish leading-relaxed">
                Sempre tive grande interesse por tecnologia e iniciei minha jornada no desenvolvimento em 2024. 
                Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) e atuo como desenvolvedor freelancer, buscando constantemente aprimorar minhas habilidades e construir soluções eficientes.
                Desenvolvedor com experiência prática com desenvolvimento web, ênfase em codigo limpo, organização e boas práticas de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="bg-portfolio-background px-6 py-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-portfolio-surface text">
            Projetos
          </h2>

          <div className="grid md:grid-cols-1 gap-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                github={project.github}
                live={project.live} 
                image={project.image}              
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-portfolio-hero py-6 text-center">
        <p className="text-sm text-white/60">
          2026 © Desenvolvido por Erivelton Araújo
        </p>
      </footer>
    </main>
  );
}