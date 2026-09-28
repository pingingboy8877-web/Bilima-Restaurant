import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Bilima Restaurant — Food, thoughtfully made.",description:"Bilima Restaurant — a modern dining and ordering experience."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}