"use client";

import {
    ExternalLink,
    Github,
    Database,
    Zap,
    X,
    ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getFeaturedProjects, Project } from "@/data/projects";
import { useLang } from "@/i18n/LanguageProvider";
import { tx } from "@/i18n/config";
import Link from "next/link";

function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const { t, lang } = useLang();

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const challenge = project.caseStudy
        ? tx(project.caseStudy.challenge, lang)
        : tx(project.description, lang);
    const solution = project.caseStudy
        ? tx(project.caseStudy.solution, lang)
        : tx(project.longDescription, lang);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-cbg-alt border border-cborder rounded-lg shadow-2xl"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#1e2b45 transparent" }}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cbg/80 border border-cborder text-cdim hover:text-cprimary hover:border-cprimary transition-all cursor-pointer"
                >
                    <X size={18} />
                </button>

                <div className="relative w-full h-48 md:h-64 bg-cbg border-b border-cborder overflow-hidden">
                    {project.images?.thumbnail ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={project.images.thumbnail}
                            alt={tx(project.title, lang)}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                            <Database className="text-cborder" size={56} />
                            <span className="text-cborder font-mono text-sm">
                                {"// screenshot coming soon"}
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-cbg-alt via-transparent to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            {project.featured && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-cprimary/15 text-cprimary rounded text-xs font-mono mb-3 border border-cprimary/30">
                                    <Zap size={12} />
                                    {t.projectsPage.featured}
                                </span>
                            )}
                            <h3 className="text-2xl md:text-3xl text-cheading">
                                {tx(project.title, lang)}
                            </h3>
                        </div>
                        <div className="flex gap-3 ml-4 mt-1">
                            {project.links?.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded border border-cborder text-cdim hover:text-cprimary hover:border-cprimary transition-all"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                            {project.links?.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded border border-cborder text-cdim hover:text-cprimary hover:border-cprimary transition-all"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-cborder mb-6" />

                    <div className="mb-6">
                        <p className="text-sm text-cdim mb-2 font-mono">
                            {"// "}{t.projectModal.challengeTitle}
                        </p>
                        <p className="text-csoft leading-relaxed text-base">{challenge}</p>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-cdim mb-2 font-mono">
                            {"// "}{t.projectModal.solutionTitle}
                        </p>
                        <p className="text-cmuted leading-relaxed text-base">{solution}</p>
                    </div>

                    <div className="h-[1px] w-full bg-cborder mb-6" />

                    <div>
                        <p className="text-sm text-cdim mb-3 font-mono">{"// Tech Stack:"}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-cborder/60 text-csoft rounded text-xs font-mono border border-cdim/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function ProjectsSection() {
    const { t, lang } = useLang();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const featuredProjects = getFeaturedProjects();

    return (
        <section id="projects" className="py-20 bg-cbg-alt">
            <div className="w-full px-5 sm:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[1700px] mx-auto"
                >
                    <div className="mb-12">
                        <h2 className="text-5xl md:text-6xl mb-3">
                            <span className="text-cprimary font-mono text-xl">03.</span>{" "}
                            <span className="text-cheading">{t.projects.title}</span>
                        </h2>
                        <div className="h-[2px] w-32 bg-cprimary" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedProject(project)}
                                className="group relative p-6 bg-cbg border border-cborder rounded hover:border-cprimary transition-all cursor-pointer"
                            >
                                {project.featured && (
                                    <div className="absolute -top-3 -right-3">
                                        <motion.div
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="px-3 py-1 bg-cprimary text-cbg rounded text-xs font-mono flex items-center gap-1"
                                        >
                                            <Zap size={12} />
                                            {t.projectsPage.featured}
                                        </motion.div>
                                    </div>
                                )}

                                <div className="flex items-start justify-between mb-4">
                                    <Database className="text-cprimary" size={32} />
                                    <div className="flex gap-3">
                                        {project.links?.github && (
                                            <motion.a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-cdim hover:text-cprimary transition-colors"
                                            >
                                                <Github size={20} />
                                            </motion.a>
                                        )}
                                        {project.links?.live && (
                                            <motion.a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                whileHover={{ scale: 1.2 }}
                                                className="text-cdim hover:text-cprimary transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl text-cheading mb-3 font-mono group-hover:text-cprimary transition-colors">
                                    {tx(project.title, lang)}
                                </h3>

                                <div className="mb-4">
                                    <p className="text-cmuted leading-relaxed line-clamp-3">
                                        {tx(project.description, lang)}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies.slice(0, 6).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-cborder text-csoft rounded text-xs font-mono border border-transparent group-hover:border-cdim transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 pt-3 border-t border-cborder/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-xs text-cdim font-mono flex items-center gap-1">
                                        {t.projects.caseStudyHover}
                                        <ChevronRight size={12} />
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <Link
                            href="/projetos"
                            className="inline-flex items-center gap-2 text-cprimary hover:text-cheading font-mono transition-colors group"
                        >
                            {t.projects.otherProjects}
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
