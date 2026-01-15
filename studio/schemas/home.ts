export default {
    name: 'home',
    title: '🏠 Home Page',
    type: 'document',
    fields: [
        {
            name: 'hero',
            title: '🟧 Hero Section',
            type: 'object',
            fields: [
                { name: 'subtitle_en', title: 'Small Tag Line (En)', type: 'string' },
                { name: 'subtitle_es', title: 'Small Tag Line (Es)', type: 'string' },
                { name: 'title_en', title: 'Main Headline (En)', type: 'string' },
                { name: 'title_es', title: 'Main Headline (Es)', type: 'string' },
                { name: 'desc_en', title: 'Description (En)', type: 'text' },
                { name: 'desc_es', title: 'Description (Es)', type: 'text' },
                { name: 'image', title: 'Background Image', type: 'image' },
                { name: 'btn_primary_en', title: 'Primary Button (En)', type: 'string' },
                { name: 'btn_primary_es', title: 'Primary Button (Es)', type: 'string' },
                { name: 'btn_primary_link', title: 'Primary Button Link', type: 'string' },
            ]
        },
        {
            name: 'mission_video',
            title: '🎥 Mission Video',
            type: 'object',
            fields: [
                { name: 'label_en', title: 'Label (En)', type: 'string' },
                { name: 'label_es', title: 'Label (Es)', type: 'string' },
                { name: 'quote_en', title: 'Quote (En)', type: 'string' },
                { name: 'quote_es', title: 'Quote (Es)', type: 'string' },
                { name: 'url', title: 'YouTube URL', type: 'url' },
            ]
        },
        {
            name: 'services',
            title: '📦 Services',
            type: 'object',
            fields: [
                {
                    name: 'list',
                    title: 'Service List',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title_en', type: 'string' },
                            { name: 'title_es', type: 'string' },
                            { name: 'summary_en', type: 'text' },
                            { name: 'summary_es', type: 'text' },
                            { name: 'icon', type: 'string', options: { list: ['home', 'scale', 'users'] } },
                            { name: 'link', type: 'string' }
                        ]
                    }]
                }
            ]
        },
        // ... Needs/Impact, Testimonials, CTA can be added similarly
    ]
}
