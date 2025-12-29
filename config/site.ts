export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vini's Portfolio",
  description: "My personal portfolio with Next.js and NextUI",
  navItems: [

    {
      label: "Início",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/about",
    },
    /*{
      label: "Curriculum",
      href: "/curriculum",
    },*/
    {
	  label: "Contato",
	  href: "/contact",
	},
  ],
  navMenuItems: [
	
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
   /* {
      label: "Curriculum",
      href: "/curriculum",
    },*/
    {
	  label: "Contact",
	  href: "/contact",
	},
  ],
  links: {
    github: "https://github.com/vinisi12363",
    twitter: "https://twitter.com/getnextui",
	linkedin: "https://www.linkedin.com/in/vini-si12363",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
