import type { Localized } from "@/i18n/config";

export interface Experience {
    id: number;
    company: string;
    position: Localized;
    period: string;
    description: Localized;
    technologies: string[];
    achievements?: Localized<string[]>;
    current?: boolean;
}

export const experiences: Experience[] = [
    {
        id: 1,
        company: 'GESEC',
        position: {
            pt: 'Desenvolvedor Fullstack Pleno',
            en: 'Mid-level Fullstack Developer',
        },
        period: '01/2026 - Atual',
        description: {
            pt: 'Desenvolvimento de plataforma de controle de acesso IoT com sincronização em tempo real entre cloud e dispositivos físicos (catracas, centrais de alarmes, NVR, VMS) distribuídos em condomínios, escolas, órgãos governamentais e edifícios comerciais.',
            en: "Development of an IoT access control platform with real-time synchronization between cloud and physical devices (turnstiles, alarm centers, NVR, VMS) distributed across condominiums, schools, government agencies and commercial buildings.",
        },
        technologies: ['Node.js', 'TypeScript', 'Next.js', 'WebSocket mTLS', 'Kubernetes', 'Docker', 'Cloudflare', 'PostgreSQL', 'AWS'],
        achievements: {
            pt: [
                'Arquitetei e desenvolvi todo o ecossistema de Observabilidade da infraestrutura, que executa de forma híbrida em Cloud e Local',
                'Realizei integrações com diversos tipos de equipamentos IoT ONVIF e homologados',
                'Projetei o sistema com foco em baixa latência e alta disponibilidade: arquitetura multi-tenant via entidade de contratante, com serviços de mensageria entre o servidor Cloud e os servidores locais dos clientes',
                'Implementei criptografia de dados sensíveis antes da persistência no banco de dados, garantindo conformidade com requisitos de segurança da informação, com visualização limitada por tipo de perfil que acessa o painel administrativo',
            ],
            en: [
                'Architected and developed the entire observability ecosystem for the infrastructure, which runs in a hybrid Cloud and Local setup',
                'Performed integrations with various types of ONVIF and certified IoT equipment',
                "Designed the system focusing on low latency and high availability: multi-tenant architecture via contractor entity, with messaging services between the Cloud server and the customers' local servers",
                'Implemented encryption for sensitive data before persistence in the database, ensuring compliance with information security requirements, with limited visibility per profile type that accesses the administrative panel',
            ],
        },
        current: true,
    },
    {
        id: 2,
        company: 'Grow & Scale',
        position: {
            pt: 'Desenvolvedor Fullstack Pleno',
            en: 'Mid-level Fullstack Developer',
        },
        period: '06/2025-06/2026',
        description: {
            pt: 'Desenvolvimento de completo de soluções fullstack. Fui responsável por tomadas de decisão cruciais para o desenvolvimento de diversos projetos, responsável pela estruturação de arquitetura resiliente e com suporte a tráfego de dados pesado para múiiltiplas conexões simultâneas.Atuação em projetos de alta complexidade com foco em performance e experiência do usuário.',
            en: 'Full development of fullstack solutions. I was responsible for crucial decisions across several projects, structuring a resilient architecture with support for heavy data traffic and multiple simultaneous connections. Working on high-complexity projects focused on performance and user experience.',
        },
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Digital Ocean', 'Nest Js', 'Cloudflare', 'Grafana'],
        achievements: {
            pt: [
                'Implementação de arquiteturas escaláveis e performáticas em React/Next.js e Nest.js',
                'Integração com gateways de pagamento diversos como: Asaas, Bradesco, Valepay, PagSeguro',
                'Integração com as mais diversas APIs de seguros de viagem e seguros automotivos',
                'Integração e deploy de serviços cloud (AWS S3, DigitalOcean)',
                'Desenvolvimento de soluções fullstack para clientes e empresas',
            ],
            en: [
                'Implementation of scalable and performant architectures in React/Next.js and Nest.js',
                'Integration with several payment gateways such as: Asaas, Bradesco, Valepay, PagSeguro',
                'Integration with a wide range of travel and auto insurance APIs',
                'Integration and deployment of cloud services (AWS S3, DigitalOcean)',
                'Development of fullstack solutions for clients and companies',
            ],
        },
    },
    {
        id: 3,
        company: 'Grupo Sideral',
        position: {
            pt: 'Desenvolvedor Fullstack & Gestor de Projeto',
            en: 'Fullstack Developer & Project Manager',
        },
        period: '   07/2024 - 05/2025',
        description: {
            pt: 'Responsável pelo desenvolvimento e gestão do projeto Central Caverna (SAAS de gestão pessoal). Atuação em desenvolvimento fullstack, arquitetura de sistema, DevOps, modelagem e administração de banco de dados, e suporte técnico.',
            en: 'Responsible for the development and management of the Central Caverna project (a personal management SaaS). Working on fullstack development, system architecture, DevOps, database modeling and administration, and technical support.',
        },
        technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Docker', 'Git'],
        achievements: {
            pt: [
                'Liderei migração completa de arquitetura e tecnologias do sistema',
                'Planejei e executei processo de migração de dados para o novo sistema e arquitetura',
                'Realizei setup e hospedagem de servidores backend e frontend',
                'Implementei melhorias significativas na performance do sistema',
            ],
            en: [
                "Led the complete migration of the system's architecture and technologies",
                'Planned and executed the data migration process to the new system and architecture',
                'Set up and hosted backend and frontend servers',
                "Implemented significant improvements to the system's performance",
            ],
        },
    },
    {
        id: 4,
        company: 'Unoclínica',
        position: {
            pt: 'Desenvolvedor Fullstack',
            en: 'Fullstack Developer',
        },
        period: '07/2023 - 06/2024',
        description: {
            pt: 'Desenvolvimento do sistema PROUNO, um gerenciador completo de atendimentos médicos. Sistema focado em agendamento, gestão de agenda médica, atendimentos e histórico de pacientes (anamnese) com segurança e sigilo de dados.',
            en: 'Development of the PROUNO system, a complete manager for medical appointments. The system focuses on scheduling, medical agenda management, appointments and patient history (anamnesis) with data security and confidentiality.',
        },
        technologies: ['React', 'Redux', 'JavaScript', 'Java', 'Spring Boot', 'MySQL'],
        achievements: {
            pt: [
                'Desenvolvimento de sistema completo de gestão de atendimentos médicos',
                'Implementação de sistema seguro de gestão de dados sensíveis',
                'Criação de interface intuitiva para médicos e pacientes',
            ],
            en: [
                'Development of a complete medical appointment management system',
                'Implementation of a secure system for handling sensitive data',
                'Creation of an intuitive interface for doctors and patients',
            ],
        },
    },
    {
        id: 5,
        company: 'Projetos Acadêmicos',
        position: {
            pt: 'Desenvolvedor',
            en: 'Developer',
        },
        period: '2020 - 2022',
        description: {
            pt: 'Desenvolvimento de diversos projetos acadêmicos e pessoais incluindo ACMSOFT (gestão acadêmica universitária), GrupoCine (reserva de assentos), My Wallet (controle financeiro) e Weather App.',
            en: 'Development of several academic and personal projects including ACMSOFT (university academic management), GrupoCine (seat booking), My Wallet (personal finance) and a Weather App.',
        },
        technologies: ['React', 'JavaScript', 'Java', 'MySQL', 'MongoDB', 'Node.js'],
    }
];

export const getCurrentExperience = () => experiences.find(exp => exp.current);
export const getTotalYearsOfExperience = () => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
};
