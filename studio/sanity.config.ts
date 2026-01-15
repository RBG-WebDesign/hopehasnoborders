import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskStructure } from './deskStructure'

export default defineConfig({
    name: 'default',
    title: 'Hope Has No Borders',

    projectId: 'fnj6du1o',
    dataset: 'production',

    plugins: [
        structureTool({
            structure: deskStructure,
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})
