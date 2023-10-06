import type { AppProps } from 'next/app'
import { Center, ChakraProvider, VStack } from '@chakra-ui/react'
import { theme } from '../components/globalstyles'
import { Header } from '../components/header'
import Footer from '../components/footer'
import '@fontsource/cinzel-decorative'
import '@fontsource/roboto'
import '@fontsource/noto-sans-jp'
import '@fontsource/zen-kaku-gothic-antique'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Header />
                <Center>
                    <VStack>
                        <Component {...pageProps} />
                    </VStack>
                </Center>
            <Footer />
        </ChakraProvider>
    )
}
