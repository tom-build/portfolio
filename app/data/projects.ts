export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string | null;
};

export const projects: Project[] = [
  {
    title: "E-commerce [Loja do Macaco]",
    description:
      "Loja virtual desenvolvida como uma aplicação web moderna utilizando Next.js, React e TypeScript, com foco em experiência do usuário, performance e responsividade. O projeto simula um e-commerce funcional, organizado para demonstrar competências em desenvolvimento de interfaces, rotas e estado de aplicação, além de práticas de frontend escalável.",
    image: "/images/lojadomonkey.jpg",
    github: "https://github.com/tomzudo/minha-loja",
    live: null,
  },
  {
    title: "Banco Maven",
    description:
      "Sistema bancário desenvolvido em Java, utilizando Maven, com foco no estudo de orientação a objetos, persistência de dados e boas práticas de organização de projetos. O projeto simula operações básicas de um banco, permitindo a manipulação de contas e transações financeiras em um ambiente controlado.",
    image: "/images/bancoproject.jpg",
    github: "https://github.com/tomzudo/SistemaBancario-BancoMaven.git",
    live: null,
  },
  {
    title: "Sistema Escolar",
    description:
      "Sistema de gestão escolar desenvolvido utilizando Python e SQLite, com gerenciamento de alunos, professores, turmas, notas, médias. Implementação de modelagem de banco de dados relacional, operações CRUD e aplicação de regras de negócio para controle acadêmico.  ",
    image: "/images/sistema.jpg",
    github: "https://github.com/tomzudo/SistemaBancario-BancoMaven.git",
    live: null,
  },
    {
    title: "E-commerce [Zen Coffee]",
    description: "O Zen Coffee é uma aplicação que simula um sistema administrativo de loja, permitindo o controle de produtos com uma interface moderna e um fluxo de autenticação funcional. O objetivo principal do projeto não foi complexidade extrema, mas sim consolidar fundamentos importantes como:",
    image: "/images/zen.jpg",
    github: "https://github.com/tom-build/Zen-Coffee.git",
    live: null,
  },
];