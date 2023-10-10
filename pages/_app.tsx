import type { AppProps } from 'next/app'
import { Center, ChakraProvider, VStack } from '@chakra-ui/react'
import { theme } from '../components/globalstyles'
import Back2Top from '../components/back2top'
import Header from '../components/header'
import Footer from '../components/footer'
import '@fontsource/cinzel-decorative'
import '@fontsource/roboto'
import '@fontsource/noto-sans-jp'
import '@fontsource/zen-kaku-gothic-antique'
import '@fontsource/zen-old-mincho'
import './tournament.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Header />
                <Center>
                    <VStack>
                        <Component {...pageProps} />
                    </VStack>
                </Center>
            <Back2Top />
            <Footer />
        </ChakraProvider>
    )
}
