import Link from "next/link";
import styled from "styled-components";
import { CinzelDecorative400 } from "./sharedstyles";

const StyledHeader = styled.header`
    font-size: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    height: 5rem;
    background-color: #111;
    color: #fff;
`;

const StyledP = styled.p`
    font-size: 2rem;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Link href='/'>
                <StyledP className={CinzelDecorative400.className}>
                    KOMABATTLE Encore
                </StyledP>
            </Link>
        </StyledHeader>
    );
}
