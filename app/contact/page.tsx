"use client"
import { title, subtitle } from "@/components/primitives";
import { DownloadButton } from "@/components/Button";


export default function BlogPage() {
	const download = () => {
        window.open('CV_Marcos_Vinicius.pdf', '_blank');

    }
	return (
		<>
			<div>
			<h1 className={title()}>Fale comigo :</h1>
			
			<a   href="mailto:viniciuspv.si@gmail.com" target="_blank" className={subtitle({ class: " w-full mt-4" })}>
				Email: viniciuspv.si@gmail.com 
			</a>
			<a href="https://api.whatsapp.com/send?phone=5573988251737" target="_blank"className= {subtitle({class: " w-full mt-4"})}> 
				Whatsapp: +5573988251737
			</a>
			<br></br>
			<br></br>
			<DownloadButton></DownloadButton>
			

		</div>
		
		</>
	
	);
}
