export default {
    name: 'navigation',
    title: '🧭 Navigation & Footer',
    type: 'document',
    fields: [
        {
            name: 'menu',
            title: 'Menu Items',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label_en', title: 'Label (En)', type: 'string' },
                    { name: 'label_es', title: 'Label (Es)', type: 'string' },
                    { name: 'url', title: 'URL', type: 'string' },
                ]
            }]
        },
        {
            name: 'footer',
            title: 'Footer Content',
            type: 'object',
            fields: [
                { name: 'text_en', title: 'Text (En)', type: 'string' },
                { name: 'text_es', title: 'Text (Es)', type: 'string' },
                { name: 'email', title: 'Contact Email', type: 'string' },
                {
                    name: 'social',
                    title: 'Social Links',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'url', title: 'URL', type: 'url' }
                        ]
                    }]
                }
            ]
        }
    ]
}
