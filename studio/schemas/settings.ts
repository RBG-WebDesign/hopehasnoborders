export default {
    name: 'settings',
    title: '⚙️ Site Settings',
    type: 'document',
    fields: [
        { name: 'seo_title_en', title: 'Default SEO Title (En)', type: 'string' },
        { name: 'seo_title_es', title: 'Default SEO Title (Es)', type: 'string' },
        { name: 'site_url', title: 'Site URL', type: 'url' },
    ]
}
