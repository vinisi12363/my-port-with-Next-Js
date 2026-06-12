"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ExternalLink, Calendar, Building2, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { tx } from "@/i18n/config";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const { t, lang } = useLang();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    const images = project.images.screenshots.length > 0
        ? project.images.screenshots
        : [project.images.thumbnail];

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    const goToImage = (index: number) => setCurrentImageIndex(index);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="5xl"
            scrollBehavior="inside"
            backdrop="blur"
            classNames={{
                base: "bg-cbg-alt backdrop-blur-2xl border border-cborder shadow-2xl",
                header: "border-b border-cborder pb-4",
                body: "py-0",
                footer: "border-t border-cborder pt-4",
                closeButton: "text-cdim hover:bg-cborder active:bg-cborder2",
            }}
            motionProps={{
                variants: {
                    enter: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                    exit: { y: -20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
                },
            }}
        >
            <ModalContent>
                {() => (
                    <>
                        {/* TITLE */}
                        <ModalHeader className="flex flex-col gap-1 pt-6">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h2 className="text-2xl md:text-3xl font-mono text-cheading">
                                    {tx(project.title, lang)}
                                </h2>
                                {project.featured && (
                                    <span className="px-3 py-1 bg-cprimary text-cbg rounded text-xs font-mono">
                                        {t.projectModal.featured}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-cmuted mt-2 flex-wrap font-mono">
                                {project.client && (
                                    <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-cborder">
                                        <Building2 className="w-4 h-4 text-cprimary" />
                                        {project.client}
                                    </span>
                                )}
                                <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-cborder">
                                    <Calendar className="w-4 h-4 text-cprimary" />
                                    {project.date}
                                </span>
                                <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-cborder">
                                    <Layers className="w-4 h-4 text-cprimary" />
                                    {project.category}
                                </span>
                            </div>
                        </ModalHeader>

                        <ModalBody className="custom-scrollbar">
                            <div className="py-6 space-y-6">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    {/* CAROUSEL */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="lg:col-span-2 relative w-full aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-cborder shadow-2xl bg-cbg"
                                    >
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
                                                    alt={`${tx(project.title, lang)} - ${currentImageIndex + 1}`}
                                                    src={images[currentImageIndex]}
                                                    className="object-cover w-full h-full"
                                                    removeWrapper
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                        {images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-cbg/70 backdrop-blur-sm border border-cborder flex items-center justify-center text-cheading hover:border-cprimary transition-all hover:scale-110"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-cbg/70 backdrop-blur-sm border border-cborder flex items-center justify-center text-cheading hover:border-cprimary transition-all hover:scale-110"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>

                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                                                    {images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToImage(index)}
                                                            className={`h-2 rounded-full transition-all ${index === currentImageIndex
                                                                ? "bg-cprimary w-6"
                                                                : "bg-cborder w-2 hover:bg-cprimary/60"
                                                                }`}
                                                            aria-label={`Go to image ${index + 1}`}
                                                        />
                                                    ))}
                                                </div>

                                                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-cbg/70 backdrop-blur-sm text-cheading text-sm font-mono">
                                                    {currentImageIndex + 1} / {images.length}
                                                </div>
                                            </>
                                        )}
                                    </motion.div>

                                    {/* CHALLENGE / SOLUTION */}
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
                                                title: "font-mono font-bold text-base",
                                                trigger: "py-3 px-4 rounded-xl data-[hover=true]:bg-cprimary/5 transition-colors",
                                                content: "pt-0 pb-4 px-4 text-sm text-cmuted leading-relaxed",
                                                indicator: "text-cdim",
                                            }}
                                        >
                                            <AccordionItem
                                                key="challenge"
                                                aria-label={t.projectModal.challengeTitle}
                                                classNames={{
                                                    base: "rounded-2xl border border-cborder bg-cbg",
                                                }}
                                                title={
                                                    <span className="text-cprimary font-mono">
                                                        {"// "}{t.projectModal.challengeTitle}
                                                    </span>
                                                }
                                            >
                                                <p className="relative z-10">
                                                    {project.caseStudy
                                                        ? tx(project.caseStudy.challenge, lang)
                                                        : t.projectModal.challengeFallback}
                                                </p>
                                            </AccordionItem>

                                            <AccordionItem
                                                key="solution"
                                                aria-label={t.projectModal.solutionTitle}
                                                classNames={{
                                                    base: "rounded-2xl border border-cprimary/30 bg-cprimary/5",
                                                }}
                                                title={
                                                    <span className="text-cprimary2 font-mono">
                                                        {"// "}{t.projectModal.solutionTitle}
                                                    </span>
                                                }
                                            >
                                                <p className="relative z-10">
                                                    {project.caseStudy
                                                        ? tx(project.caseStudy.solution, lang)
                                                        : t.projectModal.solutionFallback}
                                                </p>
                                            </AccordionItem>
                                        </Accordion>
                                    </motion.div>
                                </div>

                                {/* DESCRIPTION */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="rounded-2xl border border-cborder bg-cbg p-6"
                                >
                                    <h3 className="font-mono font-bold text-lg text-cheading mb-3">
                                        {"// "}{t.projectModal.descriptionTitle}
                                    </h3>
                                    <p className="text-cmuted leading-relaxed">
                                        {tx(project.longDescription, lang)}
                                    </p>
                                </motion.div>
                            </div>
                        </ModalBody>

                        {/* FOOTER: tech + view button */}
                        <ModalFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex flex-wrap gap-2 flex-1">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-cborder text-csoft rounded text-xs font-mono border border-cborder2/40"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3">
                                {project.links.live && (
                                    <Button
                                        as="a"
                                        href={project.links.live}
                                        target="_blank"
                                        size="md"
                                        endContent={<ExternalLink className="w-4 h-4" />}
                                        className="font-mono font-semibold bg-cprimary text-cbg"
                                    >
                                        {t.projectModal.view}
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
