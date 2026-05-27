export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string | null;
};

export const projects: Project[] = [
  {
    title: "E-commerce [Zen Coffee]",
    description:
      "O Zen Coffee é uma aplicação que simula um projeto fullstack de um e-commerce de café, permitindo  controle de produtos com uma interface moderna e um fluxo de autenticação funcional.O objetivo principal do projeto foi consolidar fundamentos importantes como: estruturação de código, separação de responsabilidades, persistência de dados, validações, Organização de rotas, boas práticas de frontend e backend",
    image: "/images/zen.jpg",
    github: "https://github.com/tom-build/Zen-Coffee.git",
    live: null,
  },
  {
    title: "Peak Bank",
    description:
      "Sistema bancário desenvolvido em Java, utilizando Maven, com foco no estudo de orientação a objetos, persistência de dados e boas práticas de organização de projetos. O projeto simula operações básicas de um banco, permitindo a manipulação de contas e transações financeiras em um ambiente controlado.",
    image: "/images/bancoproject.jpg",
    github: "https://github.com/tom-build/Peak-Bank.git",
    live: null,
  },
  {
    title: "Sistema Escolar",
    description:
      "Sistema de gestão escolar desenvolvido utilizando Python e SQLite, com gerenciamento de alunos, professores, turmas, notas, médias. Implementação de modelagem de banco de dados relacional, operações CRUD e aplicação de regras de negócio para controle acadêmico.  ",
    image: "/images/sistema.jpg",
    github: "https://github.com/tom-build/Sistema-Esccolar.git",
    live: null,
  },
    {
    title: "E-commerce [Macaco Store]",
    description: "Loja virtual desenvolvida como uma aplicação web moderna utilizando Next.js, React e TypeScript, com foco em experiência do usuário, performance e responsividade. O projeto simula um e-commerce funcional, organizado para demonstrar competências em desenvolvimento de interfaces, rotas e estado de aplicação, além de práticas de frontend escalável.",
    image: "/images/lojadomonkey.jpg",
    github: "https://github.com/tom-build/Loja-do-Macaco-.git",
    live: null,
  },
];