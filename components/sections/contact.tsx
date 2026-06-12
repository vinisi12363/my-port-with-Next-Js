"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, FileText, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { CV_HREF } from "@/i18n/config";

const EMAIL = "viniciuspv.si@gmail.com";

export function ContactSection() {
    const { t, lang } = useLang();

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/vini-si12363",
            username: "/in/vini-si12363",
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/vinisi12363",
            username: "/vinisi12363",
        },
        {
            name: "WhatsApp",
            icon: MessageCircle,
            url: "https://api.whatsapp.com/send?phone=5573988251737",
            username: "+55 73 98825-1737",
        },
        {
            name: "Email",
            icon: Mail,
            url: `mailto:${EMAIL}`,
            username: EMAIL,
        },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") || "");
        const subject = String(data.get("subject") || "");
        const message = String(data.get("message") || "");
        const body = `${message}\n\n— ${name}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="py-20 bg-cbg-alt">
            <div className="w-full px-5 sm:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[1700px] mx-auto"
                >
                    <div className="mb-12 text-center">
                        <h2 className="text-5xl md:text-6xl mb-3">
                            <span className="text-cprimary font-mono text-xl">05.</span>{" "}
                            <span className="text-cheading">{t.contact.title}</span>
                        </h2>
                        <div className="h-[2px] w-32 bg-cprimary mx-auto mb-6" />
                        {/* <p className="text-cmuted max-w-2xl mx-auto leading-relaxed">
                            {t.contact.subtitle}
                        </p> */}
                    </div>

                    {/* Social Links */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group p-6 bg-cbg border border-cborder rounded hover:border-cprimary transition-all"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    {/* <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="p-4 bg-cborder rounded-full group-hover:bg-cborder2 transition-colors"
                                    >
                                        <social.icon className="text-cprimary" size={28} />
                                    </motion.div> */}
                                    <div>
                                        <h3 className="text-lg text-cheading mb-1 font-mono">
                                            {social.name}
                                        </h3>
                                        {/* <p className="text-sm text-cdim font-mono break-all">
                                            {social.username}
                                        </p> */}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 bg-cbg border border-cborder rounded"
                    >
                        <h3 className="text-2xl text-csoft mb-6 font-mono">
                            // {lang === "pt" ? "Envie uma mensagem" : "Send a message"}
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-cmuted mb-2 font-mono text-sm"
                                    >
                                        {lang === "pt" ? "Nome" : "Name"}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-cbg-alt border border-cborder rounded text-cheading placeholder-cdim focus:outline-none focus:border-cprimary transition-colors font-mono"
                                        placeholder={lang === "pt" ? "Seu nome" : "Your name"}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-cmuted mb-2 font-mono text-sm"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-cbg-alt border border-cborder rounded text-cheading placeholder-cdim focus:outline-none focus:border-cprimary transition-colors font-mono"
                                        placeholder="seu.email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-cmuted mb-2 font-mono text-sm"
                                >
                                    {lang === "pt" ? "Assunto" : "Subject"}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-cbg-alt border border-cborder rounded text-cheading placeholder-cdim focus:outline-none focus:border-cprimary transition-colors font-mono"
                                    placeholder={lang === "pt" ? "Assunto da mensagem" : "Subject of the message"}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-cmuted mb-2 font-mono text-sm"
                                >
                                    {lang === "pt" ? "Mensagem" : "Message"}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 bg-cbg-alt border border-cborder rounded text-cheading placeholder-cdim focus:outline-none focus:border-cprimary transition-colors resize-none font-mono"
                                    placeholder={lang === "pt" ? "Sua mensagem..." : "Your message..."}
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-4 bg-cprimary text-cbg rounded font-mono hover:bg-cprimary2 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                {lang === "pt" ? "Enviar Mensagem" : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div> */}

                    {/* Resume Download */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 text-center"
                    >
                        <motion.a
                            href={CV_HREF[lang]}
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 border border-cprimary text-cprimary rounded font-mono hover:bg-cprimary/10 transition-colors"
                        >
                            <FileText size={20} />
                            {t.contact.downloadCv}
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="max-w-[1700px] mx-auto mt-20 pt-8 border-t border-cborder text-center"
                >
                    <p className="text-cdim font-mono text-sm">
                        {lang === "pt" ? "Desenvolvido com" : "Developed with"}{" "}
                        <span className="text-cprimary">{"</>"}</span>{" "}
                        {lang === "pt" ? "e muito café" : "and lots of coffee"}
                    </p>
                    <p className="text-cdim font-mono text-sm mt-2">
                        © {new Date().getFullYear()} VV Sistemas.{" "}
                        {lang === "pt"
                            ? "Todos os direitos reservados."
                            : "All rights reserved."}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
