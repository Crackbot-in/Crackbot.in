import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crackbot",
    template: "%s | Crackbot",
  },
  description:
    "Independent Cybersecurity Research Group focused on Threat Intelligence, Malware Analysis, Offensive Security, Digital Forensics and Security Research.",
  keywords: [
    "Cybersecurity",
    "Threat Intelligence",
    "Malware",
    "DFIR",
    "VAPT",
    "Security Research",
    "Crackbot",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}