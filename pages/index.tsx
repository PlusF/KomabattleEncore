import Head from 'next/head'
import {
    Box,
    Heading,
} from '@chakra-ui/react'
import { LinkCard } from '../components/linkcard'
import { Description } from '../components/description'
import { Detail } from '../components/detail'
import { Judges } from '../components/judgecard'

export default function Home() {
return (
    <>
    <Head>
        <title>Komabattle Encore</title>
        <meta name="description" content="Komabattle Encore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <Heading fontFamily='Cinzel Decorative'>
        KOMABATTLE Encore
    </Heading>

    <Description />
    <Detail />

    <Judges />

    <Box>
        <LinkCard href='https://docs.google.com/forms/d/e/1FAIpQLSf5foCcm52s-XhBe-ll9ExVveJhrYQ7BSl23RDWt9EXt4hrnA/viewform?usp=sharing' name='Entry' isExternal />
        <LinkCard href='/entrylist' name='Entry List' />
        <LinkCard href="/battle" name="Tournament" />
    </Box>
    </>
)
}
