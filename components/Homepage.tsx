"use client";

import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about";
import { StacksSection } from "./sections/stacks";
import { ProjectsSection } from "./sections/projects";
import { ExperienceSection } from "./sections/experience";
import { ContactSection } from "./sections/contact";

export default function Homepage() {
	return (
		<div className="w-full bg-cbg" style={{ fontFamily: "var(--font-sans)" }}>
			<HeroSection />
			<AboutSection />
			<StacksSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</div>
	);
}
