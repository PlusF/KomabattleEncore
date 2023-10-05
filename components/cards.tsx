import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`
const StyledLink = styled.a`
  padding: 1.5rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

const LinkCard = ({ href, name }) => (
  <StyledLink href={href}>{name}</StyledLink>
)

export default function PageCards() {
  return (
    <FlexContainer>
      <LinkCard href='https://docs.google.com/forms/d/e/1FAIpQLSf5foCcm52s-XhBe-ll9ExVveJhrYQ7BSl23RDWt9EXt4hrnA/viewform?usp=sharing' name='Entry &rarr;' />
      <LinkCard href='/entrylist' name='Entry List &rarr;' />
      <LinkCard href="/battle" name="Battle Tournament &rarr;" />
    </FlexContainer>
  )
}
