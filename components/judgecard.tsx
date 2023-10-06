import { 
    Card, 
    HStack, 
    VStack,
    Image,
    Text,
    Heading,
} from "@chakra-ui/react";

type Judge = {
    name: string;
    src: string;
    description: string;
}

const stackStyle = {
    padding: '2.5rem 0 0 0 ',
}

const headingStyle = {
    fontSize: {
        base: '1rem',
        md: '1.5rem'
    },
    padding: '0'
}

const cardStyle = {
    width: {
        base: '6rem',
        md: '8rem'
    },
    height: {
        base: '9rem',
        md: '12rem'
    },
    boxShadow: '0 0 0 0',
    variant: 'outline',
}

const imageStyle = {
    width: '100%'
}

const nameStyle = {
    fontSize: {
        base: '0.8rem',
        md: '1rem'
    },
    fontFamily: 'Zen Old Mincho',
    fontWeight: '400',
    textAlign: 'center',
}

const descriptionStyle = {
    fontSize: {
        base: '0.2rem',
        md: '0.3rem'
    },
    textAlign: 'center',
}

function JudgeCard(props: { judge: Judge }) {
    return (
        <Card sx={cardStyle}>
            <Image src={props.judge.src} sx={imageStyle} />
            <Text sx={nameStyle}>{props.judge.name}</Text>
            <Text sx={descriptionStyle}>{props.judge.description}</Text>
        </Card>
    )
}

function Judges() {
    const judges: Judge[] = [
        {
            name: '軍犬Z',
            src: 'tmp.jpg',
            description: 'Mighty Beat Bation/Free Front'
        },
        {
            name: 'shishiyo is green',
            src: 'judge2.jpg',
            description: ''
        },
        {
            name: 'Amazon',
            src: 'tmp.jpg',
            description: 'LunaticK/Occhi Union'
        }
    ]

    const dj: Judge = {
        name: '諭吉',
        src: 'dj.jpg',
        description: ''
    }

    return (
        <VStack sx={stackStyle}>
            <Heading sx={headingStyle}>Judges</Heading>
            <HStack>
                <JudgeCard judge={judges[0]} />
                <JudgeCard judge={judges[1]} />
                <JudgeCard judge={judges[2]} />
            </HStack>
            <Heading sx={headingStyle}>DJ</Heading>
            <JudgeCard judge={dj} />
        </VStack>
    )
}

export { Judges }
