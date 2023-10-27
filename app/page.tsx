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
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";


export default function Home() {
	const content = [
		<PopoverContent>
		<div className="px-1 py-2">
		  <div className="text-small font-bold">html</div>
		  <div className="text-tiny">hypertext language</div>
		</div>
	  </PopoverContent>,

		<PopoverContent>
		<div className="px-1 py-2">
		<div className="text-small font-bold">CSS</div>
		<div className="text-tiny">I like your style</div>
		</div>
		</PopoverContent>,

		<PopoverContent>
		<div className="px-1 py-2">
		<div className="text-small font-bold">React</div>
		<div className="text-tiny">I love it! ❤️</div>
		</div>
		</PopoverContent>,

		<PopoverContent>
		<div className="px-1 py-2">
		<div className="text-small font-bold">Javascript</div>
		<div className="text-tiny">Extremelly useful</div>
		</div>
		</PopoverContent>,

		<PopoverContent>

		<div className="px-1 py-2">
		<div className="text-small font-bold">Typescript</div>
		<div className="text-tiny">Any type is now allowed here xD</div>
		</div>
		</PopoverContent>,

		<PopoverContent>
		<div className="px-1 py-2">
		<div className="text-small font-bold">Node Js</div>
		<div className="text-tiny">everything is possible</div>
		</div>
		</PopoverContent>,

		<PopoverContent>
		<div className="px-1 py-2">
		<div className="text-small font-bold">C++</div>
		<div className="text-tiny">My fisrt contact with programation ❤️</div>
		</div>
		</PopoverContent>, 

		<PopoverContent>
		<div className="px-1 py-2">
		<div className="text-small font-bold">Postgres</div>
		<div className="text-tiny">My favourite Relational DB</div>
		</div>
		</PopoverContent>, 
		<PopoverContent>
				<div className="px-1 py-2">
				<div className="text-small font-bold">Mongodb</div>
				<div className="text-tiny">Non-relational db...mongod ... mongosh</div>
				</div>
		</PopoverContent>, 
	]	
	  
	
	  const colors = [
		"default",
		"primary",
		"secondary",
		"success",
		"warning",
		"danger",
		"foreground",
	  ];
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
			
				<h1  className={title({ color: "green", class:"bg-cliptext text-transparent bg-gradient-to-b" })}>Hello There! </h1>
				<div><h2>My name is Vinicius, i'm a web developer</h2></div>
			
				<Image
				 	width={300}
					height={300}
				 	alt="eu"
					src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmh4cWYxNHNkNWFtZXZ3enlieG96Y2FrMzJoMXRzemN2YTZsNDQzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hKafco7mFwBioBxqFT/giphy.gif"
				/>
				<div className="inline-block max-w-lg text-center justify-center">
					<h2 className={subtitle()}> Here someone habilities wich i have</h2>
				</div>
				<div className="flex flex-wrap gap-4">
					
						<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
							html
							<Image src="https://skillicons.dev/icons?i=html"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
						</Popover>	

						<Popover key={1} placement="top" color={colors[1]}>
						<PopoverTrigger>
							<Button color={colors[1]} className="capitalize">
							css
							<Image src="https://skillicons.dev/icons?i=css"></Image>
							</Button>
						</PopoverTrigger>
						{content[1]}
						</Popover>		

						<Popover key={1} placement="top" color={colors[7]}>
						<PopoverTrigger>
							<Button color={colors[7]} className="capitalize">
							react
							<Image src="https://skillicons.dev/icons?i=react"></Image>
							</Button>
						</PopoverTrigger>
						{content[2]}
						</Popover>		

							<Popover key={1} placement="top" color={colors[4]}>
						<PopoverTrigger>
							<Button color={colors[4]} className="capitalize">
							javascript
							<Image src="https://skillicons.dev/icons?i=js"></Image>
							</Button>
						</PopoverTrigger>
						{content[3]}
						</Popover>	
						<Popover key={1} placement="top" color={colors[1]}>
						<PopoverTrigger>
							<Button color={colors[1]} className="capitalize">
							typescript
							<Image src="https://skillicons.dev/icons?i=ts"></Image>
							</Button>
						</PopoverTrigger>
						{content[4]}
						</Popover>	
						<Popover key={1} placement="top" color={colors[7]}>
						<PopoverTrigger>
							<Button color={colors[7]} className="capitalize">
							node Js
							<Image src="https://skillicons.dev/icons?i=nodejs"></Image>
							</Button>
						</PopoverTrigger>
						{content[5]}
						</Popover>	
						<Popover key={1} placement="top" color={colors[1]}>
						<PopoverTrigger>
							<Button color={colors[1]} className="capitalize">
							C++
							<Image src="https://skillicons.dev/icons?i=cpp"></Image>
							</Button>
						</PopoverTrigger>
						{content[6]}
						</Popover>	
						<Popover key={1} placement="top" color={colors[2]}>
						<PopoverTrigger>
							<Button color={colors[2]} className="capitalize">
							Postgres
							<Image src="https://skillicons.dev/icons?i=postgres"></Image>
							</Button>
						</PopoverTrigger>
						{content[7]}
						</Popover>	

						<Popover key={1} placement="top" color={colors[3]}>
						<PopoverTrigger>
							<Button color={colors[3]} className="capitalize">
							Mongodb
							<Image src="https://skillicons.dev/icons?i=mongodb"></Image>
							</Button>
						</PopoverTrigger>
						{content[8]}
						</Popover>

				
				</div>

			</div>

		</section>
	);
}
