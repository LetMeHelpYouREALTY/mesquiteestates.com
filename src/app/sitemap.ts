import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    '',
    '/About',
    '/About_Mesquite',
    '/Services',
    '/Contact_us',
    '/Golf_Homes_Mesquite',
    '/Mesquite_Homes_For_Sale',
    '/Buying_Home_Mesquite',
    '/Mesquite_Realtor_Services',
    '/Mesquite_Golf_Trip',
    '/Mesquite_Transportation',
    '/Mesquite_Weather',
    '/communities',
    '/communities/sun-city-mesquite',
    '/communities/falcon-ridge',
    '/communities/mesquite-vistas',
    '/communities/highland-villas',
    '/55-plus-communities-mesquite',
    '/sell-your-mesquite-home',
    '/Sun_City_Mesquite',
    '/Sun_City_Mesquite_Floor_Plans',
    '/Sun_City_Mesquite_Amenities',
    '/Conestoga_Golf_Mesquite',
    '/mesquite-estates',
    '/mesquite-estates/new-construction-buyers',
    '/mesquite-estates/lots-and-custom-homes',
    '/mesquite-estates/sell-your-home',
    '/mesquite-estates/gatherings-at-ridgemont',
    '/mesquite-estates/val-vista',
    '/mesquite-estates/mohave-ridge',
    '/mesquite-estates/bella-horizon',
    '/mesquite-estates/royal-vista',
    '/mesquite-estates/sierra-ridge',
  ]

  return staticPages.map((route) => {
    // Set priority based on route importance
    let priority = 0.8;
    if (route === '') priority = 1.0;
    else if (route === '/Sun_City_Mesquite') priority = 0.9;
    else if (route === '/mesquite-estates') priority = 0.95;
    else if (route.startsWith('/mesquite-estates/')) priority = 0.9;
    else if (['/Sun_City_Mesquite_Floor_Plans', '/Sun_City_Mesquite_Amenities', '/Conestoga_Golf_Mesquite'].includes(route)) priority = 0.85;
    else if (['/Mesquite_Homes_For_Sale', '/Golf_Homes_Mesquite', '/Contact_us'].includes(route)) priority = 0.85;
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority,
    };
  })
}

