import { defineType, defineField } from 'sanity'
import { i18nString, i18nText } from './helpers/i18n'

export default defineType({
    name: 'pageVolunteer',
    title: '🤝 Volunteer Page',
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
        defineField({
            name: 'opportunities',
            title: 'Volunteer Opportunities',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    i18nString('title', 'Opportunity Title'),
                    i18nText('description', 'Description'),
                ],
                preview: {
                    select: { title: 'title.en' },
                },
            }],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Volunteer Page' }
        },
    },
})
