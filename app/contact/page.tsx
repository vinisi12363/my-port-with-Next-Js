"use client"
import { title, subtitle } from "@/components/primitives";
import { DownloadCvButton } from "@/components/CvButton";
import { useLang } from "@/i18n/LanguageProvider";


export default function BlogPage() {
	const { t } = useLang();
	return (
		<>
			<div>
			<h1 className={title()}>{t.contactPage.title}</h1>

			<a   href="mailto:viniciuspv.si@gmail.com" target="_blank" className={subtitle({ class: " w-full mt-4" })}>
				{t.contactPage.email}: viniciuspv.si@gmail.com
			</a>
			<a href="https://api.whatsapp.com/send?phone=5573988251737" target="_blank"className= {subtitle({class: " w-full mt-4"})}>
				{t.contactPage.whatsapp}: +5573988251737
			</a>
			<br></br>
			<br></br>
			<DownloadCvButton></DownloadCvButton>


		</div>

		</>

	);
}
