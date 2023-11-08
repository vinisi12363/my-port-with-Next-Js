import { title, subtitle } from "@/components/primitives";

export default function BlogPage() {
	return (
		<div>
		<h1 className={title()}>Talk to me :</h1>
		
		<a   href="mailto:viniciuspv.si@gmail.com" target="_blank" className={subtitle({ class: " w-full mt-4" })}>
			Email: viniciuspv.si@gmail.com 
		</a>
		<a href="https://api.whatsapp.com/send?phone=5573988251737" target="_blank"className= {subtitle({class: " w-full mt-4"})}> 
			Whatsapp: +5573988251737
		</a>

	</div>
	);
}
