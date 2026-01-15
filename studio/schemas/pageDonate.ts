import { defineType, defineField } from 'sanity'
import { i18nString, i18nText } from './helpers/i18n'

export default defineType({
    name: 'pageDonate',
    title: '💰 Donate Page',
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
            name: 'amounts',
            title: 'Suggested Donation Amounts',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. "$25", "$50", "$100"',
        }),
        defineField({
            name: 'featuredProduct',
            title: 'Featured Product (Tote Bag)',
            type: 'object',
            fields: [
                i18nString('title', 'Product Title'),
                defineField({ name: 'price', title: 'Price', type: 'string' }),
                i18nText('description', 'Description'),
                defineField({ name: 'image', title: 'Product Image', type: 'image' }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Donate Page' }
        },
    },
})
