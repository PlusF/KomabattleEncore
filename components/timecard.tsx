import { 
    Card, 
    CardBody, 
    CardHeader,
    HStack, 
    Text
} from '@chakra-ui/react'
import { Content } from '../lib/dancer'
import { theme } from './globalstyles'

const cardStyle = {
    margin: {
        base: '0.3rem',
        md: '0.5rem'
    },
    padding: {
        base: '0.2rem',
        md: '0.3rem',
    }
}

const cardHeaderStyle = {
    textAlign: 'left',
    width: {
        base: '4rem',
        md: '6rem',
    },
}

const timeStyle = {
    fontFamily: theme.fonts.name,
    fontSize: {
        base: '1rem',
        md: '1.2rem',
    },
    fontWeight: '400',
    padding: '0',
    margin: '0',
}

const descriptionStyle = {
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
        base: '0.8rem',
        md: '1rem',
    },
    width: {
        base: '6rem',
        md: '8rem',
    }
}

function TimeCard({content}: {content: Content}) {
    return (
        <Card sx={cardStyle} variant='unstyled'>
            <HStack>
                <CardHeader sx={cardHeaderStyle}>
                    <Text sx={timeStyle} noOfLines={1}>{content.time}</Text>
                </CardHeader>
                <CardBody sx={cardBodyStyle}>
                    <Text sx={cardBodyTextStyle}>{content.name}</Text>
                    <Text sx={descriptionStyle} noOfLines={1}>{content.description}</Text>
                </CardBody>
            </HStack>
        </Card>
    )
}

export { TimeCard }