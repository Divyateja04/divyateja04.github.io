"use client"
import { siteConfig } from "@/config/site";
import NextImage from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block w-full text-center justify-center">
				<h1 className="text-2xl">Hey there, I am </h1>
				<h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] text-5xl md:text-7xl">DIVYATEJA PASUPULETI&nbsp;</h1>
			</div>

			{/* ABOUT SECTION */}
			<div className="mt-10 w-full" id="about">
				<h1 className='text-3xl font-bold py-10'>ABOUT</h1>
				<div className="text-xl">
					I am currently a 3rd-year undergraduate student in India, and my passion for
					Computer Science has been with me since my childhood. Growing up, I was always
					fascinated by computers - understanding how they work and the potential they have
					when we program them to improve our lives.
					<br />
					<br />
					My childhood interests in programming, robotics, and electronics have led me to pursue
					my undergraduate studies in Computer Science and Engineering. I was always that guy who wanted to
					use his skills to make the world a better place for the socieT.
					<br />
					<br />
					When I am not coding, you can find me reading books, watching movies, or building robots. You can find my
					notes at <Link href="https://handoutsforyou.vercel.app" className="underline">Notes @ BPHC</Link>
				</div>

				{/* SKILLS */}
				<h1 className='text-3xl font-bold py-10'>SKILLS</h1>
				<div className="w-full flex items-center justify-center">
					<div className="flex flex-wrap justify-center gap-4 max-w-xl">
						{siteConfig.skillsData.map((item, index) => (
							<Image alt="logo" className={`${item.invert && "dark:invert"} h-10 w-10 m-2 transform transition-transform hover:scale-150`} src={item.href} key={index} width={0} height={0} />
						))}
					</div>
				</div>

			</div>

			{/* EDUCATION SECTION */}
			<div className="mt-10 w-full" id="education">
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
			<div className="mt-10 w-full" id="experience">
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
			<div className="mt-10 w-full" id="projects">
				<h1 className='text-3xl font-bold py-10'>PROJECTS</h1>
				<div className="grid md:grid-cols-2">
					{siteConfig.webProjectsData.map((item, index) => (
						// <div key={index} className="border p-6 rounded-md shadow-md m-4 border-pink-400">
						// 	<Link href={item.link}>
						// 		<div className="text-3xl font-bold mb-2">{item.title}</div>
						// 	</Link>
						// 	<div className="text-lg">{item.description}</div>
						// 	<NextImage src={item.imageSrc} alt={item.title} className="mt-4 rounded-md shadow-md" width={0} height={0} layout="responsive" />
						// </div>
						<Card isFooterBlurred className="h-[350px] m-6" key={index} >
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<h4 className="text-white/90 font-medium text-xl">{item.title}</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Image"
								className="z-0 w-full h-full object-cover blur-0 hover:blur-sm"
								src={item.imageSrc}
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col">
										<p className="text-tiny text-white/60">{item.description} </p>
									</div>
								</div>
								<Button radius="full" size="sm" onClick={() => {
									window.open(item.link)
								}}>Visit</Button>
							</CardFooter>
						</Card>
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
