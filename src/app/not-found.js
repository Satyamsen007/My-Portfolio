
// export const metadata = {
//   title: '404 Page Not Found',
//   description: "Oops! The page you're looking for could not be found.",
//   openGraph: {
//     title: "404 Page Not Found",
//     description:
//       "Oops! The page you're looking for could not be found.",
//     url: "https://www.motionwriter.in",
//     siteName: "Motion Writer",
//     images: [
//       {
//         url: "https://motionwriter.in/OG_IMAGES/notFoundPageImage.gif",
//         width: 1200,
//         height: 630,
//         alt: "Motion Writer 404 Page Image",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   // Twitter Card Tags
//   twitter: {
//     card: "summary_large_image",
//     title: "404 Page Not Found",
//     description:
//       "Oops! The page you're looking for could not be found.",
//     images: ["https://motionwriter.in/OG_IMAGES/notFoundPageImage.png"],
//   },
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,
//   },
//   // Additional Meta Tags
//   other: {
//     "theme-color": "#4583B4",
//     author: "Subham Sen",
//     publisher: "Motion Writer Agency",
//     "application-name": "Motion Writer",
//     "apple-mobile-web-app-capable": "yes",
//     "mobile-web-app-capable": "yes",
//     "apple-mobile-web-app-status-bar-style": "default",
//   }
// };

import { NotFoundPage } from "@/components/ui/404-page-not-found";

const page = () => {
  return (
    <div className="w-full">
      <NotFoundPage />
    </div>
  )
}

export default page;