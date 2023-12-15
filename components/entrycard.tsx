import { 
    Card, 
    CardBody, 
    CardHeader,
    HStack, 
    Spacer, 
    Text
} from '@chakra-ui/react'
import { Dancer } from '../lib/dancer'
import { Canceled } from './canceled'
import { theme } from './globalstyles'

const cardStyle = {
    margin: {
        base: '0.6rem',
        md: '1rem'
    },
    padding: {
        base: '0.4rem',
        md: '0.8rem',
    }
}

function getCardStyle(canceled: boolean) {
    if (canceled) {
        return {
            ...cardStyle,
            backgroundColor: '#333',
            color: '#ccc',
        }
    } else {
        return{
            ...cardStyle,
            backgroundColor: '#222',
            color: '#fff',
        }
    }
}

const cardHeaderStyle = {
    textAlign: 'left',
    width: {
        base: '8rem',
        md: '12rem',
    },
    padding: {
        base: '0.2rem 0.3rem',
        md: '0 0.5rem',
    }
}

const dancerNameStyle = {
    fontFamily: theme.fonts.name,
    fontSize: {
        base: '1rem',
        md: '1.2rem',
    },
    fontWeight: '400',
    padding: '0',
    margin: '0',
}

const repStyle = {
    fontSize: {
        base: '0.5rem',
        md: '0.8rem'
    },
    fontWeight: '200',
}

const cardBodyStyle = {
    textAlign: 'right',
}

const cardBodyTextStyle = {
    fontSize: {
        base: '0.6rem',
        md: '0.8rem',
    },
    width: {
        base: '4rem',
        md: '6rem',
    }
}

function EntryCard({dancer}: {dancer: Dancer}) {
    return (
        <Card sx={getCardStyle(dancer.canceled)}>
            {dancer.canceled ? <Canceled /> : <></>}
            <HStack>
                <CardHeader sx={cardHeaderStyle}>
                    <Text sx={dancerNameStyle} noOfLines={1}>{dancer.name}</Text>
                    <Text sx={repStyle} noOfLines={1}>{dancer.rep}</Text>
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