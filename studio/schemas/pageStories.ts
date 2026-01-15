import { defineType, defineField } from 'sanity'
import { i18nString, i18nText } from './helpers/i18n'

export default defineType({
    name: 'pageStories',
    title: '💬 Stories Page',
    type: 'document',
    fields: [
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                i18nString('title', 'Page Title'),
                i18nText('subtitle', 'Page Subtitle'),
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Stories Page' }
        },
    },
})
