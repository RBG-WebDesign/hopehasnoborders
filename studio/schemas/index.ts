// Export all schema types
import siteSettings from './siteSettings'
import pageHome from './pageHome'
import pageAbout from './pageAbout'
import pagePrograms from './pagePrograms'
import pageResources from './pageResources'
import pageStories from './pageStories'
import pageVolunteer from './pageVolunteer'
import pageDonate from './pageDonate'
import program from './program'
import testimonial from './testimonial'

export const schemaTypes = [
    // Singletons (one instance each)
    siteSettings,
    pageHome,
    pageAbout,
    pagePrograms,
    pageResources,
    pageStories,
    pageVolunteer,
    pageDonate,
    // Document types (multiple instances)
    program,
    testimonial,
]
