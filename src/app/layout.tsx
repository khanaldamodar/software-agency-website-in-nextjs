import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navigation } from "@/components/Navigation"
import  Footer  from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shakta Technology - Building Experiences That Matter",
  description: "We transform ideas into powerful software solutions that drive business growth and user engagement.",
  openGraph: {
    title: "Shakta Technology - Building Experiences That Matter",
    description: "We transform ideas into powerful software solutions that drive business growth and user engagement.",
    siteName: "Shakta Technology",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* <Navigation /> */}
          <Navbar/>
          <main>{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
