import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Maleesha Piyumini Pathirana | Software Engineering & Machine Learning Intern",
  description: "Portfolio of Maleesha Pathirana: computer vision, generative AI and scalable backend architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
