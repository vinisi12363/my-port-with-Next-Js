import type { Localized } from "@/i18n/config";

export interface Skill {
    name: string;
    description: Localized;
    icon: string; // URL to icon from skillicons.dev
    category: 'frontend' | 'backend' | 'database' | 'tools';
    proficiency?: number; // 1-5 scale
}

export const skills: Skill[] = [
    // Frontend
    {
        name: 'React',
        description: { pt: 'Eu amo! ❤️', en: 'I love it! ❤️' },
        icon: 'https://skillicons.dev/icons?i=react',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'Next.js',
        description: { pt: 'Poderoso framework React', en: 'Powerful React Framework' },
        icon: 'https://skillicons.dev/icons?i=nextjs',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'TypeScript',
        description: { pt: "O tipo 'any' não é permitido aqui xD", en: 'Any type is not allowed here xD' },
        icon: 'https://skillicons.dev/icons?i=ts',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'HTML',
        description: { pt: 'Linguagem de hipertexto', en: 'Hypertext language' },
        icon: 'https://skillicons.dev/icons?i=html',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'CSS',
        description: { pt: 'Estilo para páginas HTML', en: 'Style for HTML pages' },
        icon: 'https://skillicons.dev/icons?i=css',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'JavaScript',
        description: { pt: 'Extremamente útil', en: 'Extremely useful' },
        icon: 'https://skillicons.dev/icons?i=js',
        category: 'frontend',
        proficiency: 5
    },

    {
        name: 'Redux',
        description: {
            pt: 'Centralização de estado, previsibilidade e gerência de estados complexos',
            en: 'State centralization, predictability, complex state management',
        },
        icon: 'https://skillicons.dev/icons?i=redux',
        category: 'frontend',
        proficiency: 4
    },
    {
        name: 'Bootstrap',
        description: { pt: 'Framework CSS', en: 'CSS Framework' },
        icon: 'https://skillicons.dev/icons?i=bootstrap',
        category: 'frontend',
        proficiency: 4
    },
    {
        name: 'Tailwind CSS',
        description: { pt: 'Framework CSS utility-first', en: 'Utility-first CSS framework' },
        icon: 'https://skillicons.dev/icons?i=tailwind',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'Zustand',
        description: { pt: 'Gerência de estado leve', en: 'Lightweight state management' },
        icon: 'https://skillicons.dev/icons?i=react',
        category: 'frontend',
        proficiency: 4
    },


    // Backend
    {
        name: 'Node.js',
        description: { pt: 'Tudo é possível', en: 'Everything is possible' },
        icon: 'https://skillicons.dev/icons?i=nodejs',
        category: 'backend',
        proficiency: 5
    },
    {
        name: 'Express',
        description: {
            pt: 'Usado para gerência de rotas e requisições assíncronas',
            en: 'Used for management of routes and async requests',
        },
        icon: 'https://skillicons.dev/icons?i=express',
        category: 'backend',
        proficiency: 5
    },
    {
        name: 'NestJS',
        description: {
            pt: 'Framework Node.js para construir aplicações server-side escaláveis.',
            en: 'Node.js framework for building scalable server-side applications.',
        },
        icon: 'https://skillicons.dev/icons?i=nestjs',
        category: 'backend',
        proficiency: 5
    },
    {
        name: 'Laravel',
        description: { pt: 'Framework PHP', en: 'PHP Framework' },
        icon: 'https://skillicons.dev/icons?i=laravel',
        category: 'backend',
        proficiency: 5
    },

    // Databases
    {
        name: 'PostgreSQL',
        description: { pt: 'Meu banco relacional favorito', en: 'My favourite Relational DB' },
        icon: 'https://skillicons.dev/icons?i=postgres',
        category: 'database',
        proficiency: 5
    },
    {
        name: 'MySQL',
        description: { pt: 'Banco de dados relacional', en: 'Relational Database' },
        icon: 'https://skillicons.dev/icons?i=mysql',
        category: 'database',
        proficiency: 5
    },
    {
        name: 'MongoDB',
        description: { pt: 'Banco não-relacional...mongod...mongosh', en: 'Non-relational db...mongod...mongosh' },
        icon: 'https://skillicons.dev/icons?i=mongodb',
        category: 'database',
        proficiency: 4
    },

    // Tools
    {
        name: 'Docker',
        description: { pt: 'Plataforma de conteinerização', en: 'Containerization platform' },
        icon: 'https://skillicons.dev/icons?i=docker',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Git',
        description: { pt: 'Sistema de controle de versão', en: 'Version control system' },
        icon: 'https://skillicons.dev/icons?i=git',
        category: 'tools',
        proficiency: 5
    },

    {
        name: 'AWS',
        description: { pt: 'Serviços em nuvem', en: 'Cloud Services' },
        icon: 'https://skillicons.dev/icons?i=aws',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Cloudflare',
        description: { pt: 'CDN e serviços da Cloudflare', en: 'Cloudflare CDN and services' },
        icon: 'https://skillicons.dev/icons?i=cloudflare',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'DigitalOcean',
        description: { pt: 'Provedor de infraestrutura em nuvem', en: 'Cloud infrastructure provider' },
        icon: 'https://skillicons.dev/icons?i=digitalocean',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Jest',
        description: { pt: 'Framework de testes JavaScript', en: 'JavaScript testing framework' },
        icon: 'https://skillicons.dev/icons?i=jest',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Grafana',
        description: { pt: 'Plataforma de observabilidade', en: 'Observability platform' },
        icon: 'https://skillicons.dev/icons?i=grafana',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Prometheus',
        description: { pt: 'Plataforma de observabilidade', en: 'Observability platform' },
        icon: 'https://skillicons.dev/icons?i=prometheus',
        category: 'tools',
        proficiency: 4
    },
];

export const getSkillsByCategory = (category: Skill['category']) =>
    skills.filter(skill => skill.category === category);

export const frontendSkills = getSkillsByCategory('frontend');
export const backendSkills = getSkillsByCategory('backend');
export const databaseSkills = getSkillsByCategory('database');
export const toolsSkills = getSkillsByCategory('tools');
