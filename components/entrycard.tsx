import { 
    Card, 
    CardBody, 
    CardHeader, 
    Heading, 
    HStack, 
    Spacer, 
    Text
} from '@chakra-ui/react'
import { Dancer } from '../lib/dancer'
import { theme } from './globalstyles'

const cardStyle = {
    margin: '1rem 0',
    backgroundColor: '#222',
    color: '#fff',
    padding: '1.2rem'
}

const cardHeaderStyle = {
    textAlign: 'left',
    padding: '1.2rem 1.5rem',
    width: '16rem',
}

const dancerNameStyle = {
    fontFamily: theme.fonts.heading,
    fontSize: '1.5rem',
    fontWeight: '400',
}

const cardBodyStyle = {
    textAlign: 'right',
    padding: '1.2rem 1.5rem',
    display: 'flex',
    alignItems: 'flex-end',
}

const cardBodyTextStyle = {
    width: {
        base: '5rem',
    }
}

function EntryCard({dancer}: {dancer: Dancer}) {
    return (
        <Card key={dancer.name} sx={cardStyle}>
        <HStack>
            <CardHeader sx={cardHeaderStyle}>
                <Text sx={dancerNameStyle}>{dancer.name}</Text>
                <Text>{dancer.rep}</Text>
            </CardHeader>
            <Spacer />
            <CardBody sx={cardBodyStyle}>
                <Text sx={cardBodyTextStyle}>{dancer.circle} {dancer.grade}</Text>
            </CardBody>
        </HStack>
        </Card>
    )
}

export { EntryCard }