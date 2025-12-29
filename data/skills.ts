export interface Skill {
    name: string;
    description: string;
    icon: string; // URL to icon from skillicons.dev
    category: 'frontend' | 'backend' | 'database' | 'tools';
    proficiency?: number; // 1-5 scale
}

export const skills: Skill[] = [
    // Frontend
      {
        name: 'React',
        description: 'I love it! ❤️',
        icon: 'https://skillicons.dev/icons?i=react',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'Next.js',
        description: 'Powerful React Framework',
        icon: 'https://skillicons.dev/icons?i=nextjs',
        category: 'frontend',
        proficiency: 5
    },
       {
        name: 'TypeScript',
        description: 'Any type is not allowed here xD',
        icon: 'https://skillicons.dev/icons?i=ts',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'HTML',
        description: 'Hypertext language',
        icon: 'https://skillicons.dev/icons?i=html',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'CSS',
        description: 'Style for HTML pages',
        icon: 'https://skillicons.dev/icons?i=css',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'JavaScript',
        description: 'Extremely useful',
        icon: 'https://skillicons.dev/icons?i=js',
        category: 'frontend',
        proficiency: 5
    },
 
    {
        name: 'Redux',
        description: 'State centralization, predictability, complex state management',
        icon: 'https://skillicons.dev/icons?i=redux',
        category: 'frontend',
        proficiency: 4
    },
    {
        name: 'Bootstrap',
        description: 'CSS Framework',
        icon: 'https://skillicons.dev/icons?i=bootstrap',
        category: 'frontend',
        proficiency: 4
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework',
        icon: 'https://skillicons.dev/icons?i=tailwind',
        category: 'frontend',
        proficiency: 5
    },
    {
        name: 'Zustand',
        description: 'Lightweight state management',
        icon: 'https://skillicons.dev/icons?i=react',
        category: 'frontend',
        proficiency: 4
    },
 
    {
        name: 'Responsive Design',
        description: 'Mobile-first responsive layouts',
        icon: 'https://skillicons.dev/icons?i=css',
        category: 'frontend',
        proficiency: 5
    },

    // Backend
    {
        name: 'Node.js',
        description: 'Everything is possible',
        icon: 'https://skillicons.dev/icons?i=nodejs',
        category: 'backend',
        proficiency: 5
    },
    {
        name: 'Express',
        description: 'Express be used for management of Routes and async requests',
        icon: 'https://skillicons.dev/icons?i=express',
        category: 'backend',
        proficiency: 5
    },
    {
        name: 'PHP',
        description: 'Server-side scripting language',
        icon: 'https://skillicons.dev/icons?i=php',
        category: 'backend',
        proficiency: 5
    },
    {
        name: 'Laravel',
        description: 'PHP Framework',
        icon: 'https://skillicons.dev/icons?i=laravel',
        category: 'backend',
        proficiency: 5
    },

    // Databases
    {
        name: 'PostgreSQL',
        description: 'My favourite Relational DB',
        icon: 'https://skillicons.dev/icons?i=postgres',
        category: 'database',
        proficiency: 5
    },
    {
        name: 'MySQL',
        description: 'Relational Database',
        icon: 'https://skillicons.dev/icons?i=mysql',
        category: 'database',
        proficiency: 5
    },
    {
        name: 'MongoDB',
        description: 'Non-relational db...mongod...mongosh',
        icon: 'https://skillicons.dev/icons?i=mongodb',
        category: 'database',
        proficiency: 4
    },

    // Tools
      {
        name: 'Docker',
        description: 'Containerization platform',
        icon: 'https://skillicons.dev/icons?i=docker',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Git',
        description: 'Version control system',
        icon: 'https://skillicons.dev/icons?i=git',
        category: 'tools',
        proficiency: 5
    },
  
    {
        name: 'AWS S3',
        description: 'Cloud storage service',
        icon: 'https://skillicons.dev/icons?i=aws',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'DigitalOcean',
        description: 'Cloud infrastructure provider',
        icon: 'https://skillicons.dev/icons?i=digitalocean',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Cloud Databases',
        description: 'Managed database services',
        icon: 'https://skillicons.dev/icons?i=cloudflare',
        category: 'tools',
        proficiency: 4
    },
    {
        name: 'Jest',
        description: 'JavaScript testing framework',
        icon: 'https://skillicons.dev/icons?i=jest',
        category: 'tools',
        proficiency: 4
    }
];

export const getSkillsByCategory = (category: Skill['category']) =>
    skills.filter(skill => skill.category === category);

export const frontendSkills = getSkillsByCategory('frontend');
export const backendSkills = getSkillsByCategory('backend');
export const databaseSkills = getSkillsByCategory('database');
export const toolsSkills = getSkillsByCategory('tools');
