import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "FireLord Arts",
  description: "*Put catchy description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary antialiased">
        {/* <div className="min-h-screen"> */}
          {children}
        {/* </div> */}
      </body>
    </html>
  )
}