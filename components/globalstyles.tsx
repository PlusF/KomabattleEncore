import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: `'Cinzel Decorative'`,
        body: `'Roboto'`,
        name: `'Zen Old Mincho'`,
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: `'Cinzel Decorative'`,
                padding: '3rem 0',
                textAlign: 'center',
            },
        },
        Text: {
            baseStyle: {
                fontFamily: `'Noto Sans JP'`,
            },
        }
    }
})

export { theme }