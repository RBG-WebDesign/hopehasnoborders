export default {
    name: 'page',
    title: '📄 Pages',
    type: 'document',
    fields: [
        { name: 'title_en', title: 'Page Title (En)', type: 'string' },
        { name: 'title_es', title: 'Page Title (Es)', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title_en' } },
        { name: 'body_en', title: 'Body (En)', type: 'array', of: [{ type: 'block' }] },
        { name: 'body_es', title: 'Body (Es)', type: 'array', of: [{ type: 'block' }] },
        { name: 'image', title: 'Header Image', type: 'image' },
    ]
}
