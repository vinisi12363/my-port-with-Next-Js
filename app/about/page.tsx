"use client";

import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Content } from "./content";
import { getTotalYearsOfExperience } from "@/data/experience";
import { Briefcase, Code, Rocket } from "lucide-react";

export default function AboutPage() {
	const yearsOfExperience = getTotalYearsOfExperience();

	return (
		<motion.div
			variants={staggerContainer}
			initial="initial"
			animate="animate"
			className="min-h-screen py-12 px-4 md:px-6"
		>
			<div className="max-w-6xl mx-auto">
				{/* Header Section */}
				<motion.div
					variants={fadeInUp}
					className="text-center mb-12"
				>
					<Avatar
						src="/eu_1.jpeg"
						className="w-32 h-32 md:w-40 md:h-40 text-large mx-auto mb-6 ring-4 ring-primary/20"
					/>
					<h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
						<span className="gradient-text">Sobre Mim</span>
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Desenvolvedor Fullstack com experiência sólida em resolver problemas 😎 💅🏻
					</p>
				</motion.div>

				{/* Stats Cards */}
				<motion.div
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12"
				>
					<motion.div variants={staggerItem}>
						<Card className="glass card-hover h-full">
							<CardBody className="text-center p-6">
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
									<Briefcase className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-3xl font-bold text-primary mb-1">
									{yearsOfExperience}+
								</h3>
								<p className="text-sm text-muted-foreground">Anos de Experiência</p>
							</CardBody>
						</Card>
					</motion.div>

					<motion.div variants={staggerItem}>
						<Card className="glass card-hover h-full">
							<CardBody className="text-center p-6">
								<div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
									<Code className="w-6 h-6 text-secondary" />
								</div>
								<h3 className="text-3xl font-bold text-secondary mb-1">20+</h3>
								<p className="text-sm text-muted-foreground">Tecnologias</p>
							</CardBody>
						</Card>
					</motion.div>

					<motion.div variants={staggerItem}>
						<Card className="glass card-hover h-full">
							<CardBody className="text-center p-6">
								<div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
									<Rocket className="w-6 h-6 text-accent" />
								</div>
								<h3 className="text-3xl font-bold text-accent mb-1">40+</h3>
								<p className="text-sm text-muted-foreground">Projetos Entregues</p>
							</CardBody>
						</Card>
					</motion.div>
				</motion.div>

				{/* Main Content */}
				<motion.div variants={fadeInUp}>
					<Card className="glass">
						<CardBody className="p-6 md:p-8">
							<div className="prose prose-invert max-w-none">
								<Content />
							</div>
						</CardBody>
					</Card>
				</motion.div>
			</div>
		</motion.div>
	);
}

