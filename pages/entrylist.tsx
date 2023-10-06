import { getContents } from '../lib/spreadsheet';
import { Dancer } from '../lib/dancer';
import {
    Container, 
    Heading,
} from '@chakra-ui/react';
import { EntryCard } from '../components/entrycard';

export default function EntryList({ dancers }: { dancers: Dancer[] }) {
    return (
        <>
        <Heading>Entry List</Heading>
            <Container>
                {dancers.map((dancer) => (
                    <EntryCard dancer={dancer} />
                ))}
            </Container>
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
