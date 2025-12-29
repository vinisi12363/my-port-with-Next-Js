"use client";

import { HeroSection } from "./sections/hero";
import { ProjectsSection } from "./sections/projects";
import { SkillsSection } from "./sections/skills";
import { ExperienceSection } from "./sections/experience";
import { ContactSection } from "./sections/contact";

export default function Homepage() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ExperienceSection />
			<ContactSection />
		</div>
	);
}
