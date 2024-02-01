"use client"
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import NextImage from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block w-full text-center justify-center">
				<h1 className="text-2xl">Hey there, I am </h1>
				<h1 className={title({ color: "violet" })}>DIVYATEJA PASUPULETI&nbsp;</h1>
			</div>

			{/* ABOUT SECTION */}
			<div className="mt-10 w-full">
				<h1 className='text-3xl font-bold py-10'>ABOUT</h1>
				<div className="text-xl">
					I&apos;m an avid techie and a full stack developer from Hyderabad, India.
					I am a student from India and am deeply passionate about Computer Science and wish
					to pursue a career in it. From my very childhood, I used to be passionate about
					computers, how they work, and how we can program them to make our lives better.
					<br />
				</div>

				{/* SKILLS */}
				<h1 className='text-3xl font-bold py-10'>SKILLS</h1>
				<div className="w-full flex items-center justify-center">
					<div className="flex flex-wrap justify-center gap-4 max-w-xl">
						{siteConfig.skillsData.map((item, index) => (
							<Image alt="logo" className={`${item.invert && "dark:invert"} h-10 w-10 m-2 transform transition-transform hover:scale-150`} src={item.href} key={index} />
						))}
					</div>
				</div>

			</div>

			{/* EDUCATION SECTION */}
			<div className="mt-10 w-full">
				<h1 className='text-3xl font-bold py-10'>EDUCATION</h1>
				{siteConfig.educationDetails.map((item, index) => (
					<div key={index} className="border p-6 rounded-md shadow-md mb-8 border-pink-400">
						<div className="text-3xl font-bold mb-2">{item.college}</div>
						<div className="text-lg mb-2">{item.subtitle}</div>
						<div className="text-lg">{item.year}</div>
					</div>
				))}
			</div>

			{/* EXPERIENCE SECTION */}
			<div className="mt-10 w-full">
				<h1 className='text-3xl font-bold py-10'>EXPERIENCE</h1>
				<Accordion>
					{siteConfig.experienceData.map((item, index) => (
						<AccordionItem
							key={index + 1}
							aria-label="Accordion"
							title={item.post}
							subtitle={item.organization}>
							{item.description}
						</AccordionItem>
					))}
				</Accordion>
			</div>

			{/* PROJECTS SECTION */}
			<div className="mt-10 w-full">
				<h1 className='text-3xl font-bold py-10'>PROJECTS</h1>
				<div className="grid md:grid-cols-2">
					{siteConfig.webProjectsData.map((item, index) => (
						<div key={index} className="border p-6 rounded-md shadow-md m-4 border-pink-400">
							<Link href={item.link}>
								<div className="text-3xl font-bold mb-2">{item.title}</div>
							</Link>
							<div className="text-lg">{item.description}</div>
							<NextImage src={item.imageSrc} alt={item.title} className="mt-4 rounded-md shadow-md" width={0} height={0} layout="responsive" />
						</div>
					))}
				</div>
			</div>

			<div className="mt-10 w-full">
				<h1 className='text-3xl font-bold py-10'>ROBOTICS PROJECTS</h1>
				<div className="grid md:grid-cols-2">
					{siteConfig.roboticsProjects.map((item, index) => (
						<div key={index} className="border p-6 rounded-md shadow-md m-4 border-pink-400">
							<Link href={"#"}>
								<div className="text-3xl font-bold mb-2">{item.title}</div>
							</Link>
							<div className="text-lg">{item.description}</div>
							<NextImage src={item.imageSrc} alt={item.title} className="mt-4 rounded-md shadow-md" width={0} height={0} layout="responsive" />
						</div>
					))}
				</div>
			</div>

			{/* ACHIEVEMENTS */}
			<div className="mt-10 w-full">
				<h1 className='text-3xl font-bold py-10'>ACHIEVEMENTS</h1>
				<div className="grid md:grid-cols-3">
					{siteConfig.acheievementsData.map((item, index) => (
						<Accordion key={index + 1}>
							<AccordionItem aria-label="Accordion 1" title={item.title}>
								{item.subtitle}
							</AccordionItem>
						</Accordion>
					))}
				</div>
			</div>


		</section>
	);
}
