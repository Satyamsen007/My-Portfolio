import CustomCursor from "@/components/CustomCursor";
import { NotFoundPage } from "@/components/ui/404-page-not-found";


export const metadata = {
  title: '404 Page Not Found',
  description: "Oops! The page you're looking for could not be found.",
  openGraph: {
    title: "Satyam Sen | Full-Stack Web Developer",
    description:
      "I build high-performance, SEO-friendly web applications with modern JavaScript stacks. Passionate about crafting accessible, scalable solutions—from pixel-perfect UIs to robust backend APIs.",
    url: "https://satyam-dev-phi.vercel.app",
    siteName: "Satyam Dev",
    images: [
      {
        url: "https://satyam-dev-phi.vercel.app/OG_IMAGES/404PageImage.png",
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
    images: ["https://satyam-dev-phi.vercel.app/OG_IMAGES/404PageImage.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const page = () => {
  return (
    <div className="w-full">
      <CustomCursor />
      <NotFoundPage />
    </div>
  )
}

export default page;