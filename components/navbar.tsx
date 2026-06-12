"use client";

import { useState } from "react";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Terminal } from "lucide-react";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { LanguageSelector } from "./LanguageComponent";
import { useLang } from "@/i18n/LanguageProvider";

export const Navbar = () => {
	const { t, lang } = useLang();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ id: "about", label: t.nav.about },
		// { id: "stacks", label: "Stacks" },
		{ id: "projects", label: lang === "pt" ? "Projetos" : "Projects" },
		{ id: "experience", label: lang === "pt" ? "Experiência" : "Experience" },
		{ id: "contact", label: t.nav.contact },
	];

	// Single-page behaviour: smooth-scroll to the section if it exists on the
	// current page; otherwise fall back to the href (navigates home, then anchors).
	const handleNav = (e: React.MouseEvent, id: string) => {
		const el = typeof document !== "undefined" ? document.getElementById(id) : null;
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	const scrollTop = (e: React.MouseEvent) => {
		if (typeof window !== "undefined" && window.location.pathname === "/") {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<NextUINavbar
			maxWidth="full"
			position="sticky"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				base: "bg-cbg/80 backdrop-blur-md border-b border-cborder",
				wrapper: "px-5 sm:px-8 lg:px-16",
			}}
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-2 max-w-fit">
					<Link
						href="/"
						onClick={scrollTop}
						className="flex justify-start items-center gap-2 cursor-pointer"
					>
						<Terminal className="text-cprimary" size={24} />
						<p className="font-mono font-bold text-lg text-cheading">VINI WEB DEV</p>
					</Link>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-8 justify-start ml-4">
					{navItems.map((item) => (
						<NavbarItem key={item.id}>
							<a
								href={`/#${item.id}`}
								onClick={(e) => handleNav(e, item.id)}
								className="text-cmuted hover:text-cheading transition-colors font-mono text-sm"
							>
								<span className="text-cprimary">_</span>
								{item.label}
							</a>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-3 items-center">
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
						<LinkedinIcon className="text-cmuted hover:text-cprimary transition-colors" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-cmuted hover:text-cprimary transition-colors" />
					</Link>
					<ThemeSwitch />
					<LanguageSelector />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4 gap-2" justify="end">
				<LanguageSelector />
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-cmuted hover:text-cprimary transition-colors" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className="bg-cbg/95 backdrop-blur-md">
				<div className="mx-4 mt-2 flex flex-col gap-3">
					{navItems.map((item) => (
						<NavbarMenuItem key={item.id}>
							<a
								href={`/#${item.id}`}
								onClick={(e) => handleNav(e, item.id)}
								className="text-cmuted hover:text-cheading transition-colors font-mono text-lg"
							>
								<span className="text-cprimary">_</span>
								{item.label}
							</a>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
