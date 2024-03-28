import { Fira_Code, Inter, Orbitron } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
})
