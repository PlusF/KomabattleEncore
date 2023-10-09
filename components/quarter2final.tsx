import { Button, Text } from '@chakra-ui/react';
import { Dancer } from '../lib/dancer';

const Tournament = ({ dancers }: { dancers: Dancer[] }) => {
    dancers = [];
    for (let i = 0; i < 8; i++) {
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
    const tmp4 = [];
    for (let i = 0; i < 4; i++) {
        tmp4.push(i);
    }
    return (
        <div id="tournament-scroll">
            <div id='tournament-container-2'>

                <section className='tournament-round'>
                    {dancers.map((dancer, index) => {
                        return (
                            <div className='player-box' key={index}>{dancer.name}</div>
                        )
                    })}
                </section>
                
                <div className="connecter">
                    {tmp4.map((i) => {
                        return (
                            <div key={i}></div>
                        )
                    })}
                </div>
                
                <div className="line">
                    {tmp4.map((i) => {
                        return (
                            <div key={i}></div>
                        )
                    })}
                </div>
                
                <section className='tournament-round' id="secondRound">
                    {tmp4.map((i) => {
                        return (
                            <div className='player-box' key={i}></div>
                        )
                    })}
                </section>
                
                <div className="connecter" id="conn2">
                    {tmp4.slice(0,2).map((i) => {
                        return (
                            <div key={i}></div>
                    )})}
                </div>
                
                <div className="line" id="line2">
                    {tmp4.slice(0,2).map((i) => {
                        return (
                            <div key={i}></div>
                    )})}
                </div>
                
                <section className='tournament-round' id="thirdRound">
                    {tmp4.slice(0,2).map((i) => {
                        return (
                            <div className='player-box' key={i}></div>
                    )})}
                </section>
                
                <div className="connecter" id="conn3">
                    <div></div>
                </div>
                
                <div className="line" id="line3">
                    <div></div>
                </div>
                
                <section className='tournament-round' id="fourthRound">
                    <div className='player-box'></div>
                </section>
                
            </div>
        </div>
    )
}

function Quarter2final({dancers, setState}: {dancers: Dancer[], setState: (state: number) => void}) {
    return (
        <>
        <Text>Quarter Finals ~ Final</Text>
        <Button onClick={() => setState(0)} sx={{background: '#ffffffff', fontFamily: 'Noto Sans JP', fontWeight: 400, width: 120}}>&larr; Go back</Button>
        <Tournament dancers={dancers} />
        </>
    )
}

export { Quarter2final };
