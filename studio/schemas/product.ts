export default {
    name: 'product',
    title: '🛍 Shop Products',
    type: 'document',
    fields: [
        { name: 'title_en', title: 'Product Name (En)', type: 'string' },
        { name: 'title_es', title: 'Product Name (Es)', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title_en' } },
        { name: 'desc_en', title: 'Description (En)', type: 'text' },
        { name: 'desc_es', title: 'Description (Es)', type: 'text' },
        { name: 'price', title: 'Price', type: 'number' },
        { name: 'image', title: 'Image', type: 'image' },
        { name: 'active', title: 'Active?', type: 'boolean', initialValue: true },
        { name: 'snipcartId', title: 'Snipcart ID', type: 'string' },
    ]
}
