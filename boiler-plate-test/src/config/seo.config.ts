import { DefaultSeoProps } from 'next-seo'
import { siteConfig } from './site'

export const seoConfig: DefaultSeoProps = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.name,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: siteConfig.links.twitter,
    site: siteConfig.links.twitter,
    cardType: 'summary_large_image',
  },
}
