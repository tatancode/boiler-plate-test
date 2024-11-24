import { Organization, WebSite, WithContext } from 'schema-dts'
import { siteConfig } from '@/config/site'

export function SchemaOrg() {
  const schema: WithContext<WebSite | Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
