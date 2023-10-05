import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  NotoSansJP300,
  CinzelDecorative400,
  ZenKakuGothicAntique400,
  Detail,
} from '../components/sharedstyles'
import PageCards from '../components/cards'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Komabattle Encore</title>
        <meta name="description" content="Komabattle Encore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title className={CinzelDecorative400.className}>
          KOMABATTLE Encore
        </Title>

        <Description className={NotoSansJP300.className}>
            毎年11月、駒場祭の季節に開催される「KOMABATTLE」。
            <br/>
            2023年はOBG Edition 「KOMABATTLE Encore」を開催します。
        </Description>

        <Detail className={ZenKakuGothicAntique400.className}>
              12/16 16:30 ~ 20:30<br/>
              ノア学芸大学スタジオ 7st<br/>
              1on1 フルトーナメント
        </Detail>

        <PageCards />
      </Main>
    </Container>
  )
}
