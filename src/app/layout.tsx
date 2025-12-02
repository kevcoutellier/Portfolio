import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio IA - Développeur Full-Stack & AI Engineer",
  description: "Développeur spécialisé en intelligence artificielle et applications web modernes. Créateur de solutions innovantes avec React, Python, et technologies IA.",
  keywords: "développeur, intelligence artificielle, IA, React, Next.js, Python, machine learning, web development",
  authors: [{ name: "Kevin AI Developer" }],
  creator: "Kevin AI Developer",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ai-portfolio.dev",
    title: "Portfolio IA - Développeur Full-Stack & AI Engineer",
    description: "Développeur spécialisé en intelligence artificielle et applications web modernes",
    siteName: "AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio IA - Développeur Full-Stack & AI Engineer",
    description: "Développeur spécialisé en intelligence artificielle et applications web modernes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
