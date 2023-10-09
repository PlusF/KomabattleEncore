import { Battle } from '../lib/dancer';
import { Button, Text } from '@chakra-ui/react';

const Tournament = ({ battle }: { battle: Battle }) => {
    const tmp32 = [];
    for (let i = 0; i < 32; i++) {
        tmp32.push(i);
    }
    return (
        <div id="tournament-scroll">
            <div id='tournament-container-1'>

                <section className='tournament-round'>
                    {battle.first.map((dancerName, index) => {
                        return (
                            <div className='player-box' key={index}>{dancerName.name}</div>
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
                    {battle.second.map((dancerName, i) => {
                        return (
                            <div className='player-box' key={i}>{dancerName.name}</div>
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
                    {battle.third.map((dancerName, i) => {
                        return (
                            <div className='player-box' key={i}>{dancerName.name}</div>
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
                            <div className='arrow'>&rarr; Quarter Finals</div>
                    )})}
                </section>
                
            </div>
        </div>
    )
}

function First2third({battle, setState}: {battle: Battle, setState: (state: number) => void}) {
    return (
        <>
        <Text>1st Round ~ 3rd Round</Text>
        <Button onClick={() => setState(0)} sx={{background: '#ffffffff', fontFamily: 'Noto Sans JP', fontWeight: 400, width: 120}}>&larr; Go back</Button>
        <Tournament battle={battle} />
        </>
    )
}

export { First2third };
