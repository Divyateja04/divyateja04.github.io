export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Divyateja Pasupuleti",
	description: "Hello there, I am Divyateja Pasupuleti",
	navMenuItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Experience",
			href: "#experience",
		},
		{
			label: "Projects",
			href: "#projects",
		},
	],
	links: {
		github: "https://github.com/divyateja04",
		twitter: "https://twitter.com/thedonutcat",
		linkedin: "https://www.linkedin.com/in/divyateja-pasupuleti/",
		email: 'divyateja2004@gmail.com'
	},
	educationDetails: [
		{
			college: "BITS Pilani Hyderabad Campus",
			year: 2025,
			subtitle: "Computer Science Junior",
		},
		{
			college: "FIITJEE Junior College",
			year: 2021,
			subtitle: "Higher Secondary Certificate | 98.1 %",
		},
		{
			college: "Jubilee Hills Public School",
			year: 2019,
			subtitle: "Secondary School Certificate | 95.6 %",
		},
	],
	skillsData: [
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", invert: true },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg", invert: true },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-plain-wordmark.svg", invert: false },
		{ href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", invert: false },
	],
	experienceData: [
		{
			organization: "BITS Pilani, Hyderabad Campus",
			post: "Undergraduate Teaching Assistant - General Biology",
			date: "Nov 2023 - Present",
			description: "As part of this, I made a secure and user friendly quiz app system that detects malpractices and auto submits the user's responses with the ability to detect tab changes and window changes during the quiz itself ensuring the integrity of the assessment process. It is being used by over 500 students, on a daily basis for crucial exit tests across various courses at our campus.",
		},
		{
			organization: "BITS Pilani, Hyderabad Campus",
			post: "Undergraduate Teaching Assistant - BITS Pilani Website",
			date: "Aug 2023 - Jan 2024",
			description: "Contributed to the main BITS Pilani Website and its maintenance in order to streamline work for webmaster at BITS Pilani, Hyderabad Campus",
		},
		{
			organization: "Indian Institute of Remote Sensing (IIRS), ISRO",
			post: "Summer Internship",
			date: "May 2023 - Jul 2023",
			description: "Characterizing the Spatial-temporal Patterns of Floods in the Assam Valley: Insights from Rainfall Analysis by focusing on acquiring, pre-processing data, and employing thresholding and image segmentation algorithms to identify and delineate flooded areas.\nTechStack: Google Earth Engine, Python, JavaScript"
		},
		{
			organization: "UiT- The Arctic University of Norway",
			post: "Web Developer",
			date: "Aug 2022 - Sep 2022",
			description: "Curated and organized about 50 papers and publications from Google Scholar using web scraping. This data was used to provide accurate and up-to-date information about the laboratory's research activities, and this was hosted on a website made using Next JS."
		},
		{
			organization: "Teenage Concerns",
			post: "Web Developer",
			date: "Dec 2021 - Feb 2022",
			description: "Developed an application that allowed anonymous users to get assigned a mentor, providing a supportive platform for discussing life issues, depression, and related concerns creating a secure and personalized environment for users seeking guidance and providing anonymous chat support between them."
		}
	],
	porData: [
		{
			organization: "BITS Pilani, Hyderabad Campus",
			post: "Technical Lead - Student Welfare Division",
			date: "Jul 2022 - Present",
			description: `The SWD Nucleus manages services like giving migration certificates, 
			ID Cards, Fee Reports and conducts Mess and Hostel Allotment based on student's personal
			preferences. I also Introduced a SaaS based QR System for the college festivals, resulting in a 50% reduction in waiting time for attendees
			. I also made a wing allotment software that takes input from all the students and then matches them to the wing of their
			choice based on a priority order, and if there's no wing of that size available, then
			the wing can be allotted either in a larger wing or the wing will be split into smaller places
			and if someone filled in wrong details, they get sent into randomize pool`
		},
		{
			organization: "BITS Pilani, Hyderabad Campus",
			post: "Joint Secretary, Automation And Robotics Club",
			date: "Jul 2022 - May 2023",
			description: "Responsible for managing club projects, inventory, and tech expos and held a workshop during the technical fest, which had 100+ registrations."
		},
	],
	webProjectsData: [
		{
			title: 'Geddit. Get it done.',
			imageSrc: '/images/geddit.png', // Replace with the actual path
			description: 'A service based app which helps you request pickups and deliveries on campus.',
			link: 'https://quizapp-ten-swart.vercel.app/',
		},
		{
			title: 'Quiz App.',
			imageSrc: '/images/quizapp.png', // Replace with the actual path
			description: 'A secure and user-friendly quiz app interface that detects malpractices and auto-submits the user\'s response. It can detect tab changes and window changes as well.',
			link: 'https://quizapp-ten-swart.vercel.app/',
		},
		{
			title: 'Handouts For You.',
			imageSrc: '/images/handouts.png', // Replace with the actual path
			description: 'A dedicated website to facilitate the accessibility of almost 2000+ course handouts, notes, resources, and questions related to the campus, and contains a course review system, notes sharing system handling 1000+ requests per day.',
			link: 'https://handoutsforyou.vercel.app',
		},
		{
			title: 'Oopsie',
			imageSrc: '/images/oopsie.png',// Replace with the actual path
			description: 'A ready-to-scale, web application that supported placing orders, order status, inventory management, Admin, Manager, and User functionality using and authentication using Spring Secure',
			link: 'https://github.com/Divyateja04/Oopsie_BITS_CSF213',
		},
		{
			title: 'Trackie',
			imageSrc: '/images/trackie.png', // Replace with the actual path
			description: 'An Expense and Eval Tracker',
			link: 'https://github.com/Divyateja04/Trackie',
		},
		{
			title: 'Teenage Concerns',
			imageSrc: '/images/teenageconcerns.png', // Replace with the actual path
			description: 'This project lets anonymous users register and get a mentor assigned to them with whom they can talk about anything they want, say life issues, depression, etc.',
			link: 'https://github.com/Divyateja04/TeenageConcerns-API-GraphQL',
		},
		{
			title: 'UMO ASI Website',
			imageSrc: '/images/umoasi.png',// Replace with the actual path
			description: 'Website made for UMO ASI - The Arctic University of Norway',
			link: 'https://www.asilab.eu/',
		},
		{
			title: 'ARC Website',
			imageSrc: '/images/arcbphc.png', // Replace with the actual path
			description: 'A blog website, made using NextJS + Tailwind and hosted on Vercel at ARC-BPHC',
			link: 'https://arcbphc.vercel.app/',
		},
		{
			title: 'Verbamaximus Website 2022/23',
			imageSrc: '/images/vmwebsite.png', // Replace with the actual path
			description: 'Website for a literary fest of BPHC',
			link: 'https://verbamaximus23.vercel.app/',
		}
	],
	roboticsProjects: [
		{
			title: 'Aimbulance',
			imageSrc: '/images/aimbulance.jpg', // Replace with the actual path
			description: 'An Automatic Ambulance system that uses drones and security camera systems to automatically identify accidents and report them to the nearest hospital and also fill out forms for them',
		},
		{
			title: 'Waviour',
			imageSrc: '/images/waviour.jpg', // Replace with the actual path
			description: 'A device that saves people from drowning in the ocean',
		},
		// {
		// 	title: 'Prototype for a Wind-driven Power System',
		// 	imageSrc: '/images/windproject.png', // Replace with the actual path
		// 	description: 'In-house science exhibition winner :)',
		// },
		{
			title: 'Leap Motion Controller Based Robot',
			imageSrc: '/images/leap.png', // Replace with the actual path
			description: 'Innovative RC car-esque robot which is controlled with the motions of one’s hand alone',
		},
	],
	acheievementsData: [
		{
			"title": "IRIS National Fair - National Finalist",
			"subtitle": "Issued by IRIS National Fair in Dec 2020"
		},
		{
			"title": "Best Student Award 2018-19",
			"subtitle": "Issued by Jubilee Hills Public School"
		},
		{
			"title": "CBSE School Topper - Computer Science",
			"subtitle": "Issued by Jubilee Hills Public School"
		},
		{
			"title": "JNNSMEE Exhibition Nationalist",
			"subtitle": "Issued by NCERT in Oct 2019"
		},
		{
			"title": "NIRD RISC 2019 - Special Recognition Award",
			"subtitle": "Issued by National Institute of Rural Development and Panchayati Raj (NIRDPR) in Sep 2019"
		},
		{
			"title": "UCO National Ranker",
			"subtitle": "Issued by Unified Council in Feb 2019"
		},
		{
			"title": "CBSE National Science Exhibition - 1st Prize",
			"subtitle": "Issued by Central Board of Secondary Education in Feb 2019"
		},
		{
			"title": "NIRD RISC 2018 - 1st Prize",
			"subtitle": "Issued by National Institute of Rural Development and Panchayati Raj (NIRDPR) in Aug 2018"
		}
	],
	publicationsData: [
		{
			title: "Remotely operated autonomous life saving buoy system with Image Recognition Technology",
			details: "Indian Patent Application No. 202041027662",
			date: "Filing Date: June 29th, 2020",
			desc: "The disclosure proposes an autonomous life-saving buoy system that comprises a lifebuoy, a remote server, and an autonomous drone. The remote server tracks the victim's location and shares their images and location with rescue personnel or devices via a mobile application, facilitating timely rescue operations during natural calamities.The autonomous drone is configured to trace the victim person if the rescue personnel is unable to trace him or her",
		}
	]
};
