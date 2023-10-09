import Link from 'next/link'
import React from 'react';
import { getContents } from '../lib/spreadsheet';
import { Dancer } from '../lib/dancer';
import { Button, Heading, Text } from '@chakra-ui/react';
import { First2third } from '../components/first2third';
import { Quarter2final } from '../components/quarter2final';

const TournamentBracket = ({ dancers }: { dancers: Dancer[] }) => {
    dancers = [];
    for (let i = 0; i < 64; i++) {
        const d = {
            circle: '',
            grade: '',
            genre: '',
            name: '',
            rep: '',
            canceled: false,
        }
        dancers.push(d);
    }
    const tmp32 = [];
    for (let i = 0; i < 32; i++) {
        tmp32.push(i);
    }
    return (
            <div id="tournament-scroll">
                <div id='tournament-container'>

                    <section className='tournament-round'>
                        {dancers.map((dancer, index) => {
                            return (
                                <div className='player-box' key={index}>{dancer.name}</div>
                            )
                        })}
                    </section>
                    
                    <div className="connecter">
                        {tmp32.map((i) => {
                            return (
                                <div key={i}></div>
                            )
                        })}
                    </div>
                    
                    <div className="line">
                        {tmp32.map((i) => {
                            return (
                                <div key={i}></div>
                            )
                        })}
                    </div>
                    
                    <section className='tournament-round' id="secondRound">
                        {tmp32.map((i) => {
                            return (
                                <div className='player-box' key={i}></div>
                            )
                        })}
                    </section>
                    
                    <div className="connecter" id="conn2">
                        {tmp32.slice(0,16).map((i) => {
                            return (
                                <div key={i}></div>
                        )})}
                    </div>
                    
                    <div className="line" id="line2">
                        {tmp32.slice(0,16).map((i) => {
                            return (
                                <div key={i}></div>
                        )})}
                    </div>
                    
                    <section className='tournament-round' id="thirdRound">
                        {tmp32.slice(0,16).map((i) => {
                            return (
                                <div className='player-box' key={i}></div>
                        )})}
                    </section>
                    
                    <div className="connecter" id="conn3">
                        {tmp32.slice(0,8).map((i) => {
                            return (
                                <div key={i}></div>
                        )})}
                    </div>
                    
                    <div className="line" id="line3">
                        {tmp32.slice(0,8).map((i) => {
                            return (
                                <div key={i}></div>
                        )})}
                    </div>
                    
                    <section className='tournament-round' id="fourthRound">
                        {tmp32.slice(0,8).map((i) => {
                            return (
                                // <div className='player-box' key={i}></div>
                                <div>&rarr;</div>
                        )})}
                    </section>

                    {/* <div className="connecter" id="conn4">
                        {tmp32.slice(0,4).map((i) => {
                            return (
                                <div key={i}></div>
                        )})}
                    </div>

                    <div className="line" id="line4">
                        {tmp32.slice(0,4).map((i) => {
                            return (
                                <div key={i}></div>
                        )})}
                    </div>

                    <section className='tournament-round' id="quarterFinals">
                        {tmp32.slice(0,4).map((i) => {
                            return (
                                <div className='player-box' key={i}></div>
                        )})}
                    </section> */}
                
                </div>
            </div>
    );
};

function Buttons({ setState }: { setState: (state: number) => void }) {
    return (
        <>
        <Button onClick={() => setState(1)} sx={{background: '#ddd', fontFamily: 'Noto Sans JP', fontWeight: 400, width: 220}}>First Round ~ Third Round</Button>
        <Button onClick={() => setState(2)} sx={{background: '#ddd', fontFamily: 'Noto Sans JP', fontWeight: 400, width: 220}}>Quarter Finals ~ Final</Button>
        <Link href="/">&larr; Go Back</Link>
        </>
    )
}


export default function Battle({ dancers }: { dancers: Dancer[] }) {
    const [state, setState] = React.useState(0);
    // 0: Home
    // 1: first round ~ third round
    // 2: quarter finals ~ final
    return (
        <>
        <Heading>Battle</Heading>
        { state === 0 && <Buttons setState={setState} /> }
        { state === 1 && <First2third dancers={dancers} setState={setState} /> }
        { state === 2 && <Quarter2final dancers={dancers} setState={setState} /> }
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
