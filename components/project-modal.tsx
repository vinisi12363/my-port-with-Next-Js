"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ExternalLink, Target, Lightbulb, Calendar, Building2, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    const images = project.images.screenshots.length > 0
        ? project.images.screenshots
        : [project.images.thumbnail];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="5xl"
            scrollBehavior="inside"
            backdrop="blur"
            classNames={{
                base: "bg-black/90 backdrop-blur-2xl border border-white/10 shadow-2xl",
                header: "border-b border-white/10 pb-4",
                body: "py-0",
                footer: "border-t border-white/10 pt-4",
                closeButton: "hover:bg-white/10 active:bg-white/20",
            }}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                },
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        {/* ÁREA DO TÍTULO */}
                        <ModalHeader className="flex flex-col gap-1 pt-6">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h2 className="text-2xl md:text-3xl font-display font-bold">
                                    <span className="gradient-text">{project.title}</span>
                                </h2>
                                {project.featured && (
                                    <Chip
                                        size="sm"
                                        variant="shadow"
                                        classNames={{
                                            base: "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25",
                                            content: "text-white font-semibold",
                                        }}
                                    >
                                        ⭐ Destaque
                                    </Chip>
                                )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 flex-wrap">
                                {project.client && (
                                    <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10">
                                        <Building2 className="w-4 h-4 text-primary" />
                                        {project.client}
                                    </span>
                                )}
                                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-secondary/10">
                                    <Calendar className="w-4 h-4 text-secondary" />
                                    {project.date}
                                </span>
                                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent/10">
                                    <Layers className="w-4 h-4 text-accent" />
                                    {project.category}
                                </span>
                            </div>
                        </ModalHeader>

                        <ModalBody className="custom-scrollbar">
                            <div className="py-6 space-y-6">
                                {/* LAYOUT PRINCIPAL: Carrossel + Accordions lado a lado */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    {/* CARROSSEL DE IMAGENS - Ocupa 2 colunas */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="lg:col-span-2 relative w-full aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black/20"
                                    >
                                        {/* Imagem atual do carrossel */}
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                                                    src={images[currentImageIndex]}
                                                    className="object-cover w-full h-full"
                                                    removeWrapper
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                        {/* Controles do carrossel */}
                                        {images.length > 1 && (
                                            <>
                                                {/* Setas de navegação */}
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110"
                                                    aria-label="Imagem anterior"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110"
                                                    aria-label="Próxima imagem"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>

                                                {/* Indicadores de página (dots) */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                                                    {images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToImage(index)}
                                                            className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                                                ? "bg-white w-6"
                                                                : "bg-white/50 hover:bg-white/70"
                                                                }`}
                                                            aria-label={`Ir para imagem ${index + 1}`}
                                                        />
                                                    ))}
                                                </div>

                                                {/* Contador de imagens */}
                                                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                                                    {currentImageIndex + 1} / {images.length}
                                                </div>
                                            </>
                                        )}
                                    </motion.div>

                                    {/* ACCORDIONS DE DESAFIO E SOLUÇÃO - Coluna direita */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="flex flex-col gap-2"
                                    >
                                        <Accordion
                                            variant="splitted"
                                            defaultExpandedKeys={["challenge"]}
                                            className="px-0 gap-2"
                                            itemClasses={{
                                                base: "!bg-transparent !shadow-none",
                                                title: "font-display font-bold text-base",
                                                trigger: "py-3 px-4 rounded-xl data-[hover=true]:bg-white/5 transition-colors",
                                                content: "pt-0 pb-4 px-4 text-sm text-muted-foreground leading-relaxed",
                                                indicator: "text-white/50",
                                            }}
                                        >
                                            {/* O Desafio */}
                                            <AccordionItem
                                                key="challenge"
                                                aria-label="O Desafio"
                                                classNames={{
                                                    base: "relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent",
                                                }}

                                                title={
                                                    <div className="flex flex-col">
                                                        <span className="text-red-400">O Desafio</span>

                                                    </div>
                                                }
                                            >
                                                {/* Decorative gradient orb */}
                                                <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-500/20 rounded-full blur-2xl pointer-events-none" />
                                                <p className="relative z-10">
                                                    {project.caseStudy?.challenge ||
                                                        "Este projeto apresentou desafios únicos que exigiram uma abordagem criativa e técnica."}
                                                </p>
                                            </AccordionItem>

                                            {/* Minha Solução */}
                                            <AccordionItem
                                                key="solution"
                                                aria-label="Minha Solução"
                                                classNames={{
                                                    base: "relative overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent",
                                                }}

                                                title={
                                                    <div className="flex flex-col">
                                                        <span className="text-green-400">Minha Solução</span>

                                                    </div>
                                                }
                                            >
                                                {/* Decorative gradient orb */}
                                                <div className="absolute -top-8 -left-8 w-24 h-24 bg-green-500/20 rounded-full blur-2xl pointer-events-none" />
                                                <p className="relative z-10">
                                                    {project.caseStudy?.solution ||
                                                        "Desenvolvi uma solução robusta utilizando as melhores práticas de desenvolvimento."}
                                                </p>
                                            </AccordionItem>
                                        </Accordion>
                                    </motion.div>
                                </div>

                                {/* DESCRIÇÃO DA EXPERIÊNCIA DO PROJETO */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
                                >
                                    <h3 className="font-display font-bold text-lg mb-3">Descrição da Experiência</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.longDescription}
                                    </p>
                                </motion.div>
                            </div>
                        </ModalBody>

                        {/* RODAPÉ: Tecnologias + Botão Visualizar */}
                        <ModalFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            {/* Lista de Tecnologias */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-2 flex-1"
                            >
                                {project.technologies.map((tech, index) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + index * 0.03 }}
                                    >
                                        <Chip
                                            size="sm"
                                            variant="flat"
                                            classNames={{
                                                base: "bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-colors",
                                                content: "font-medium text-xs",
                                            }}
                                        >
                                            {tech}
                                        </Chip>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Botões */}
                            <div className="flex items-center gap-3">

                                {project.links.live && (
                                    <Button
                                        as="a"
                                        href={project.links.live}
                                        target="_blank"
                                        color="primary"
                                        variant="shadow"
                                        size="md"
                                        endContent={<ExternalLink className="w-4 h-4" />}
                                        className="font-semibold bg-gradient-to-r from-primary to-purple-600 shadow-lg shadow-primary/25"
                                    >
                                        Visualizar
                                    </Button>
                                )}
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
