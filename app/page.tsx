import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col font-sans">

      <section className="relative bg-portfolio-hero min-h-screen flex items-center justify-center px-4">

        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

        <div className="relative z-10 w-full max-w-sm mx-auto flex justify-center">
          <div className="
            w-full
            rounded-2xl
            bg-portfolio-hero/10
            backdrop-blur-md
            shadow-xl shadow-black/20
            py-8 px-6
            flex flex-col items-center text-center
            text-portfolio-textLight
          ">

            <img
              src="https://avatars.githubusercontent.com/u/208907254?s=400"
              alt="Erivelton Araújo"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover mb-4"
            />

            <h1 className="text-2xl md:text-4xl font-semibold text-white">
              Erivelton Araújo
            </h1>

            <p className="text-sm md:text-base text-white/80 mt-2">
              Software Developer
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://github.com/tomzudo" target="_blank">
                <FaGithub className="text-white text-2xl" />
              </a>

              <a href="https://www.linkedin.com/in/eriveltonarj/" target="_blank">
                <FaLinkedin className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-portfolio-background px-4 md:px-6 py-10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-portfolio-surface mb-10">
            Sobre mim
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

            <img
              src="https://avatars.githubusercontent.com/u/208907254?s=400"
              alt="Erivelton Araújo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
            />

            <div className="
              relative
              bg-white/70
              rounded-2xl
              p-6 md:p-8
              flex flex-col gap-4
              shadow-lg
            ">

              <p className="text-sm md:text-base text-portfolio-grayish leading-relaxed">
                Desenvolvedor de software com experiência prática no desenvolvimento de aplicações full-stack utilizando 
                TypeScript, Node.js, Java e Python. Possuo conhecimento em APIs REST, banco de dados relacionais 
                e arquitetura em camadas. Desenvolvo projetos próprios com foco em organização, escalabilidade e boas práticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-portfolio-background px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">

          <h2 className="text-2xl md:text-3xl font-bold text-portfolio-surface">
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
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