import type { Localized } from "@/i18n/config";

export interface CaseStudy {
    challenge: Localized;
    solution: Localized;
}

export interface Project {
    id: number;
    slug: string;
    title: Localized;
    description: Localized;
    longDescription: Localized;
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
        id: 9,
        slug: 'lowe',
        title: { pt: 'Löwe', en: 'Löwe' },
        description: {
            pt: 'Plataforma de gestão de anúncios digitais (Meta + Google Ads) potencializada por IA, com agentes autônomos e busca semântica de contexto via RAG + pgvector',
            en: 'AI-powered digital ad management platform (Meta + Google Ads) with autonomous agents and semantic context search via RAG + pgvector',
        },
        longDescription: {
            pt: 'O Löwe é o meu projeto mais recente e o mais ambicioso em IA: uma plataforma completa para gerenciar, otimizar e escalar campanhas de anúncios digitais no Meta e Google Ads, full TypeScript de ponta a ponta — backend em NestJS 11 e SPA em React 19 com Vite. Fui responsável por boa parte do sistema, do schema do banco até a UI: a camada de autenticação JWT com RBAC, os agentes de IA agendados (Auditor, Lances, Criativo e Analista) que rodam em paralelo gerando sugestões de otimização, o modelo de dados em Prisma 7 + PostgreSQL e o fluxo de aprovação human-in-the-loop no front. O coração de IA usa RAG (Retrieval-Augmented Generation): os dados de campanhas, criativos e histórico são transformados em embeddings e indexados com pgvector dentro do próprio PostgreSQL, permitindo busca semântica de contexto — assim cada agente recupera exatamente o contexto relevante antes de gerar uma recomendação, tornando as sugestões muito mais precisas e fundamentadas. Redis cuida das sessões e o Socket.io entrega as atualizações em tempo real.',
            en: "Löwe is my most recent and most ambitious AI project: a complete platform to manage, optimize and scale digital ad campaigns on Meta and Google Ads, full TypeScript end to end — a NestJS 11 backend and a React 19 + Vite SPA. I owned a large part of the system, from the database schema up to the UI: the JWT auth layer with RBAC, the scheduled AI agents (Auditor, Bids, Creative and Analyst) that run in parallel generating optimization suggestions, the Prisma 7 + PostgreSQL data model and the human-in-the-loop approval flow on the front. The AI core uses RAG (Retrieval-Augmented Generation): campaign, creative and historical data are turned into embeddings and indexed with pgvector inside PostgreSQL itself, enabling semantic context search — so each agent retrieves exactly the relevant context before generating a recommendation, making the suggestions far more accurate and grounded. Redis handles sessions and Socket.io delivers real-time updates.",
        },
        technologies: ['RAG', 'pgvector', 'PostgreSQL', 'NestJS', 'CI/CD' ,'React 19', 'TypeScript', 'Prisma', 'Vite', 'Redis', 'Socket.io', 'JWT', 'Docker'],
        category: 'fullstack',
        featured: true,
        images: {
            thumbnail: '/lowe_1.png',
            screenshots: ['/lowe_1.png', '/lowe_2.png', '/lowe_3.png', '/adnet_1.png']
        },
        links: {
            live: 'https://lowe.growscale.com.br'
        },
        date: '2026',
        client: 'Growtech',
        caseStudy: {
            challenge: {
                pt: 'Construir uma plataforma capaz de otimizar campanhas com IA sem que o cliente perdesse o controle sobre orçamentos e anúncios ativos — e, ao mesmo tempo, fazer a IA gerar recomendações realmente fundamentadas no contexto de cada conta, e não respostas genéricas.',
                en: "Build a platform that could optimize campaigns with AI without the client losing control over budgets and live ads — and at the same time make the AI generate recommendations genuinely grounded in each account's context, not generic answers.",
            },
            solution: {
                pt: 'Implementei um pipeline de RAG com pgvector: embeddings das campanhas, criativos e histórico ficam indexados no PostgreSQL e alimentam os agentes via busca semântica, garantindo recomendações contextualizadas. Para a segurança da operação, modelei tudo como um fluxo human-in-the-loop, onde os agentes (Auditor, Lances e Criativo) propõem as mudanças e uma pessoa aprova ou rejeita cada uma com justificativa. Os agentes rodam agendados com NestJS Schedule (cron dinâmico por projeto) em paralelo com Promise.allSettled, então uma falha não derruba o lote.',
                en: "I implemented a RAG pipeline with pgvector: embeddings of campaigns, creatives and history are indexed in PostgreSQL and feed the agents through semantic search, ensuring contextualized recommendations. For operational safety, I modeled everything as a human-in-the-loop flow, where the agents (Auditor, Bids and Creative) propose the changes and a person approves or rejects each one with a reason. The agents run on a schedule with NestJS Schedule (dynamic per-project cron) in parallel via Promise.allSettled, so one failure doesn't take down the batch.",
            },
        }
    },
    {
        id: 1,
        slug: 'seguro-viagem',
        title: { pt: 'Seguro Viagem', en: 'Travel Insurance' },
        description: {
            pt: 'Marketplace de Seguros de Viagem integrado a seguradoras e gateways de pagamento',
            en: 'Travel insurance marketplace integrated with insurers and payment gateways',
        },
        longDescription: {
            pt: 'Esse é um dos projetos que mais tenho apreço, foi planejado para ser flexível e escalável, realizei todas as escolhas de infraestrutura, desde a análise de requisito até a Conteinerização para produção e deploy. Utilizei versões mais recentes do Next js ,  e para o backend utilizei o Nest Js pela sua facilidade  e  arquitetura modular. Por fim integrei o sistema de atendimento ao cliente com um agente de IA, para auxiliá-los na cotação de seguros de viagem.',
            en: "This is one of the projects I'm most fond of. It was designed to be flexible and scalable; I made all the infrastructure choices, from requirements analysis to containerization for production and deployment. I used the latest versions of Next.js, and for the backend I chose NestJS for its ease of use and modular architecture. Finally, I integrated the customer support system with an AI agent to help customers with travel insurance quotes.",
        },
        technologies: ['Next', 'Nest', 'PrismaORM', 'MySQL', 'TypeScript', 'Docker', 'Git', 'Responsive Design'],
        category: 'fullstack',
        featured: false,
        images: {
            thumbnail: '/seguro_inicial.png',
            screenshots: ['/seguro_inicial.png', '/seguro_planos.png', '/seguro_checkout.png', '/seguro_agente_atendimento.png', '/seguro_painel_admin.png']
        },
        links: {
            live: 'https://www.google.com.br'
        },
        date: '2025',
        client: 'Growtech',
        caseStudy: {
            challenge: {
                pt: 'Sistema seguro e com alta capacidade para escalar com adição de novas seguradoras e dinamismo no gerencimento da plataforma.',
                en: 'A secure system with high capacity to scale as new insurers are added, with flexibility to manage the platform dynamically.',
            },
            solution: {
                pt: 'Optei por utilizar uma api modular baseada em Node focando na segurança e escalabilidade, tornei cada integração de seguradora como um conector (parte chata, mas valeu muito a pena) e diminuí o tempo de cotação montando um sistema local de cotação e sincronização de seguros.',
                en: 'I chose a modular Node-based API focusing on security and scalability, turned each insurer integration into a connector (the tedious part, but well worth it) and reduced quoting time by building a local quoting and insurance synchronization system.',
            },
        }
    },

    {
        id: 3,
        slug: 'modo-caverna',
        title: { pt: 'Modo Caverna', en: 'Modo Caverna' },
        description: {
            pt: 'Reestruturação completa do antigo Central Caverna',
            en: 'Complete restructuring of the former Central Caverna',
        },
        longDescription: {
            pt: 'Fazer parte do projeto Modo Caverna foi uma experiência absurda para mim, tanto na parte da programação quanto na visão macro do projeto. Fui responsável pela parte administrativa do desenvolvimento, gerenciamento de equipe  e visão de macro  de todo o conjunto  atuo na parte de dados modelagem e administração do banco, pude realizar integrações completas com o Google Calendar, sendo possível gerenciar toda a agenda do usuário de dentro do sistema. Devops: arquitetura e deploy.',
            en: "Being part of the Modo Caverna project was an incredible experience for me, both in programming and in the project's big-picture vision. I was responsible for the administrative side of development, team management and the macro vision of the whole. I work on data, database modeling and administration, and I built complete integrations with Google Calendar, making it possible to manage the user's entire agenda from within the system. DevOps: architecture and deployment.",
        },
        technologies: ['Next Js', 'TypeScript', 'PHP - Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Docker', 'Git'],
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
            challenge: {
                pt: 'O desafio aqui foi melhorar algo já existente, migrar a tecnologia do frontend para Next que antes funcionava em Laravel com Blade. Também foi necessário elaborar todo um plano de migração de tecnologia para migrar os dados de bancos de dados e de storage  garantindo que nada ficasse perdido.',
                en: 'The challenge here was to improve something that already existed: migrating the frontend technology to Next.js, which previously ran on Laravel with Blade. It was also necessary to design an entire technology migration plan to move data from databases and storage, ensuring nothing was lost.',
            },
            solution: {
                pt: 'Desenvolvi uma arquitetura robusta com Laravel e Next js escalável e dockerizada. Implementei o CI/CD oara automatizar o deploy  e garantir que tudo estivesse sempre disponível de forma fluida',
                en: 'I developed a robust, scalable and dockerized architecture with Laravel and Next.js. I implemented CI/CD to automate deployment and ensure everything was always smoothly available.',
            },
        }
    },
    {
        id: 4,
        slug: 'central-caverna',
        title: { pt: 'Central Caverna', en: 'Central Caverna' },
        description: {
            pt: 'SAAS de gestão pessoal para empresa Grupo Sideral',
            en: 'Personal management SaaS for the company Grupo Sideral',
        },
        longDescription: {
            pt: 'Fazer parte do projeto Modo Caverna foi  uma experiência absurda para mim, tanto na parte da programação quanto na visão macro do projeto. Atualmente estou responsável pela parte administrativa do desenvolvimento, atuo na parte de dados modelagem e administração do banco, Devops: arquitetura e deploy. E por fim, atuo também como dev responsável pelo suporte do sistema junto à equipe do suporte. Trabalhar no projeto Modo Caverna foi bastante desafiador no início, pois tive que aprender PHP e também arquitetura de projeto do Laravel. O projeto é desenvolvido utilizando o Laravel Framework e utiliza o Mysql como banco de dados.',
            en: "Being part of the Modo Caverna project was an incredible experience for me, both in programming and in the project's big-picture vision. I'm currently responsible for the administrative side of development; I work on data, database modeling and administration, and DevOps: architecture and deployment. Finally, I also act as the developer responsible for system support alongside the support team. Working on the Modo Caverna project was quite challenging at first, since I had to learn PHP as well as Laravel's project architecture. The project is built using the Laravel Framework and uses MySQL as its database.",
        },
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
            challenge: {
                pt: 'O maior desafio foi criar um sistema SAAS gestão pessoal completo capaz de lidar com milhares de usuários simultâneos, integrações com Google Calendar, área de cursos, controle financeiro, pomodoro... eram pelo menos 11 sistemas em 1 isso tudo garantindo performance e segurança.',
                en: 'The biggest challenge was building a complete personal management SaaS capable of handling thousands of simultaneous users, integrations with Google Calendar, a courses area, financial control, pomodoro... it was at least 11 systems in 1, all while ensuring performance and security.',
            },
            solution: {
                pt: 'Construí uma infraestrutura inteligente para a gestão das metas do usuário, gestão do Pomodoro e controle de tarefas, do controle financeiro e da integração completa com o Google Calendar.',
                en: 'I built an intelligent infrastructure for managing user goals, Pomodoro management and task control, financial control and the full integration with Google Calendar.',
            },
        }
    },
    {
        id: 5,
        slug: 'prouno',
        title: { pt: 'PROUNO - Unoclínica', en: 'PROUNO - Unoclínica' },
        description: {
            pt: 'Sistema de gerenciamento de atendimentos médicos',
            en: 'Medical appointment management system',
        },
        longDescription: {
            pt: 'O Prouno é um webapp gerenciador de atendimentos médicos. Baseado no funcionamento da clínica e focado desde o agendamento do paciente até o pós-atendimento, o sistema gerencia a agenda dos médicos, novos atendimentos e também o histórico cada paciente atendido (anamnese). Os dados sensíveis ficam visíveis somente ao médico responsável e seu paciente de forma totalmente segura e sigilosa. O sistema é desenvolvido em React no frontend e Java no backend, com banco de dados MySQL.',
            en: "Prouno is a web app for managing medical appointments. Based on how the clinic operates and focused on everything from patient scheduling to post-appointment, the system manages doctors' schedules, new appointments and the history of each patient seen (anamnesis). Sensitive data is visible only to the responsible doctor and their patient, in a fully secure and confidential way. The system is built with React on the frontend and Java on the backend, with a MySQL database.",
        },
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
            challenge: {
                pt: 'Implementar melhorias num sistema já existente e ajudar a desenvolver um backend robusto e escalável com microserviços em Java.',
                en: 'Implement improvements to an existing system and help build a robust, scalable backend with microservices in Java.',
            },
            solution: {
                pt: 'ajudei a implementar melhorias num sistema já existente e ajudar a desenvolver um backend robusto e escalável com microserviços em Java.',
                en: 'I helped implement improvements to an existing system and helped build a robust, scalable backend with microservices in Java.',
            },
        }
    },
    {
        id: 7,
        slug: 'acmsoft',
        title: { pt: 'ACMSOFT', en: 'ACMSOFT' },
        description: {
            pt: 'Software de gestão acadêmica universitária',
            en: 'University academic management software',
        },
        longDescription: {
            pt: 'ACMSOFT é um software que trás suporte a toda parte de gestão acadêmica da universidade. Tem a funcionalidade de cadastrar salas, horário das aulas, datas, professores, alunos, disciplinas, cursos, colegiados, departamentos, coordenadores de colegiado; consultar dados; editar; excluir; matricular ou remover a matricula de alunos nas disciplinas; lançar notas do aluno; criar frequência e lançar ata de reunião. O objetivo do desenvolvimento deste projeto está voltado para a agilidade, competência, acessibilidade, redução de papelada, diminuição de erros e a organização dos dados na gestão acadêmica na universidade do cliente.',
            en: "ACMSOFT is software that supports the entire academic management of a university. It can register rooms, class schedules, dates, professors, students, subjects, courses, boards, departments and board coordinators; query data; edit; delete; enroll or unenroll students in subjects; record student grades; create attendance and record meeting minutes. The goal of this project is focused on agility, competence, accessibility, paperwork reduction, fewer errors and the organization of data in the client university's academic management.",
        },
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
    {
        id: 8,
        slug: 'seguro-auto',
        title: { pt: 'Seguro Auto', en: 'Auto Insurance' },
        description: {
            pt: 'Plataforma de cotação de seguros automotivos integrado a seguradoras e ao Zoho CRM',
            en: 'Auto insurance quoting platform integrated with insurers and Zoho CRM',
        },
        longDescription: {
            pt: 'Mais um projeto em que pude desenvolver de ponta a ponta, uma aplicação totalmente stateless em que utilizei uma arquitetura modular integrando cada seguradora e o Zoho CRM de forma desacoplada. Para a observabilidade utilizei Grafana, Prometheus, Loki e Grafana Tempo',
            en: 'Another project I got to build end to end: a fully stateless application where I used a modular architecture integrating each insurer and Zoho CRM in a decoupled way. For observability I used Grafana, Prometheus, Loki and Grafana Tempo.',
        },
        technologies: ['React.js', 'Nest' , "CI/CD" , "Github Actions", 'TypeScript', 'Docker', 'Git', 'Responsive Design', 'Tailwind CSS', 'Grafana', 'Prometheus', 'Loki', 'Grafana Tempo'],
        category: 'fullstack',
        featured: true,
        images: {
            thumbnail: '/seguro_auto.png',
            screenshots: ['/seguro_auto_1.png', '/seguro_auto_2.png', '/seguro_auto_3.png']
        },
        links: {
            live: 'https://seguroauto.newbridge.com.ar/'
        },
        date: '2026',
        client: 'Growtech',
        caseStudy: {
            challenge: {
                pt: 'Desenvolver um sistema seguro, resiliente, com alta escalabilidade e com uma interface moderna, rápida e responsiva para cotação de seguros automotivos.',
                en: 'Build a secure, resilient, highly scalable system with a modern, fast and responsive interface for auto insurance quoting.',
            },
            solution: {
                pt: 'Desenvolvi uma api modular baseada em Node focando na segurança e escalabilidade, tornei cada integração de seguradora como um conector (parte chata, mas valeu muito a pena) e diminuí o tempo de cotação montando um sistema local de cotação e sincronização de seguros. Para a observabilidade utilizei Grafana, Prometheus, Loki e Grafana Tempo.',
                en: 'I built a modular Node-based API focusing on security and scalability, turned each insurer integration into a connector (the tedious part, but well worth it) and reduced quoting time by building a local quoting and insurance synchronization system. For observability I used Grafana, Prometheus, Loki and Grafana Tempo.',
            },
        }
    },

];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getProjectsByCategory = (category: Project['category']) =>
    projects.filter(p => p.category === category);
