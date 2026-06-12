"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";
import {
    frontendSkills,
    backendSkills,
    databaseSkills,
    toolsSkills,
} from "@/data/skills";
import { useLang } from "@/i18n/LanguageProvider";

export function StacksSection() {
    const { t } = useLang();

    const techCategories = [
        {
            title: t.skills.frontend,
            icon: Code2,
            color: "#4f9cf9",
            techs: frontendSkills.map((s) => s.name),
        },
        {
            title: t.skills.backend,
            icon: Server,
            color: "#7cb6fb",
            techs: backendSkills.map((s) => s.name),
        },
        {
            title: t.skills.databases,
            icon: Database,
            color: "#a9c5f0",
            techs: databaseSkills.map((s) => s.name),
        },
        {
            title: t.skills.tools,
            icon: Wrench,
            color: "#5b7bb4",
            techs: toolsSkills.map((s) => s.name),
        },
    ];

    const proficiency = [
        { skill: "Node.js & TypeScript", level: 95 },
        { skill: "React & Next.js", level: 90 },
        { skill: "Microservices & Messaging", level: 88 },
        { skill: "Docker / Kubernetes / AWS", level: 80 },
    ];

    return (
        <></>
        // <section id="stacks" className="py-20 bg-cbg">
        //     <div className="w-full px-5 sm:px-8 lg:px-16">
        //         <motion.div
        //             initial={{ opacity: 0 }}
        //             whileInView={{ opacity: 1 }}
        //             viewport={{ once: true }}
        //             transition={{ duration: 0.5 }}
        //             className="max-w-[1700px] mx-auto"
        //         >
        //             <div className="mb-12">
        //                 <h2 className="text-5xl md:text-6xl mb-3">
        //                     <span className="text-cprimary font-mono text-xl">02.</span>{" "}
        //                     <span className="text-cheading">{t.skills.title}</span>
        //                 </h2>
        //                 <div className="h-[2px] w-32 bg-cprimary" />
        //             </div>

        //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        //                 {techCategories.map((category, categoryIndex) => (
        //                     <motion.div
        //                         key={category.title}
        //                         initial={{ opacity: 0, y: 20 }}
        //                         whileInView={{ opacity: 1, y: 0 }}
        //                         viewport={{ once: true }}
        //                         transition={{ delay: categoryIndex * 0.1 }}
        //                         whileHover={{ y: -5 }}
        //                         className="p-6 bg-cbg-alt border border-cborder rounded hover:border-cprimary transition-all group"
        //                     >
        //                         <div className="flex items-center gap-3 mb-4">
        //                             <motion.div
        //                                 whileHover={{ rotate: 360 }}
        //                                 transition={{ duration: 0.5 }}
        //                                 className="p-2 bg-cborder rounded group-hover:bg-cborder2 transition-colors"
        //                             >
        //                                 <category.icon style={{ color: category.color }} size={24} />
        //                             </motion.div>
        //                             <h3 className="text-lg text-cheading font-mono">
        //                                 {category.title}
        //                             </h3>
        //                         </div>

        //                         <div className="flex flex-wrap gap-2">
        //                             {category.techs.map((tech, techIndex) => (
        //                                 <motion.span
        //                                     key={tech}
        //                                     initial={{ opacity: 0, scale: 0.8 }}
        //                                     whileInView={{ opacity: 1, scale: 1 }}
        //                                     viewport={{ once: true }}
        //                                     transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
        //                                     whileHover={{ scale: 1.1 }}
        //                                     className="px-3 py-1 bg-cborder text-cmuted rounded text-sm font-mono border border-transparent hover:border-cprimary hover:text-cheading transition-all cursor-default"
        //                                 >
        //                                     {tech}
        //                                 </motion.span>
        //                             ))}
        //                         </div>
        //                     </motion.div>
        //                 ))}
        //             </div>

        //             {/* Proficiency Indicators */}
        //             <motion.div
        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 viewport={{ once: true }}
        //                 transition={{ delay: 0.5 }}
        //                 className="mt-12 p-6 bg-cbg-alt border border-cborder rounded"
        //             >
        //                 <h3 className="text-xl text-cheading mb-6 font-mono">
        //                     // {t.skills.subtitle}
        //                 </h3>
        //                 <div className="grid md:grid-cols-2 gap-6">
        //                     {proficiency.map((item, index) => (
        //                         <div key={item.skill}>
        //                             <div className="flex justify-between mb-2">
        //                                 <span className="text-cmuted font-mono text-sm">
        //                                     {item.skill}
        //                                 </span>
        //                                 <span className="text-cdim font-mono text-sm">
        //                                     {item.level}%
        //                                 </span>
        //                             </div>
        //                             <div className="h-2 bg-cborder rounded-full overflow-hidden">
        //                                 <motion.div
        //                                     initial={{ width: 0 }}
        //                                     whileInView={{ width: `${item.level}%` }}
        //                                     viewport={{ once: true }}
        //                                     transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
        //                                     className="h-full bg-gradient-to-r from-cgradfrom to-cprimary rounded-full"
        //                                 />
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </motion.div>
        //         </motion.div>
        //     </div>
        // </section>
    );
}
