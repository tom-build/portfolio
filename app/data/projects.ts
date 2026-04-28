export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string | null;
};

export const projects: Project[] = [
  {
    title: "Loja virtual",
    description:
      "Loja virtual desenvolvida como uma aplicação web moderna utilizando Next.js, React e TypeScript, com foco em experiência do usuário, performance e responsividade. O projeto simula um e-commerce funcional, organizado para demonstrar competências em desenvolvimento de interfaces, rotas e estado de aplicação, além de práticas de frontend escalável.",
    image: "/images/rotas.png",
    github: "https://github.com/tomzudo/minha-loja",
    live: null,
  },
  {
    title: "Banco Maven",
    description:
      "Sistema bancário desenvolvido em Java, utilizando Maven, com foco no estudo de orientação a objetos, persistência de dados e boas práticas de organização de projetos. O projeto simula operações básicas de um banco, permitindo a manipulação de contas e transações financeiras em um ambiente controlado.",
    image: "/images/bancomaven.png",
    github: "https://github.com/tomzudo/SistemaBancario-BancoMaven.git",
    live: null,
  },
  {
    title: "Sistema Escolar",
    description:
      "Sistema de gestão escolar desenvolvido utilizando Python e SQLite, com gerenciamento de alunos, professores, turmas, notas, médias. Implementação de modelagem de banco de dados relacional, operações CRUD e aplicação de regras de negócio para controle acadêmico.  ",
    image: "/images/bancomaven.png",
    github: "https://github.com/tomzudo/SistemaBancario-BancoMaven.git",
    live: null,
  },
];