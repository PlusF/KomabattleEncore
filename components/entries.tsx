import styled from "styled-components";
import { Content } from "../lib/content";

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    width: 100%;
    margin-top: 3rem;
`;

const StyledCard = styled.div`
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: 20rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #ccc;
    margin: 0.5rem;
`;

const StyledName = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;

const StyledCircle = styled.p`
    font-size: 1.0rem;
`;

function EntryCard ({ dancer }: { dancer: Content }) {
    return (
        <StyledCard>
            <StyledName>{dancer.name} {dancer.rep != '' && 'rep: ' + dancer.rep}</StyledName>
            <StyledCircle>{dancer.circle} {dancer.grade}</StyledCircle>
        </StyledCard>
    );
}

export { FlexContainer, EntryCard }
