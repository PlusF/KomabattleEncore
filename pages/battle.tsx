import Link from 'next/link'
import React from 'react';
import { getContents } from '../lib/spreadsheet';
import { Dancer } from '../lib/dancer';
import { Heading, Text } from '@chakra-ui/react';

const TournamentBracket = () => {
    return (
        <article id='tournament-container'>

            <section className='tournament-round'>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
            </section>
            
            <div className="connecter">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div className="line">
                <div>
                </div><div>
                </div><div>
                </div><div>
                </div>
            </div>
            
            <section className='tournament-round' id="quarterFinals">
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
            </section>
            
            <div className="connecter" id="conn2">
                <div></div>
                <div></div>
            </div>
            
            <div className="line" id="line2">
                <div></div>
                <div></div>
            </div>
            
            <section className='tournament-round' id="semiFinals">
                <div className='player-box'>Player 1</div>
                <div className='player-box'>Player 1</div>
            </section>
            
            <div className="connecter" id="conn3">
                <div></div>
            </div>
            
            <div className="line" id="line3">
                <div></div>
            </div>
            
            <section className='tournament-round' id="final">
                <div className='player-box'>Player 1</div>
            </section>
        
        </article>
    );
};


export default function Battle({ dancers }: { dancers: Dancer[] }) {
    return (
        <>
        <Heading>Battle</Heading>
        <Text>Coming soon...</Text>
        <Link href="/">&larr; Go Back</Link>
        <TournamentBracket />
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
