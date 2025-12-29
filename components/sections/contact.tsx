"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Mail, Phone, Github, Linkedin, FileDown } from "lucide-react";

export function ContactSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={fadeInUp}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="gradient-text">Vamos Trabalhar Juntos?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
                    </p>

                    {/* Contact methods */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <Link
                            href="mailto:viniciuspv.si@gmail.com"
                            className="glass card-hover p-6 rounded-lg flex items-center gap-4 text-left transition-smooth"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                                <p className="text-sm text-muted-foreground">
                                    viniciuspv.si@gmail.com
                                </p>
                            </div>
                        </Link>

                        <Link
                            href="https://api.whatsapp.com/send?phone=5573988251737"
                            target="_blank"
                            className="glass card-hover p-6 rounded-lg flex items-center gap-4 text-left transition-smooth"
                        >
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                                <p className="text-sm text-muted-foreground">
                                    +55 73 98825-1737
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Social links and CV */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            as={Link}
                            href="https://github.com/vinisi12363"
                            target="_blank"
                            variant="flat"
                            startContent={<Github className="w-5 h-5" />}
                            className="font-semibold"
                        >
                            GitHub
                        </Button>
                        <Button
                            as={Link}
                            href="https://www.linkedin.com/in/vini-si12363"
                            target="_blank"
                            variant="flat"
                            color="primary"
                            startContent={<Linkedin className="w-5 h-5" />}
                            className="font-semibold"
                        >
                            LinkedIn
                        </Button>
                        <Button
                            as={Link}
                            href="/CV-Marcos-Vinicius-Fullstack.pdf"
                            download
                            variant="bordered"
                            color="secondary"
                            startContent={<FileDown className="w-5 h-5" />}
                            className="font-semibold"
                        >
                            Download CV
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
