import NextLink from 'next/link'
import { Box, Card } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const boxStyle = {
    margin: '1rem 0',
}

const cardStyle = {
    fontSize: {
        base: '1.2rem',
        md: '1.5rem'
    },
    fontWeight: '100',
    textAlign: 'left',
    padding: '1.2rem 1.5rem',
    width: {
        base: '16rem',
        md: '20rem',
    },
}

function ExternalLinkCard({ href, name }) {
    return (
        <Box sx={boxStyle}>
            <Link href={href} isExternal>
                <Card sx={cardStyle}>
                    {name} &rarr;
                </Card>
            </Link>
        </Box>
    )
}

function NextLinkCard({ href, name }) {
  return (
    <Box sx={boxStyle}>
        <NextLink href={href}>
        <Card sx={cardStyle}>
            {name} &rarr;
        </Card>
        </NextLink> 
    </Box>
  )
}

function LinkCard({ href, name, isExternal=false }) {
    return (
        <>
            {isExternal &&<ExternalLinkCard href={href} name={name} />}
            {!isExternal && <NextLinkCard href={href} name={name} />}
        </>
    )
}

export { LinkCard }
