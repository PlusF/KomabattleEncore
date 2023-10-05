import styled from 'styled-components'
import { Lato, Noto_Sans_JP, Cinzel_Decorative, Zen_Kaku_Gothic_Antique } from 'next/font/google'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 150vh;
`
const Main = styled.main`
  padding: 0rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

const Detail = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
`

const Lato700 = Lato({
  weight: '700',
  preload: false,
})

const NotoSansJP300 = Noto_Sans_JP({
  weight: '300',
  preload: false,
})

const CinzelDecorative400 = Cinzel_Decorative({
  weight: '400',
  preload: false,
})

const ZenKakuGothicAntique400 = Zen_Kaku_Gothic_Antique({
  weight: '400',
  preload: false,
})

export { Container, Main, Title, Description, Detail, Lato700, NotoSansJP300, CinzelDecorative400, ZenKakuGothicAntique400 }
