"use client"
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
			
				<h1  className={title({ color: "green", class:"bg-cliptext text-transparent bg-gradient-to-b" })}>Hello There! </h1>
		
				<Image
				 	width={300}
					height={300}
					
				 	alt="eu"
					src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmh4cWYxNHNkNWFtZXZ3enlieG96Y2FrMzJoMXRzemN2YTZsNDQzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hKafco7mFwBioBxqFT/giphy.gif"
				
				/>
			
			
				
			</div>

		</section>
	);
}
