"use client"
import { siteConfig } from "@/config/site";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block w-full text-center justify-center">
				<Card
					isBlurred
					className="border border-pink-600 backdrop-blur-md w-full"
					shadow="sm"
				>
					<CardBody>
						<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
							<div className="relative col-span-6 md:col-span-4">
								<Image
									alt="Album cover"
									className="object-cover"
									height={200}
									shadow="md"
									src="/images/me.jpg"
									width="100%"
								/>
							</div>

							<div className="flex flex-col col-span-6 md:col-span-8">
								<div className="flex justify-between items-start">
									<div className="flex flex-col gap-0">
										<div className="inline-block w-full text-center justify-center">
											<h1 className="text-2xl">Hey there, I am </h1>
											<h1 className="bg-clip-text text-5xl md:text-7xl">DIVYATEJA PASUPULETI&nbsp;</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>

			{/* ABOUT SECTION */}
			<div className="mt-10 w-full" id="about">
				<h1 className='text-3xl font-bold py-10'>ABOUT</h1>
				<div className="text-xl">
					Hi there, I am currently a 3rd-year undergraduate student in India. My childhood interests in programming, robotics, and electronics have led me to pursue
					my undergraduate studies in Computer Science.
					<br />
					<br />
					I am passionate about learning new technologies and
					am always looking for new opportunities to learn and grow.
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
					<div key={index} className="border p-6 rounded-md shadow-md mb-8 border-pink-600">
						<div className="text-3xl font-bold mb-2">{item.year} | {item.college}</div>
						<div className="text-lg mb-2">{item.subtitle}</div>
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
							subtitle={item.organization + " | " + item.date}
						>
							{item.description}
						</AccordionItem>
					))}
				</Accordion>
			</div>

			{/* POSITIONS OF RESPONSIBILITY SECTION */}
			<div className="mt-10 w-full" id="experience">
				<h1 className='text-3xl font-bold py-10'>POSITIONS OF RESPONSIBILITY</h1>
				<Accordion>
					{siteConfig.porData.map((item, index) => (
						<AccordionItem
							key={index + 1}
							aria-label="Accordion"
							title={item.post}
							subtitle={item.organization + " | " + item.date}
						>
							{item.description}
						</AccordionItem>
					))}
				</Accordion>
			</div>

			{/* PUBLICATIONS SECTION */}
			<div className="mt-10 w-full" id="publications">
				<h1 className='text-3xl font-bold py-10'>PUBLICATIONS</h1>
				<Accordion>
					{siteConfig.publicationsData.map((item, index) => (
						<AccordionItem
							key={index + 1}
							aria-label="Accordion"
							title={item.title}
							subtitle={item.date + " | " + item.details}
						>
							{item.desc}
						</AccordionItem>
					))}
				</Accordion>
			</div>

			{/* PROJECTS SECTION */}
			<div className="mt-10 w-full" id="projects">
				<h1 className='text-3xl font-bold py-10'>PROJECTS</h1>
				<div className="grid md:grid-cols-2">
					{siteConfig.webProjectsData.map((item, index) => (
						<Card key={index} className="relative group h-80 m-6 overflow-hidden">
							<CardHeader className="absolute z-10 flex-col items-start backdrop-blur-lg">
								<h4 className="text-white font-bold text-xl">{item.title}</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Image"
								className="z-0 w-full h-full object-contain blur-0 group-hover:blur-lg"
								src={item.imageSrc}
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 transition-transform translate-y-full group-hover:translate-y-0">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col">
										<p className="text-md md:text-lg text-white/80">{item.description}</p>
									</div>
								</div>
								<Button radius="full" size="md" onClick={() => window.open(item.link)}>
									Visit
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>

			<div className="mt-10 w-full">
				<h1 className='text-3xl font-bold py-10'>ROBOTICS PROJECTS</h1>
				<div className="grid md:grid-cols-2">
					{siteConfig.roboticsProjects.map((item, index) => (
						<Card key={index} className="relative group h-[300px] m-6 overflow-hidden">
							<CardHeader className="absolute z-10 flex-col items-start backdrop-blur-lg">
								<h4 className="text-white font-bold text-xl">{item.title}</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Image"
								className="z-0 w-full h-full object-contain blur-0 group-hover:blur-lg"
								src={item.imageSrc}
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 transition-transform translate-y-full group-hover:translate-y-0">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col">
										<p className="text-md md:text-lg text-white/90">{item.description}</p>
									</div>
								</div>
							</CardFooter>
						</Card>
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


			{/* CONTACT ME */}
			<div className="mt-10 w-full">
				<>
					<h1 className='text-3xl font-bold pt-10 pb-5'>CONTACT ME</h1>
					<div className="grid md:grid-cols-3 w-full">
						<Link isExternal className="p-2" href={siteConfig.links.twitter} aria-label="Twitter">
							<TwitterIcon className="text-default-500" /> <p className="text-lg mx-4 text-default-500">Twitter</p>
						</Link>
						<Link isExternal className="p-2" href={siteConfig.links.github} aria-label="Github">
							<GithubIcon className="text-default-500" /> <p className="text-lg mx-4 text-default-500">Github</p>
						</Link>
						<Link isExternal className="p-2" href={siteConfig.links.linkedin} aria-label="Github">
							<LinkedInIcon className="text-default-500" /> <p className="text-lg mx-4 text-default-500">LinkedIn</p>
						</Link>
					</div>
				</>
			</div>

		</section >
	);
}
