import Link from 'next/link'
import { Container, Main, Title, Description } from '../components/sharedstyles'
import React from 'react';
import styled from 'styled-components';
import { getContents } from '../lib/spreadsheet';
import { Content } from '../lib/content';

const BracketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  border: 1px solid #ccc;
  margin: 5px;
  background-color: ${(props: {winner: boolean}) => (props.winner ? '#4CAF50' : '#f2f2f2')};
`;

const TournamentBracket = ( { dancers }: { dancers: Content[] } ) => {
  const matchups = [];
  for (let i = 0; i < dancers.length; i += 2) {
    const match = {
      teamA: dancers[i].name,
      teamB: dancers[i + 1].name,
      winner: null,
    };
    matchups.push(match);
  }

  return (
    <BracketContainer>
      {matchups.map((match, index) => (
        <div key={index}>
          <TeamContainer winner={match.winner === match.teamA}>
            {match.teamA}
          </TeamContainer>
          <TeamContainer winner={match.winner === match.teamB}>
            {match.teamB}
          </TeamContainer>
        </div>
      ))}
    </BracketContainer>
  );
};

export default function Battle({ dancers }: { dancers: Content[] }) {
  return (
    <Container>
      <Main>
        <Title>Battles</Title>
        <Description>
            Coming soon...
        </Description>
        <Link href="/">&larr; Go Back</Link>
        {/* <TournamentBracket dancers={dancers} /> */}
      </Main>
    </Container>
  )
}

export async function getStaticProps() {
    const dancers = await getContents();
    return {
      props: { dancers },
      revalidate: 3600,
    };
}
