export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vini's Portfolio",
  description: "My personal portfolio with Next.js and NextUI",
  navItems: [

    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Applications",
      href: "/applications",
    },
    {
	  label: "Contact",
	  href: "/contact",
	},
  ],
  navMenuItems: [
	
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
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
