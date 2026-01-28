import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Balaji Enterprise',
        short_name: 'Balaji Honey',
        description: 'Premium Organic Honey from Gir Forest',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFFBF0',
        theme_color: '#FFFBF0',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
