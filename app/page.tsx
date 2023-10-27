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
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";


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
			

				<h1 className={title({ color: "violet", class: "bg-cliptext text-lg font-semibold text-slate-500 text-transparent bg-gradient-to-b " })}>
				 Hello World!  
				</h1>
				
				<div>
					<h1 className="text-l font-semibold text-slate-200">
						My name is Vinícius, and i'm a fullstack developer
					</h1>
				</div>
				
				<div className="flex flex-wrap align-center max-w-lg justify-center inline-block ml-3 gap-6">
				<Image
					width={600}
					rounded-full
					alt="eu"
					//src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmh4cWYxNHNkNWFtZXZ3enlieG96Y2FrMzJoMXRzemN2YTZsNDQzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hKafco7mFwBioBxqFT/giphy.gif"

					src="https://so-development.org/wp-content/uploads/2021/11/full-stack-development.gif"
				/>
				</div>
				
				<div className="inline-block max-w-lg text-center font-sans justify-center">

					<h1 className="text-l font-semibold text-slate-200">Here are some skills I have :</h1>
				</div>
				<div className=" shadow-2x1 rounded-lg flex flex-wrap gap-7 ml-3">

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
		
				<h1 className="text-l font-semibold text-slate-300">And have kownedge on this tools:</h1>
				<div className=" flex flex-wrap shadow-2x1 rounded-lg gap-7 ml-3">
							
				<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								Styled Components
								<Image src="https://skillicons.dev/icons?i=styledcomponents"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>

					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								tailwind
								<Image src="https://skillicons.dev/icons?i=tailwind"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>

					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								nestjs
								<Image src="https://skillicons.dev/icons?i=nestjs"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>

					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								vite
								<Image src="https://skillicons.dev/icons?i=vite"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>
					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								express	
								<Image src="https://skillicons.dev/icons?i=express"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>
					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								postman
								<Image src="https://skillicons.dev/icons?i=postman"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>
					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								docker
								<Image src="https://skillicons.dev/icons?i=docker"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>
					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								jest
								<Image src="https://skillicons.dev/icons?i=jest"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>
					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								next
								<Image src="https://skillicons.dev/icons?i=next"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>
					<Popover key={1} placement="top" color={colors[0]}>
						<PopoverTrigger>
							<Button color={colors[0]} className="capitalize">
								prisma
								<Image src="https://skillicons.dev/icons?i=prisma"></Image>
							</Button>
						</PopoverTrigger>
						{content[0]}
					</Popover>

			</div>
			
			<div>
					<h1 className="text-l font-semibold text-slate-200">
					Take a look at the 'Applications' section if you want to see my professional experience. 💼
					</h1>
			</div>
		</section>
	);
}
