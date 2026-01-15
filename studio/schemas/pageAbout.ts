import { defineType, defineField } from 'sanity'
import { i18nString, i18nText, i18nPortableText } from './helpers/i18n'

export default defineType({
    name: 'pageAbout',
    title: '📖 About Page',
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
        i18nPortableText('content', 'Main Content'),
        i18nText('mission', 'Mission Statement'),
        defineField({
            name: 'values',
            title: 'Core Values',
            type: 'array',
            of: [{ type: 'object', fields: [i18nString('value', 'Value')] }],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'About Page' }
        },
    },
})
