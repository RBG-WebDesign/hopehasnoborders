export default {
    name: 'banner',
    title: '🚨 Emergency Banner',
    type: 'document',
    fields: [
        { name: 'enabled', title: 'Show Banner?', type: 'boolean', initialValue: false },
        { name: 'tone', title: 'Tone', type: 'string', options: { list: ['emergency', 'informational'] } },
        { name: 'message_en', title: 'Message (En)', type: 'string' },
        { name: 'message_es', title: 'Message (Es)', type: 'string' },
        { name: 'btn_en', title: 'Button Label (En)', type: 'string' },
        { name: 'btn_es', title: 'Button Label (Es)', type: 'string' },
        { name: 'link', title: 'Link Destination', type: 'string' },
    ]
}
