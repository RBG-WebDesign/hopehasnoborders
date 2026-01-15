// i18n helper for bilingual fields (EN/ES side-by-side in Studio)
import { defineField } from 'sanity'

export const i18nString = (name: string, title: string, options?: { rows?: number }) =>
    defineField({
        name,
        title,
        type: 'object',
        fields: [
            { name: 'en', title: 'English', type: 'string' },
            { name: 'es', title: 'Español', type: 'string' },
        ],
        options: {
            columns: 2,
        },
    })

export const i18nText = (name: string, title: string, options?: { rows?: number }) =>
    defineField({
        name,
        title,
        type: 'object',
        fields: [
            { name: 'en', title: 'English', type: 'text', rows: options?.rows || 3 },
            { name: 'es', title: 'Español', type: 'text', rows: options?.rows || 3 },
        ],
        options: {
            columns: 2,
        },
    })

export const i18nPortableText = (name: string, title: string) =>
    defineField({
        name,
        title,
        type: 'object',
        fields: [
            { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
            { name: 'es', title: 'Español', type: 'array', of: [{ type: 'block' }] },
        ],
    })
