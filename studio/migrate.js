const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

const client = createClient({
    projectId: 'fnj6du1o',
    dataset: 'production',
    apiVersion: '2023-01-01',
    token: process.argv[2],
    useCdn: false,
})

const migrateHome = async () => {
    try {
        const homePath = path.resolve(__dirname, '../src/_data/home.json')
        const homeData = JSON.parse(fs.readFileSync(homePath, 'utf8'))

        // Generate unique keys for list items
        const servicesList = (homeData.services.list || []).map((item, index) => ({
            _key: `service-${index}`,
            _type: 'object',
            ...item
        }))

        const doc = {
            _id: 'home',
            _type: 'home',
            hero: homeData.hero || {},
            mission_video: homeData.mission_video || {},
            services: {
                list: servicesList
            }
        }
        const res = await client.createOrReplace(doc)
        console.log('Home migrated:', res._id)
    } catch (err) {
        console.error('Home migration error:', err.message)
    }
}

const migrateBanner = async () => {
    try {
        const bannerPath = path.resolve(__dirname, '../src/_data/banner.json')
        if (fs.existsSync(bannerPath)) {
            const bannerData = JSON.parse(fs.readFileSync(bannerPath, 'utf8'))
            const doc = {
                _id: 'banner',
                _type: 'banner',
                ...bannerData
            }
            const res = await client.createOrReplace(doc)
            console.log('Banner migrated:', res._id)
        }
    } catch (err) {
        console.error('Banner migration error:', err.message)
    }
}

const migrateNav = async () => {
    try {
        const i18nPath = path.resolve(__dirname, '../src/_data/i18n.json')
        const i18nData = JSON.parse(fs.readFileSync(i18nPath, 'utf8'))

        const menuList = (i18nData.menu || []).map((item, index) => ({
            _key: `menu-${index}`,
            ...item
        }))

        const socialList = (i18nData.footer && i18nData.footer.social || []).map((item, index) => ({
            _key: `soc-${index}`,
            ...item
        }))

        const doc = {
            _id: 'navigation',
            _type: 'navigation',
            menu: menuList,
            footer: {
                ...(i18nData.footer || {}),
                social: socialList
            }
        }
        const res = await client.createOrReplace(doc)
        console.log('Navigation migrated:', res._id)
    } catch (err) {
        console.error('Nav migration error:', err.message)
    }
}

const run = async () => {
    await migrateHome()
    await migrateBanner()
    await migrateNav()
}

run()
