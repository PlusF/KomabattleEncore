import { getContents } from '../lib/spreadsheet';
import { Dancer } from '../lib/dancer';
import {
    Container, 
    HStack, 
    Heading,
    Text,
} from '@chakra-ui/react';
import { EntryCard } from '../components/entrycard';
import Link from 'next/link';

const textStyle = {
    fontSize: {
        base: '0.7rem',
        md: '0.9rem'
    },
    fontWeight: '400',
}

export default function EntryList({ dancers }: { dancers: Dancer[] }) {
    return (
        <>
        <Heading>
            Entry List
            <Text sx={textStyle}>リストへの反映には最大1時間かかります</Text>
        </Heading>
            <Container>
                {dancers.map((dancer, i) => (
                    <HStack key={i}>
                        <Text>{i}</Text>
                        <EntryCard dancer={dancer} />
                    </HStack>
                ))}
            </Container>
            <Link href="/">&larr; Go Back</Link>
        </>
    );
}

export async function getStaticProps() {
    const dancers = await getContents();
    return {
        props: { dancers },
        revalidate: 3600,
    };
}
