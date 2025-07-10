import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import MusicPlayButton from "@/components/MusicPlayButton";

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-sans"
});

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: "--font-serif",
  weight: ["400"]
});

export const metadata = {
  title: "Satyam Sen | Full-Stack Web Developer",
  description: "I build high-performance, SEO-friendly web applications with modern JavaScript stacks. Passionate about crafting accessible, scalable solutions—from pixel-perfect UIs to robust backend APIs.",
  keywords:
    "Full Stack Developer, Web Development Services, Frontend Development, Backend Development, MERN Stack Developer, React.js Developer Node.js Developer JavaScript Developer API Development Responsive Web Design Custom Web Applications",

  openGraph: {
    title: "Satyam Sen | Full-Stack Web Developer",
    description:
      "I build high-performance, SEO-friendly web applications with modern JavaScript stacks. Passionate about crafting accessible, scalable solutions—from pixel-perfect UIs to robust backend APIs.",
    url: "https://www.motionwriter.in",
    siteName: "Satyam Dev",
    images: [
      {
        url: "https://motionwriter.in/OG_IMAGES/homePageImage.png",
        width: 1200,
        height: 630,
        alt: "Satyam Dev PortFolio Page Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Satyam Sen | Full-Stack Web Developer",
    description:
      "I build high-performance, SEO-friendly web applications with modern JavaScript stacks. Passionate about crafting accessible, scalable solutions—from pixel-perfect UIs to robust backend APIs.",
    images: ["https://motionwriter.in/ogImage.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  // Canonical URL
  alternates: {
    canonical: "https://www.motionwriter.in/",
  },
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/favicons/web-app-manifest-192x192.png", },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/favicons/web-app-manifest-512x512.png", },
      { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicons/favicon-96x96.png' },
      { rel: "icon", type: "image/svg", url: "/favicons/favicon.svg", },
      { rel: "icon", type: "image/ico", url: "/favicons/favicon.ico", },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.variable, calistoga.variable)}
      >
        {children}
        <MusicPlayButton />
      </body>
    </html >
  );
}
