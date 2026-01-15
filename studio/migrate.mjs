import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

        // Sanitize Services (ensure _key is there if needed, usually generated on insert, but explicit is safer)
        const servicesList = homeData.services.list.map((item, index) => ({
            _key: `service-${index}`,
            _type: 'object',
            ...item
        }))

        const doc = {
            _id: 'home',
            _type: 'home',
            hero: {
                ...homeData.hero,
                // Ensure field names match schema exactly. 
                // My home.json used 'title_en' etc, which matches schema.
            },
            mission_video: homeData.mission_video,
            services: {
                list: servicesList
            }
            // Add CTA, Needs, etc as needed if schema defines them
        }
        const res = await client.createOrReplace(doc)
        console.log('Home migrated:', res._id)
    } catch (err) {
        console.error('Home migration failed:', err.message)
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
        } else {
            console.log('Banner file not found, skipping.')
        }
    } catch (err) {
        console.error('Banner migration failed:', err.message)
    }
}

const migrateNav = async () => {
    try {
        const i18nPath = path.resolve(__dirname, '../src/_data/i18n.json')
        const i18nData = JSON.parse(fs.readFileSync(i18nPath, 'utf8'))

        const menuList = i18nData.menu.map((item, index) => ({
            _key: `menu-${index}`,
            ...item
        }))

        const socialList = i18nData.footer.social.map((item, index) => ({
            _key: `soc-${index}`,
            ...item
        }))

        const doc = {
            _id: 'navigation',
            _type: 'navigation',
            menu: menuList,
            footer: {
                ...i18nData.footer,
                social: socialList
            }
        }
        const res = await client.createOrReplace(doc)
        console.log('Navigation migrated:', res._id)
    } catch (err) {
        console.error('Nav migration failed:', err.message)
    }
}

const run = async () => {
    await migrateHome()
    await migrateBanner()
    await migrateNav()
}

run()
