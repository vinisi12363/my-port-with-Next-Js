export interface Experience {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
    achievements?: string[];
    current?: boolean;
}

export const experiences: Experience[] = [
    {
        id: 1,
        company: 'Grow & Scale',
        position: 'Desenvolvedor Fullstack Pleno',
        period: '06/2025',
        description: 'Desenvolvimento de completo de soluções fullstack. Fui responsável por tomadas de decisão cruciais para o desenvolvimento de diversos projetos, responsável pela estruturação de arquitetura resiliente e com suporte a tráfego de dados pesado para múiiltiplas conexões simultâneas.Atuação em projetos de alta complexidade com foco em performance e experiência do usuário.',
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Digital Ocean' , 'Nest Js'],
        achievements: [
            'Desenvolvimento de aplicações web modernas e responsivas',
            'Implementação de arquiteturas escaláveis e performáticas em React/Next.js e Nest.js',
            'Integração com gateways de pagamento diversos como: Asaas, Bradesco, Valepay, PagSeguro',
            'Integração com as mais diversas APIs de seguros de viagem e seguros automotivos',
            'Integração e deploy de serviços cloud (AWS S3, DigitalOcean)',
            'Desenvolvimento de soluções fullstack para clientes e empresas'
        ],
        current: true
    },
    {
        id: 2,
        company: 'Grupo Sideral',
        position: 'Desenvolvedor Fullstack & Gestor de Projeto',
        period: '   07/2024 - 05/2025',
        description: 'Responsável pelo desenvolvimento e gestão do projeto Central Caverna (SAAS de gestão pessoal). Atuação em desenvolvimento fullstack, arquitetura de sistema, DevOps, modelagem e administração de banco de dados, e suporte técnico.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Docker', 'Git'],
        achievements: [
            'Liderei migração completa de arquitetura e tecnologias do sistema',
            'Planejei e executei processo de migração de dados para o novo sistema e arquitetura',
            'Realizei setup e hospedagem de servidores backend e frontend',
            'Implementei melhorias significativas na performance do sistema'
        ]
    },
    {
        id: 3,
        company: 'Unoclínica',
        position: 'Desenvolvedor Fullstack',
        period: '07/2023 - 06/2024',
        description: 'Desenvolvimento do sistema PROUNO, um gerenciador completo de atendimentos médicos. Sistema focado em agendamento, gestão de agenda médica, atendimentos e histórico de pacientes (anamnese) com segurança e sigilo de dados.',
        technologies: ['React', 'Redux', 'JavaScript', 'Java', 'Spring Boot', 'MySQL'],
        achievements: [
            'Desenvolvimento de sistema completo de gestão de atendimentos médicos',
            'Implementação de sistema seguro de gestão de dados sensíveis',
            'Criação de interface intuitiva para médicos e pacientes'
        ]
    },
    {
        id: 4,
        company: 'Projetos Acadêmicos',
        position: 'Desenvolvedor',
        period: '2020 - 2022',
        description: 'Desenvolvimento de diversos projetos acadêmicos e pessoais incluindo ACMSOFT (gestão acadêmica universitária), GrupoCine (reserva de assentos), My Wallet (controle financeiro) e Weather App.',
        technologies: ['React', 'JavaScript', 'Java', 'MySQL', 'MongoDB', 'Node.js'],
    }
];

export const getCurrentExperience = () => experiences.find(exp => exp.current);
export const getTotalYearsOfExperience = () => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
};
