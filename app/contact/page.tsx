import { title, subtitle } from "@/components/primitives";

export default function BlogPage() {
	return (
		<div>
		<h1 className={title()}>Talk to me :</h1>
		
		<p className={subtitle({ class: " w-full mt-4" })}>
			Email: viniciuspv.si@gmail.com 
		</p>
		<p className= {subtitle({class: " w-full mt-4"})}> 
			Whatsapp: +5573988251737
		</p>

	</div>
	);
}
