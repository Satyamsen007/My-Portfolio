export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://satyam-dev-phi.vercel.app/sitemap.xml',
  }
}