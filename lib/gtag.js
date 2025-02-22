import BLOG from '@/blog.config'
export const GA_TRACKING_ID = BLOG.analytics.gaConfig.measurementId

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export const gtagpageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
