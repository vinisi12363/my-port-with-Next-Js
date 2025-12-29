"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { projects, Project } from "@/data/projects";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import { ProjectModal } from "@/components/project-modal";

export default function ProjetosPage() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <main className="min-h-screen py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header com botão de voltar */}
                    <motion.div
                        ref={ref}
                        variants={fadeInUp}
                        initial="initial"
                        animate={inView ? "animate" : "initial"}
                        className="mb-12"
                    >
                        <Button
                            as={Link}
                            href="/"
                            variant="light"
                            startContent={<ArrowLeft className="w-4 h-4" />}
                            className="mb-6"
                        >
                            Voltar ao Início
                        </Button>

                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="gradient-text">Casos de Sucesso</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Conheça alguns projetos de sucesso que desenvolvi, os que estão listados aqui foram os mais desafiadores e gratificantes que tive a oportunidade de desenvolver.
                        </p>
                    </motion.div>

                    {/* Grid de todos os projetos */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate={inView ? "animate" : "initial"}
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {projects.map((project) => (
                            <motion.div key={project.id} variants={staggerItem}>
                                <Card
                                    className="card-hover glass h-full group cursor-pointer"
                                    isPressable
                                    onPress={() => handleOpenModal(project)}
                                >
                                    <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                                        <div className="w-full aspect-video relative overflow-hidden rounded-lg mb-3">
                                            <Image
                                                alt={project.title}
                                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                                src={project.images.thumbnail}
                                                removeWrapper
                                            />
                                            {/* Overlay com ícone no hover */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="flex items-center gap-2 text-white font-medium">
                                                    <Eye className="w-5 h-5" />
                                                    Ver Estudo de Caso
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-bold text-xl">{project.title}</h3>
                                            {project.featured && (
                                                <Chip size="sm" color="secondary" variant="flat">
                                                    Destaque
                                                </Chip>
                                            )}
                                        </div>
                                        {project.client && (
                                            <p className="text-sm text-muted-foreground">{project.client}</p>
                                        )}
                                    </CardHeader>
                                    <CardBody className="py-3 px-4">
                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <Chip key={tech} size="sm" variant="flat" color="primary">
                                                    {tech}
                                                </Chip>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <Chip size="sm" variant="flat">
                                                    +{project.technologies.length - 4}
                                                </Chip>
                                            )}
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>

            {/* Modal de Projeto */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
