import { defineType, defineField } from 'sanity'
import { i18nString, i18nText } from './helpers/i18n'

export default defineType({
    name: 'pageResources',
    title: '📚 Resources Page',
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
            name: 'resources',
            title: 'Resource List',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    i18nString('title', 'Resource Title'),
                    i18nText('description', 'Description'),
                    defineField({
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                        options: {
                            list: [
                                { title: '🏠 Home', value: 'home' },
                                { title: '❤️ Heart', value: 'heart' },
                                { title: '⚖️ Scale', value: 'scale' },
                                { title: '📍 Map Pin', value: 'mapPin' },
                                { title: '📞 Phone', value: 'phone' },
                                { title: '✉️ Mail', value: 'mail' },
                            ],
                        },
                    }),
                    defineField({ name: 'link', title: 'Link URL', type: 'url' }),
                ],
            }],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Resources Page' }
        },
    },
})
