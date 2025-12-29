export interface CaseStudy {
    challenge: string;
    solution: string;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    category: 'fullstack' | 'frontend' | 'backend';
    featured: boolean;
    images: {
        thumbnail: string;
        screenshots: string[];
    };
    links: {
        live?: string;
        github?: string;
    };
    date: string;
    client?: string;
    caseStudy?: CaseStudy;
}

export const projects: Project[] = [
 {
        id: 1,
        slug: 'seguro-viagem',
        title: 'Seguro Viagem',
        description: 'Marketplace de Seguros de Viagem integrado a seguradoras e gateways de pagamento',
        longDescription: 'Esse é um dos projetos que mais tenho apreço, foi planejado para ser flexível e escalável, realizei todas as escolhas de infraestrutura, desde a análise de requisito até a Conteinerização para produção e deploy. Utilizei versões mais recentes do Next js ,  e para o backend utilizei o Nest Js pela sua facilidade  e  arquitetura modular. Por fim integrei o sistema de atendimento ao cliente com um agente de IA, para auxiliá-los na cotação de seguros de viagem.',
        technologies: ['Next', 'Nest', 'PrismaORM', 'MySQL', 'TypeScript', 'Docker', 'Git', 'Responsive Design'],
        category: 'fullstack',
        featured: true,
        images: {
            thumbnail: '/seguro_inicial.png',
            screenshots: ['/seguro_inicial.png', '/seguro_planos.png', '/seguro_checkout.png', '/seguro_agente_atendimento.png','/seguro_painel_admin.png']
        },
        links: {
            live: 'https://www.google.com.br'
        },
        date: '2025',
        client: 'Grow & Scale',
        caseStudy: {
            challenge: 'Sistema seguro e com alta capacidade para escalar com adição de novas seguradoras e dinamismo no gerencimento da plataforma.',
            solution: 'Optei por utilizar uma api modular baseada em Node focando na segurança e escalabilidade, tornei cada integração de seguradora como um conector (parte chata, mas valeu muito a pena) e diminuí o tempo de cotação montando um sistema local de cotação e sincronização de seguros.'
        }
    },

    {
        id: 2,
        slug: 'boraeh',
        title: 'Boraeh',
        description: 'Rede social para digital influencers - Desenvolvimento  focao em infraestrutura e disponibilidade',
        longDescription: 'Esse projeto, foi um verdadeiro estudo de caso sobre arquitetura e visão macro do projeto e segurança da informação. O desafio foi disponibilizar uma infraestrutura desacoplada que permitisse uma rápida escala de forma horizontal. E para tornar possível isso utilizei Load Balancer dividindo carga entre dois nós, servidores de bancos de dados remotos (Redis e MySQL) e S3 para armazenamento de arquivos e imagens.',
        technologies: ['React', 'PHP', 'Laravel', 'MySQL', 'TypeScript', 'Docker', 'Git', 'Responsive Design'],
        category: 'fullstack',
        featured: true,
        images: {
            thumbnail: '/boraeh_1.png',
            screenshots: ['/boraeh_1.png', '/boraeh_2.png']
        },
        links: {
            live: 'https://www.boraeh.com.br'
        },
        date: '2025',
        client: 'Grow & Scale',
        caseStudy: {
            challenge: 'Aqui o maior desafio foi a infraestrutura robusta o suficiente para escalar de forma segura e altamente disponível.',
            solution: 'Nesse projeto, desenvolvi bastante o meu lado arquiteto, pude implementar livremente  uma arquitetura robusta utilizando Load Balancer, servidores de bancos de dados remotos (Redis e MySQL). e S3 para armazenamento de arquivos e imagens.'
        }
    },
     {
        id: 3,
        slug: 'modo-caverna',
        title: 'Modo Caverna',
        description: 'Reestruturação completa do antigo Central Caverna',
        longDescription: 'Fazer parte do projeto Modo Caverna foi uma experiência absurda para mim, tanto na parte da programação quanto na visão macro do projeto. Fui responsável pela parte administrativa do desenvolvimento, gerenciamento de equipe  e visão de macro  de todo o conjunto  atuo na parte de dados modelagem e administração do banco, pude realizar integrações completas com o Google Calendar, sendo possível gerenciar toda a agenda do usuário de dentro do sistema. Devops: arquitetura e deploy.',
        technologies: ['Next Js', 'TypeScript', 'PHP - Laravel',  'MySQL', 'Bootstrap', 'JavaScript', 'Docker', 'Git'],
        category: 'fullstack',
        featured: true,
        images: {
            thumbnail: '/modo_caverna.png',
            screenshots: ['/modo_caverna.png', '/modo_caverna_kanban.png']
        },
        links: {
            live: 'https://app.modocaverna.com/'
        },
        date: '2024-2025',
        client: 'Grupo Sideral',
        caseStudy: {
            challenge: 'O desafio aqui foi melhorar algo já existente, migrar a tecnologia do frontend para Next que antes funcionava em Laravel com Blade. Também foi necessário elaborar todo um plano de migração de tecnologia para migrar os dados de bancos de dados e de storage  garantindo que nada ficasse perdido.',
            solution: 'Desenvolvi uma arquitetura robusta com Laravel e Next js escalável e dockerizada. Implementei o CI/CD oara automatizar o deploy  e garantir que tudo estivesse sempre disponível de forma fluida'
        }
    },
    {
        id: 4,
        slug: 'central-caverna',
        title: 'Central Caverna',
        description: 'SAAS de gestão pessoal para empresa Grupo Sideral',
        longDescription: 'Fazer parte do projeto Modo Caverna foi  uma experiência absurda para mim, tanto na parte da programação quanto na visão macro do projeto. Atualmente estou responsável pela parte administrativa do desenvolvimento, atuo na parte de dados modelagem e administração do banco, Devops: arquitetura e deploy. E por fim, atuo também como dev responsável pelo suporte do sistema junto à equipe do suporte. Trabalhar no projeto Modo Caverna foi bastante desafiador no início, pois tive que aprender PHP e também arquitetura de projeto do Laravel. O projeto é desenvolvido utilizando o Laravel Framework e utiliza o Mysql como banco de dados.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Docker', 'Git'],
        category: 'fullstack',
        featured: false,
        images: {
            thumbnail: '/modo_caverna2.png',
            screenshots: ['/modo_caverna1.png', '/modo_caverna2.png', '/modo_caverna3.png']
        },
        links: {
            live: 'https://app.modocaverna.com/'
        },
        date: '2024',
        client: 'Grupo Sideral',
        caseStudy: {
            challenge: 'O maior desafio foi criar um sistema SAAS gestão pessoal completo capaz de lidar com milhares de usuários simultâneos, integrações com Google Calendar, área de cursos, controle financeiro, pomodoro... eram pelo menos 11 sistemas em 1 isso tudo garantindo performance e segurança.',
            solution: 'Construí uma infraestrutura inteligente para a gestão das metas do usuário, gestão do Pomodoro e controle de tarefas, do controle financeiro e da integração completa com o Google Calendar.'
        }
    },
    {
        id:5,
        slug: 'prouno',
        title: 'PROUNO - Unoclínica',
        description: 'Sistema de gerenciamento de atendimentos médicos',
        longDescription: 'O Prouno é um webapp gerenciador de atendimentos médicos. Baseado no funcionamento da clínica e focado desde o agendamento do paciente até o pós-atendimento, o sistema gerencia a agenda dos médicos, novos atendimentos e também o histórico cada paciente atendido (anamnese). Os dados sensíveis ficam visíveis somente ao médico responsável e seu paciente de forma totalmente segura e sigilosa. O sistema é desenvolvido em React no frontend e Java no backend, com banco de dados MySQL.',
        technologies: ['React', 'Redux', 'JavaScript', 'Java', 'Spring Boot', 'MySQL'],
        category: 'fullstack',
        featured: false,
        images: {
            thumbnail: '/prouno_1.png',
            screenshots: ['/prouno_1.png', '/prouno_2.png']
        },
        links: {
            live: 'https://www.instagram.com/unoclinicajequie/'
        },
        date: '2022-2023',
        client: 'Unoclínica',
        caseStudy: {
            challenge: 'Implementar melhorias num sistema já existente e ajudar a desenvolver um backend robusto e escalável com microserviços em Java.',
            solution: 'ajudei a implementar melhorias num sistema já existente e ajudar a desenvolver um backend robusto e escalável com microserviços em Java.'
        }
    },
    {
        id: 6,
        slug: 'afflatus-assistant',
        title: 'Afflatus Assistant',
        description: 'Sistema de cadastro de clientes para empresa de fotografia infantil',
        longDescription: 'O Afflatus Assistant é um sistema criado para lidar com o cadastro de clientes e eventos para uma empresa de fotografia infantil. Com ele, é possível cadastrar um cliente (pai/mãe) e seus filhos, além de salvar datas importantes para o cliente, como o batizado do bebê e os primeiros passos, entre outros eventos relevantes. Isso ajuda a empresa de fotografia a impulsionar as vendas e a obter um cadastro completo e seguro de seus clientes.',
        technologies: ['React', 'Vite', 'JavaScript', 'Styled Components', 'Node.js', 'TypeScript', 'Express', 'PostgreSQL'],
        category: 'fullstack',
        featured: false,
        images: {
            thumbnail: '/afflatus.png',
            screenshots: ['/afflatus.png', '/prouno_1.png', '/modo_caverna1.png', '/modo_caverna2.png']
        },
        links: {},
        date: '2022',
        caseStudy: {
            challenge: 'A empresa de fotografia infantil precisava de um sistema para gerenciar centenas de clientes, seus filhos e datas importantes (aniversários, batizados, primeiros passos), além de impulsionar vendas através de lembretes automáticos.',
            solution: 'Criei uma aplicação fullstack com React/Vite no frontend e Node.js/Express no backend. O sistema notifica automaticamente a empresa sobre datas importantes dos clientes, gerando oportunidades de venda proativas. PostgreSQL garante integridade dos dados e Styled Components proporcionam uma UI moderna.'
        }
    },
    
    {
        id: 7,
        slug: 'acmsoft',
        title: 'ACMSOFT',
        description: 'Software de gestão acadêmica universitária',
        longDescription: 'ACMSOFT é um software que trás suporte a toda parte de gestão acadêmica da universidade. Tem a funcionalidade de cadastrar salas, horário das aulas, datas, professores, alunos, disciplinas, cursos, colegiados, departamentos, coordenadores de colegiado; consultar dados; editar; excluir; matricular ou remover a matricula de alunos nas disciplinas; lançar notas do aluno; criar frequência e lançar ata de reunião. O objetivo do desenvolvimento deste projeto está voltado para a agilidade, competência, acessibilidade, redução de papelada, diminuição de erros e a organização dos dados na gestão acadêmica na universidade do cliente.',
        technologies: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        category: 'fullstack',
        featured: false,
        images: {
            thumbnail: '/acm_1.png',
            screenshots: ['/acm_1.png', '/acm_2.png']
        },
        links: {},
        date: '2020-2021'
    },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getProjectsByCategory = (category: Project['category']) =>
    projects.filter(p => p.category === category);
