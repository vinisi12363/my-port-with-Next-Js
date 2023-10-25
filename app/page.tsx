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
				<h1 className={title()}>My&nbsp;</h1>
				
				<h1  className={title({ color: "green", class:"bg-cliptext text-transparent bg-gradient-to-b" })}>Hello There! </h1>
				<div>
				<Image
				 	width={300}
				 	alt="eu"
					//TODO ADICIONAR A MINHA LINDA FOTO AQUI
				
				/>
				</div>
			
				
			</div>

		</section>
	);
}
