import defaultSettings from '@/settings'

const title = defaultSettings.title || 'No pain, no gain'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
