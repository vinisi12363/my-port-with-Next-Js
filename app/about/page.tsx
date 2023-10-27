"use client"
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import {Content} from "./content";

export default function AboutPage() {
	return (
		<>
				<h1 className={title()}>Sobre mim</h1>
			   
				<ScrollShadow hideScrollBar className="w-[300px] h-[400px] ">
				<Content />
				</ScrollShadow>
		</>
	
	);
}
