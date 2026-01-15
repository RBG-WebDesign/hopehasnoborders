export default {
    name: 'story',
    title: '📰 Stories & Testimonials',
    type: 'document',
    fields: [
        { name: 'title_en', title: 'Title (En)', type: 'string' },
        { name: 'title_es', title: 'Title (Es)', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title_en' } },
        { name: 'author', title: 'Author/Name', type: 'string' },
        { name: 'location', title: 'Location', type: 'string' },
        { name: 'body_en', title: 'Body (En)', type: 'array', of: [{ type: 'block' }] },
        { name: 'body_es', title: 'Body (Es)', type: 'array', of: [{ type: 'block' }] },
        { name: 'image', title: 'Image', type: 'image' },
        { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    ]
}
