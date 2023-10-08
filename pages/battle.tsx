import Link from 'next/link'
import React from 'react';
import { getContents } from '../lib/spreadsheet';
import { Dancer } from '../lib/dancer';
import { Heading, Text } from '@chakra-ui/react';

export default function Battle({ dancers }: { dancers: Dancer[] }) {
    return (
        <>
        <Heading>Battle</Heading>
        <Text>Coming soon...</Text>
        <Link href="/">&larr; Go Back</Link>
        </>
    )
}

export async function getStaticProps() {
    const dancers = await getContents();
    return {
        props: { dancers },
        revalidate: 10,
    };
}
