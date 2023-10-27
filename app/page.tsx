"use client"
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function Home() {
	const content = [
		<PopoverContent key="9">
			<div className="px-1 py-2">
				<div className="text-small font-bold">html</div>
				<div className="text-tiny">hypertext language</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="10">
			<div className="px-1 py-2">
				<div className="text-small font-bold">CSS</div>
				<div className="text-tiny">I like your style</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="11">
			<div className="px-1 py-2">
				<div className="text-small font-bold">React</div>
				<div className="text-tiny">I love it! ❤️</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="12">
			<div className="px-1 py-2">
				<div className="text-small font-bold">Javascript</div>
				<div className="text-tiny">Extremelly useful</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="13">

			<div className="px-1 py-2">
				<div className="text-small font-bold">Typescript</div>
				<div className="text-tiny">Any type is now allowed here xD</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="14">
			<div className="px-1 py-2">
				<div className="text-small font-bold">Node Js</div>
				<div className="text-tiny">everything is possible</div>
			</div>
		</PopoverContent>,

		<PopoverContent key={15}>
			<div className="px-1 py-2">
				<div className="text-small font-bold">C++</div>
				<div className="text-tiny">My fisrt contact with programation ❤️</div>
			</div>
		</PopoverContent>,

		<PopoverContent key={16}>
			<div className="px-1 py-2">
				<div className="text-small font-bold">Postgres</div>
				<div className="text-tiny">My favourite Relational DB</div>
			</div>
		</PopoverContent>,
		<PopoverContent key={17}>
			<div className="px-1 py-2">
				<div className="text-small font-bold">Mongodb</div>
				<div className="text-tiny">Non-relational db...mongod ... mongosh</div>
			</div>
		</PopoverContent>,
		<PopoverContent key={18}>
		<div className="px-1 py-2">
			<div className="text-small font-bold">Express</div>
			<div className="text-tiny">Express be used for management of Routes and async requests</div>
		</div>
	</PopoverContent>,
	]
	const AccordionContent = [
		"O Afflatus Assistant é um sistema criado para lidar com o cadastro de clientes e eventos para uma empresa de fotografia infantil. Com ele, é possível cadastrar um cliente (pai/mãe) e seus filhos, além de salvar datas importantes para o cliente, como o batizado do bebê e os primeiros passos, entre outros eventos relevantes. Isso ajuda a empresa de fotografia a impulsionar as vendas e a obter um cadastro completo e seguro de seus clientes.",

	]

	const colors :any= [
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
					My name is Vinícius, and i'm a fullstack developer`&apos`
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

			<div>
				<h1 className="text-l font-semibold text-slate-200">
					Take a look on the web applications below, if you want to see my professional experience. 💼
				</h1>
			</div>
			<h1 className="text-l font-semibold text-slate-200">Afflatus Assistant</h1>
			<Accordion >
				<AccordionItem
				
					aria-label="Afflatus"
					subtitle={
					<span>
						Click to Expand
					</span>
					}
					title="System Description"
				>
					{AccordionContent[0]}
     		   </AccordionItem>

			</Accordion>
			<Image
				width={1300}
				rounded-full
				isZoomed
				alt="Afflatus"
				src="https://i.imgur.com/hdNkoz8.png"
			/>

			<div className="inline-block max-w-lg text-center font-sans justify-center">
 				<h1 className="text-l font-semibold text-slate-200">Tecnologies used in frontend:</h1>
			</div>
			<div className=" shadow-2x1 rounded-lg flex flex-wrap gap-7 ml-3">

				<Popover key={1} placement="top" color={colors[7]}>
					<PopoverTrigger>
						<Button color={colors[7]} className="capitalize">
							react
							<Image src="https://skillicons.dev/icons?i=react"></Image>
						</Button>
					</PopoverTrigger>
					{content[2]}
				</Popover>
				<Popover key={2} placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							vite
							<Image src="https://skillicons.dev/icons?i=vite"></Image>
						</Button>
					</PopoverTrigger>
					{content[0]}
				</Popover>
				<Popover key={3} placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							javascript
							<Image src="https://skillicons.dev/icons?i=js"></Image>
						</Button>
					</PopoverTrigger>
					{content[3]}
				</Popover>
				<Popover key={4} placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Styled Components
							<Image src="https://skillicons.dev/icons?i=styledcomponents"></Image>
						</Button>
					</PopoverTrigger>
					{content[0]}
				</Popover>





			</div>

			<h1 className="text-l font-semibold text-slate-300">Tecnologies utilized in backend:</h1>
			<div className=" flex flex-wrap shadow-2x1 rounded-lg gap-7 ml-3">
				<Popover key={5} placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Node Js
							<Image src="https://skillicons.dev/icons?i=nodejs"></Image>
						</Button>
					</PopoverTrigger>
					{content[0]}
				</Popover>

				<Popover key={6} placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Typescript
							<Image src="https://skillicons.dev/icons?i=ts"></Image>
						</Button>
					</PopoverTrigger>
					{content[4]}
				</Popover>


				<Popover key={7} placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							express
							<Image src="https://skillicons.dev/icons?i=express"></Image>
						</Button>
					</PopoverTrigger>
					{content[9]}
				</Popover>

				<Popover key={8} placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							postman
							<Image src="https://skillicons.dev/icons?i=postman"></Image>
						</Button>
					</PopoverTrigger>
					{content[0]}
				</Popover>
				
				

			</div>

		</section>
	);
}
