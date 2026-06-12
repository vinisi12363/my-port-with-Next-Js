"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { Database, Zap, ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import { ProjectModal } from "@/components/project-modal";
import { useLang } from "@/i18n/LanguageProvider";
import { tx } from "@/i18n/config";

export default function ProjetosPage() {
    const { t, lang } = useLang();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <main className="min-h-screen bg-cbg py-20">
                <div className="w-full px-5 sm:px-8 lg:px-16">
                    <div className="max-w-[1700px] mx-auto">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-cmuted hover:text-cprimary font-mono text-sm mb-6 transition-colors"
                            >
                                <ArrowLeft size={16} />
                                {t.projectsPage.back}
                            </Link>

                            <h1 className="text-5xl md:text-7xl mb-3">
                                <span className="text-cprimary font-mono text-2xl">~/</span>{" "}
                                <span className="text-cheading font-semibold">
                                    {t.projectsPage.title}
                                </span>
                            </h1>
                            <div className="h-[2px] w-32 bg-cprimary mb-6" />
                            <p className="text-lg text-cmuted max-w-3xl leading-relaxed">
                                {t.projectsPage.subtitle}
                            </p>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index % 3) * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => openModal(project)}
                                    className="group relative bg-cbg-alt border border-cborder rounded-lg overflow-hidden hover:border-cprimary transition-all cursor-pointer flex flex-col"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative w-full aspect-video overflow-hidden bg-cbg">
                                        {project.images?.thumbnail ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={project.images.thumbnail}
                                                alt={tx(project.title, lang)}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Database className="text-cborder" size={48} />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-cbg/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="flex items-center gap-2 text-cprimary font-mono text-sm">
                                                <Eye size={18} />
                                                {t.projects.caseStudyHover}
                                            </span>
                                        </div>
                                        {project.featured && (
                                            <div className="absolute top-3 right-3 px-2 py-1 bg-cprimary text-cbg rounded text-xs font-mono flex items-center gap-1">
                                                <Zap size={12} />
                                                {t.projectsPage.featured}
                                            </div>
                                        )}
                                    </div>

                                    {/* Body */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg text-cheading font-mono mb-2 group-hover:text-cprimary transition-colors">
                                            {tx(project.title, lang)}
                                        </h3>
                                        <p className="text-sm text-cmuted leading-relaxed line-clamp-3 mb-4 flex-grow">
                                            {tx(project.description, lang)}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-cborder text-csoft rounded text-xs font-mono"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="px-2 py-1 bg-cborder text-cdim rounded text-xs font-mono">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}
