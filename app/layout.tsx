import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "강명우 | Frontend Developer",
  description: "5년 7개월 경력의 Frontend 개발자 강명우의 포트폴리오입니다.",
  keywords: ["강명우", "개발자", "Frontend", "Java", "JavaScript", "TypeScript", "React", "Next.js"],
  authors: [{ name: "강명우" }],
  openGraph: {
    title: "강명우 | Frontend Developer",
    description: "5년 7개월 경력의 Frontend 개발자",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
