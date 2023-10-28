import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X | Personal Portfolio",
  description:
    "Self-taught Full-Stack Developer | Web Development Enthusiast | Crafting digital solutions with passion and expertise. Explore my journey in the world of web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
