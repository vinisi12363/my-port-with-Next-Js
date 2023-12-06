"use client"
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Curriculum } from "./Curriculum";
import { DownloadCvButton } from "@/components/CvButton";
import { DeployButton } from "./DeployButton";


export default function Homepage() {
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
				<div className="text-tiny">Any type is not allowed here xD</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="14">
			<div className="px-1 py-2">
				<div className="text-small font-bold">Node Js</div>
				<div className="text-tiny">everything is possible</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="15">
			<div className="px-1 py-2">
				<div className="text-small font-bold">C++</div>
				<div className="text-tiny">My fisrt contact with programation ❤️</div>
			</div>
		</PopoverContent>,

		<PopoverContent key="16">
			<div className="px-1 py-2">
				<div className="text-small font-bold">Postgres</div>
				<div className="text-tiny">My favourite Relational DB</div>
			</div>
		</PopoverContent>,
		<PopoverContent key="17">
			<div className="px-1 py-2">
				<div className="text-small font-bold">Mongodb</div>
				<div className="text-tiny">Non-relational db...mongod ... mongosh</div>
			</div>
		</PopoverContent>,
		<PopoverContent key="18">
		<div className="px-1 py-2">
			<div className="text-small font-bold">Express</div>
			<div className="text-tiny">Express be used for management of Routes and async requests</div>
		</div>
	    </PopoverContent>,
        	<PopoverContent key="19">
            <div className="px-1 py-2">
                <div className="text-small font-bold">PostgreSQL</div>
                <div className="text-tiny">Relational Database </div>
            </div>
            </PopoverContent>,
            	<PopoverContent key="20">
                <div className="px-1 py-2">
                    <div className="text-small font-bold">Java ☕</div>
                    <div className="text-tiny">Father of poo Languages (in my opinion ) </div>
                </div>
                </PopoverContent>,
                	<PopoverContent key="21">
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">My SQL</div>
                        <div className="text-tiny">Relational Database</div>
                    </div>
                    </PopoverContent>,
                    <PopoverContent key="22">
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">Vite</div>
                        <div className="text-tiny">Vite is a powerful react Framework</div>
                    </div>
                    </PopoverContent>,
                      <PopoverContent key="23">
                      <div className="px-1 py-2">
                          <div className="text-small font-bold">Styled-Components</div>
                          <div className="text-tiny"> Is a wonderful tool utilized on page styles</div>
                      </div>
                      </PopoverContent>,
                       <PopoverContent key="24">
                       <div className="px-1 py-2">
                           <div className="text-small font-bold">Postman</div>
                           <div className="text-tiny"> Is software utilized to requests in API</div>
                       </div>
                       </PopoverContent>,
	]
	const AccordionContent = [
		"O Afflatus Assistant é um sistema criado para lidar com o cadastro de clientes e eventos para uma empresa de fotografia infantil. Com ele, é possível cadastrar um cliente (pai/mãe) e seus filhos, além de salvar datas importantes para o cliente, como o batizado do bebê e os primeiros passos, entre outros eventos relevantes. Isso ajuda a empresa de fotografia a impulsionar as vendas e a obter um cadastro completo e seguro de seus clientes.",
		"O My Wallet é um Web App com o objetivo de ajudar o usuário a controlar suas finanças. Com ele, é possível cadastrar entradas e saídas de dinheiro, além de poder ver o saldo atualizado. O My Wallet é um sistema simples, mas que pode ajudar muito o usuário a ter um controle maior sobre suas finanças.",
        "ACMSOFT é um software que trás suporte a toda parte de gestão acadêmica da universidade. Tem a funcionalidade de cadastrar salas, horário das aulas, datas, professores, alunos, disciplinas, cursos, colegiados, departamentos, coordenadores de colegiado; consultar dados; editar; excluir; matricular ou remover a matricula de alunos nas disciplinas; lançar notas do aluno; criar frequência e lançar ata de reunião. O objetivo do desenvolvimento deste projeto está voltado para a agilidade, competência, acessibilidade, redução de papelada, diminuição de erros e a organização dos dados na gestão acadêmica na universidade do cliente.",
		"GrupoCine é um webapp para reserva de assentos da empresa Grupo Cine desenvolvido em Javascript com React, através dele, o usuário visualiza os filmes disponívels no cinema e também os assentos para realizar a sua reserva caso queira. OBS.: A API para consumo e manipulação dos dados de uso particular,  com todos os direitos reservados.",
		"Weather é um webapp voltado para mostrar informações climáticas de qualquer local do mundo!"
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
			<Image
					width={600}

					height={600}
					
					alt="dev-fullstack"
					
					src="/full-stack-development.gif"
				/>
			<div>
				<h1 className={title({class: "text-l font-semibold"})}>
				  Meu nome é Vinícius, sou um Dev fullstack 🤓
				</h1>
			</div>

			<div className="flex flex-wrap align-center max-w-lg justify-center inline-block ml-3 gap-6">
			
			</div>
			<div className="flex flex-wrap padding-top justify-center">
			
			<p className="text-justify text-xl">
				Sou um entusiasta na programação, atualmente estou cursando o 7º semestre de Sistemas de Informação na Universidade Estadual do Sudoeste da Bahia (UESB). Estou sempre buscando aprender mais e me aprimorar nas ferramentas que já utilizo diariamente. Sou naturalmente proativo, extrovertido e bastante comunicativo. Possuo experiência com trabalho em equipes de desenvolvimento que utilizaram de tecnologias de denvolvimento ágil como Scrum e Kanban. Como principal diferencial, posso dizer que sou muito bom em me adaptar ao que é novo, essa capacidade de análise e adaptação ao cenário atual, tem me permitido avançar bastante em minha jornada como profissional da área de desenvolvimento. 
			 </p>	
			</div>
              
			<div>
				<h1 className="text-l font-semibold">
					Dê uma olhada em algumas aplicações web abaixo, se quiser visualizar alguns projetos que desenvolvi. 💼
				</h1>
			</div>
			<h1 className="text-l font-semibold ">Afflatus Assistant</h1>
			<Accordion >
				<AccordionItem
				
					aria-label="Afflatus"
					subtitle={
					<span>
						Click para expandir
					</span>
					}
					title="Descrição do Sistema"
				>
					{AccordionContent[0]}
     		   </AccordionItem>

			</Accordion>
			<Image
				width={1300}
				
				isZoomed
				alt="Afflatus"
				src="/afflatus.png"
			/>

			<div className="inline-block max-w-lg text-center font-sans justify-center">
 				<h1 className="text-l font-semibold ">Tecnologias utilizadas no frontend:</h1>
			</div>
			<div className=" shadow-2x1 rounded-lg flex flex-wrap gap-7 ml-3">

				<Popover key="1" placement="top" color={colors[7]}>
					<PopoverTrigger>
						<Button color={colors[7]} className="capitalize">
							react
							<Image alt="photo" src="https://skillicons.dev/icons?i=react"></Image>
						</Button>
					</PopoverTrigger>
					{content[2]}
				</Popover>
				<Popover key="2" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							vite
							<Image alt="photo"  src="https://skillicons.dev/icons?i=vite"></Image>
						</Button>
					</PopoverTrigger>
					{content[13]}
				</Popover>
				<Popover key="3" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							javascript
							<Image alt="photo"  src="https://skillicons.dev/icons?i=js"></Image>
						</Button>
					</PopoverTrigger>
					{content[3]}
				</Popover>
				<Popover key="4" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Styled Components
							<Image alt="photo"  src="https://skillicons.dev/icons?i=styledcomponents"></Image>
						</Button>
					</PopoverTrigger>
					{content[14]}
				</Popover>





			</div>

			<h1 className="text-l font-semibold ">Tecnologias utilizadas no backend:</h1>
			<div className=" flex flex-wrap shadow-2x1 rounded-lg gap-7 ml-3">
				<Popover key="5" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Node Js
							<Image  alt="photo"  src="https://skillicons.dev/icons?i=nodejs"></Image>
						</Button>
					</PopoverTrigger>
					{content[5]}
				</Popover>

				<Popover key="6" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Typescript
							<Image alt="photo"  src="https://skillicons.dev/icons?i=ts"></Image>
						</Button>
					</PopoverTrigger>
					{content[4]}
				</Popover>


				<Popover key="7" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							express
							<Image alt="photo"  src="https://skillicons.dev/icons?i=express"></Image>
						</Button>
					</PopoverTrigger>
					{content[9]}
				</Popover>

				<Popover key="8" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							postman
							<Image alt="photo"  src="https://skillicons.dev/icons?i=postman"></Image>
						</Button>
					</PopoverTrigger>
					{content[15]}
				</Popover>
				<Popover key="8" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Postgres
							<Image alt="photo"  src="https://skillicons.dev/icons?i=postgres"></Image>
						</Button>
					</PopoverTrigger>
					{content[10]}
				</Popover>
				

			</div>
		

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h1 className="text-l font-semibold ">My Wallet (Voltado para mobile)</h1>
			<Accordion >
				<AccordionItem
				
					aria-label="MyWallet"
					subtitle={
					<span>
						Click para abrir
					</span>
					}
					title="Descrição do Sistema"
				>
					{AccordionContent[1]}
     		   </AccordionItem>

			</Accordion>
			<Image
				
				rounded-full
				isZoomed
				alt="MyWallet"
				src="/mywallet.png"
			/>

			<div className="inline-block max-w-lg text-center font-sans justify-center">
 				<h1 className="text-l font-semibold ">Tecnologias utilizadas no frontend:</h1>
			</div>
			<div className=" shadow-2x1 rounded-lg flex flex-wrap gap-7 ml-3">

				<Popover key="1" placement="top" color={colors[7]}>
					<PopoverTrigger>
						<Button color={colors[7]} className="capitalize">
							react
							<Image alt="photo" src="https://skillicons.dev/icons?i=react"></Image>
						</Button>
					</PopoverTrigger>
					{content[2]}
				</Popover>
			
				<Popover key="3" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							javascript
							<Image alt="photo"  src="https://skillicons.dev/icons?i=js"></Image>
						</Button>
					</PopoverTrigger>
					{content[3]}
				</Popover>
				<Popover key="4" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Styled Components
							<Image alt="photo"  src="https://skillicons.dev/icons?i=styledcomponents"></Image>
						</Button>
					</PopoverTrigger>
					{content[14]}
				</Popover>





			</div>

			<h1 className="text-l font-semibold ">Tecnologias utilizadas no backend:</h1>
			<div className=" flex flex-wrap shadow-2x1 rounded-lg gap-7 ml-3">
				<Popover key="5" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Node Js
							<Image  alt="photo"  src="https://skillicons.dev/icons?i=nodejs"></Image>
						</Button>
					</PopoverTrigger>
					{content[5]}
				</Popover>

				<Popover key="6" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Javascript
							<Image alt="photo"  src="https://skillicons.dev/icons?i=js"></Image>
						</Button>
					</PopoverTrigger>
					{content[4]}
				</Popover>


				<Popover key="7" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							mongodb
							<Image alt="photo"  src="https://skillicons.dev/icons?i=mongodb"></Image>
						</Button>
					</PopoverTrigger>
					{content[8]}
				</Popover>

				<Popover key="8" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							postman
							<Image alt="photo"  src="https://skillicons.dev/icons?i=postman"></Image>
						</Button>
					</PopoverTrigger>
					{content[15]}
				</Popover>
				
				

			</div>

            <br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h1 className="text-l font-semibold ">ACM SOFTWARE (Java Desktop)</h1>
			<Accordion >
				<AccordionItem
				
					aria-label="ACM Software"
					subtitle={
					<span>
						Click para expandir
					</span>
					}
					title="Descrição do Sistema"
				>
					{AccordionContent[2]}
     		   </AccordionItem>

			</Accordion>
			<Image
				
				rounded-full
				isZoomed
				alt="Acm Cadastro de alunos"
				src="/acm_1.png"
			/>

            <br></br>
            
			<div className="inline-block max-w-lg text-center font-sans justify-center">
 				<h1 className="text-l font-semibold ">Tecnologias utilizadas :</h1>
			</div>
			<div className=" shadow-2x1 rounded-lg flex flex-wrap gap-7 ml-3">

                 <Popover key="5" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Java
							<Image  alt="photo"  src="https://skillicons.dev/icons?i=java"></Image>
						</Button>
					</PopoverTrigger>
					{content[11]}
				</Popover>
                <Popover key="6" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							MySQL
							<Image alt="photo"  src="https://skillicons.dev/icons?i=mysql"></Image>
						</Button>
					</PopoverTrigger>
					{content[12]}
				</Popover>

			
			</div>
		
				<br></br>
				<br></br>
				<br></br>
			<br></br>
			<h1 className="text-l font-semibold ">GrupoCine (Voltado para mobile)</h1>
			<Accordion >
				<AccordionItem
				
					aria-label="GrupoCine"
					subtitle={
					<span>
						Click para abrir
					</span>
					}
					title="Descrição do Sistema"
				>
					{AccordionContent[3]}
     		   </AccordionItem>

			</Accordion>
			<Image
				
				rounded-full
			
				alt="GrupoCine"
				src="/GrupoCine.png"
			/>

			<div className="inline-block max-w-lg text-center font-sans justify-center">
 				<h1 className="text-l font-semibold ">Tecnologias utilizadas no frontend:</h1>
			</div>
			<div className=" shadow-2x1 rounded-lg flex flex-wrap gap-7 ml-3">

				<Popover key="1" placement="top" color={colors[7]}>
					<PopoverTrigger>
						<Button color={colors[7]} className="capitalize">
							react
							<Image alt="photo" src="https://skillicons.dev/icons?i=react"></Image>
						</Button>
					</PopoverTrigger>
					{content[2]}
				</Popover>
			
				<Popover key="3" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							javascript
							<Image alt="photo"  src="https://skillicons.dev/icons?i=js"></Image>
						</Button>
					</PopoverTrigger>
					{content[3]}
				</Popover>
				<Popover key="4" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Styled Components
							<Image alt="photo"  src="https://skillicons.dev/icons?i=styledcomponents"></Image>
						</Button>
					</PopoverTrigger>
					{content[14]}
				</Popover>


					


			</div>
			<h1 className="text-l font-semibold ">Acesse aqui:</h1>
			<DeployButton link={"https://grupocine-git-main-vinisi12363.vercel.app/"}></DeployButton>
					
				
            <br></br>	
            <br></br>	
            <br></br>	
            <br></br>	
            <br></br>
			<br></br>
			<br></br>
			<h1 className="text-l font-semibold ">Weather</h1>
			<Accordion >
				<AccordionItem
				
					aria-label="Weather"
					subtitle={
					<span>
						Click para abrir
					</span>
					}
					title="Descrição do Sistema"
				>
					{AccordionContent[4]}
     		   </AccordionItem>

			</Accordion>
			<Image
				
				rounded-full
			
				alt="WeatherApp"
				src="/weather.png"
			/>

			<div className="inline-block max-w-lg text-center font-sans justify-center">
 				<h1 className="text-l font-semibold ">Tecnologias utilizadas no frontend:</h1>
			</div>
			<div className=" shadow-2x1 rounded-lg flex flex-wrap gap-7 ml-3">

				<Popover key="1" placement="top" color={colors[7]}>
					<PopoverTrigger>
						<Button color={colors[7]} className="capitalize">
							react
							<Image alt="photo" src="https://skillicons.dev/icons?i=react"></Image>
						</Button>
					</PopoverTrigger>
					{content[2]}
				</Popover>
			
				<Popover key="3" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							javascript
							<Image alt="photo"  src="https://skillicons.dev/icons?i=js"></Image>
						</Button>
					</PopoverTrigger>
					{content[3]}
				</Popover>
				<Popover key="4" placement="top" color={colors[0]}>
					<PopoverTrigger>
						<Button color={colors[0]} className="capitalize">
							Styled Components
							<Image alt="photo"  src="https://skillicons.dev/icons?i=styledcomponents"></Image>
						</Button>
					</PopoverTrigger>
					{content[14]}
				</Popover>


					


			</div>
			<h1 className="text-l font-semibold ">Acesse aqui:</h1>
			<DeployButton link={"https://projeto25-desafio-tecnico-dcic.vercel.app/"}></DeployButton>
					
				
            <br></br>	
            <br></br>	
            <br></br>	






				<h1 className="text-l font-semibold ">Curriculum Vitae :</h1>
					
				
				<DownloadCvButton></DownloadCvButton>
			


		</section>
	);
}
