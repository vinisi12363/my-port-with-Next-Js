"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { frontendSkills, backendSkills, databaseSkills, toolsSkills } from "@/data/skills";
import { Image } from "@nextui-org/image";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

interface SkillCategoryProps {
    title: string;
    skills: typeof frontendSkills;
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                className="flex flex-wrap gap-3"
            >
                {skills.map((skill) => (
                    <motion.div key={skill.name} variants={staggerItem}>
                        <Popover placement="top">
                            <PopoverTrigger>
                                <Button
                                    variant="flat"
                                    className="transition-smooth hover:scale-105"
                                    startContent={
                                        <Image
                                            alt={skill.name}
                                            src={skill.icon}
                                            width={24}
                                            height={24}
                                        />
                                    }
                                >
                                    {skill.name}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="px-1 py-2">
                                    <div className="text-small font-bold">{skill.name}</div>
                                    <div className="text-tiny text-muted-foreground">
                                        {skill.description}
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export function SkillsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={fadeInUp}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="gradient-text">Tecnologias & Habilidades</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ferramentas e tecnologias que domino para criar soluções completas
                    </p>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    <SkillCategory title="Frontend" skills={frontendSkills} />
                    <SkillCategory title="Backend" skills={backendSkills} />
                    <SkillCategory title="Databases" skills={databaseSkills} />
                    <SkillCategory title="Tools & DevOps" skills={toolsSkills} />
                </div>
            </div>
        </section>
    );
}
