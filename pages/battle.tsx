import Link from 'next/link'
import React from 'react';
import { getBattle } from '../lib/spreadsheet';
import { Battle } from '../lib/dancer';
import { Heading } from '@chakra-ui/react';
import { StyledButton } from '../components/styledbutton';
import { First2third } from '../components/first2third';
import { Quarter2final } from '../components/quarter2final';

function Buttons({ setState }: { setState: (state: number) => void }) {
    return (
        <>
        <StyledButton onClick={() => setState(1)}>1st~ 3rd Round</StyledButton>
        <StyledButton onClick={() => setState(2)}>Quarter Finals ~ Final</StyledButton>
        <Link href="/">&larr; Go Back</Link>
        </>
    )
}


export default function Battle({ battle }: { battle: Battle }) {
    const [state, setState] = React.useState(0);
    // 0: Home
    // 1: first round ~ third round
    // 2: quarter finals ~ final
    return (
        <>
        <Heading>Battle</Heading>
        { state === 0 && <Buttons setState={setState} /> }
        { state === 1 && <First2third battle={battle} setState={setState} /> }
        { state === 2 && <Quarter2final battle={battle} setState={setState} /> }
        </>
    )
}

export async function getStaticProps() {
    const battle = await getBattle();
    return {
        props: battle? { battle } : {},
        revalidate: 10,
    };
}
