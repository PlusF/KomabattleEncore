import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background-color: #111;
    color: #fff;
`;

export default function Footer() {
    return (
        <StyledFooter>
            Contact:<a href='mailto: rkaneda896@gmail.com' style={{marginLeft: '0.25rem'}}>rkaneda896@gmail.com</a>
        </StyledFooter>
    );
}
