import defaultSettings from '@/settings'

const title = defaultSettings.title || '建筑市场服务平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
