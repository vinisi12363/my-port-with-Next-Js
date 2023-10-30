"use client"
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import {Content} from "./content";
import {Avatar} from "@nextui-org/react";

export default function AboutPage() {
	return (
		<>		
				
		
				<div className="flex flex-col gap-4 items-center">
					<Avatar src="/eu_5.png" className="w-60 h-60 text-large" />
   				
					<h1 className={title()}>Sobre mim</h1>
					
					<br></br>
					<br></br>
					<br></br>
				
				<ScrollShadow hideScrollBar className="w-[300px] h-[400px] gap-300 ">
						<Content />
					</ScrollShadow>
			    </div>
				
		</>
	
	);
}
