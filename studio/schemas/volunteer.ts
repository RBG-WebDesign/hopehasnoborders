export default {
    name: 'volunteer',
    title: '🤝 Volunteer Opps',
    type: 'document',
    fields: [
        { name: 'title_en', title: 'Title (En)', type: 'string' },
        { name: 'title_es', title: 'Title (Es)', type: 'string' },
        { name: 'desc_en', title: 'Description (En)', type: 'array', of: [{ type: 'block' }] },
        { name: 'desc_es', title: 'Description (Es)', type: 'array', of: [{ type: 'block' }] },
        { name: 'active', title: 'Active?', type: 'boolean', initialValue: true },
    ]
}
