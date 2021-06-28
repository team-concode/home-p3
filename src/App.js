import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header, Image,
  Embed,
  Message,
  Segment
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Image src="/banner.png" centered/>
          <Grid container stackable>
            <Grid.Row>
              <Segment basic>
                <Image src="/LogoB.png" size="medium"/>
                <Header as="h1" size="huge">
                  <Header.Subheader>
                    A rogue-like dungeon crawler
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4} floated="left">
                <Segment secondary>
                  <Header as="h4">
                    <Header.Content>Release Date:</Header.Content>
                    <Header.Subheader>
                      2021
                    </Header.Subheader>
                  </Header>

                  <Header as="h4">
                    <Header.Content>Platforms:</Header.Content>
                    <Header.Subheader>
                      Mobile
                    </Header.Subheader>
                  </Header>

                  <Header as="h4">
                    <Header.Content>Regular Price:</Header.Content>
                    <Header.Subheader>
                      To be decided
                    </Header.Subheader>
                  </Header>

                </Segment>
              </Grid.Column>
              <Grid.Column width={11}>
                <Header as="h3" size="medium">
                  Description
                </Header>
                <Divider hidden />
                <p>
                  로그라이크 던전 크롤러 장르의 게임입니다.
                  이상한 동굴이 하나 있는 섬에 갇힌 케빈과 치즈가 집으로 돌아가기 위해 고군분투 하는 이야기 입니다.
                  매번 새롭게 생성되는 던전에서 적을 물리치고 탐험하고 자원을 수집하고 건물을 건설하세요.
                  픽셀 아트의 아기자기함과 함께 박진감 넘치는 전투를 함께 즐길 수 있습니다.
                </p>


                <Header as="h3" size="medium">
                  History
                </Header>
                <p>
                  "The Way Home"는 2021년 2월 부터 개발자의 반려묘를 주인공으로 해서 개발되기 시작했습니다. 자본을 비롯한 모든것들 부터 완전하게 독립해서 온전히 개발자가 만들고 싶은 게임에 집중하고 싶어 시작했습니다. 현재 열심히 개발중으로 2021년 말에 출시 예정입니다.
                </p>


                <Header as="h3" size="medium">
                  Features
                </Header>
                <ul>
                  <li>매번 사람이 생성한 것과 비슷한 수준의 맵이 알고리즘에 의해 자동 생성됩니다. 매번 새로운 패턴의 전투를 즐길 수 있습니다.</li>
                  <li>매 전투시마다 다른 15종 이상의 스킬들을 전략적으로 조합해서 전투를 진행합니다.</li>
                  <li>던전에서 수집한 자원들로 필요한 건물들을 건설 하고 마을을 꾸밀 수 있습니다.</li>
                  <li>픽셀아트의 따듯한 감성과 함께 빛과 그림자가 살아있는 조명효과로 현장감을 느낄 수 있습니다.</li>
                  <li>반전이 있는 매력적인 스토리를 따라가며 탐험을 계속합니다.</li>
                </ul>

                <Header as="h3" size="medium">
                  Videos
                </Header>
                <p>
                  <Embed
                      id='g2HB0Hr3B70'
                      placeholder='/Video.png'
                      source='youtube'
                  />
                </p>

                <Header as="h3" size="medium">
                  Images
                </Header>
                <Image.Group size='medium'>
                  <Image src='/screenshots/1.png' />
                  <Image src='/screenshots/2.png' />
                  <Image src='/screenshots/3.png' />
                  <Image src='/screenshots/4.png' />
                  <Image src='/screenshots/5.png' />
                  <Image src='/screenshots/6.png' />
                  <Image src='/screenshots/7.png' />
                  <Image src='/screenshots/8.png' />
                  <Image src='/screenshots/9.png' />
                  <Image src='/screenshots/10.png' />
                  <Image src='/screenshots/11.png' />
                  <Image src='/screenshots/12.png' />
                  <Image src='/screenshots/13.png' />
                  <Image src='/screenshots/14.png' />
                  <Image src='/screenshots/15.png' />
                  <Image src='/screenshots/16.png' />
                </Image.Group>

                <Header as="h3" size="medium">
                  Icon, Logo and Illustration
                </Header>
                <p>
                  <Message info size="small">
                    <a href="/images.zip">Download images (3.9MB)</a>
                  </Message>
                  <Image src="/IconR.png" size="small"/>
                </p>

                <Header as="h3" size="medium">
                  About CONCODE
                </Header>
                <p>
                  CONCODE는 현재 1인 팀입니다. 프로그래머 출신의 개발자가 "The Way Home"를 만들고 있습니다. 필요한 아트 에셋은 직접 그리거나 구매하기도 하고 혹은 주변분들이 도와주시기도 합니다.
                </p>

                <Header as="h3" size="medium">
                  Contact
                </Header>
                <p>
                  <Header as="h4" size='small'>
                    <Header.Content>Inquiries</Header.Content>
                    <Header.Subheader>
                      <a href="mailto:dev@concode.co">dev@concode.co</a>
                    </Header.Subheader>
                  </Header>

                  <Header as="h4" size='small'>
                    <Header.Content>Twitter</Header.Content>
                    <Header.Subheader>
                      <a href="https://twitter.com/concodestudio">https://twitter.com/concodestudio</a>
                    </Header.Subheader>
                  </Header>


                  <Header as="h4" size='small'>
                    <Header.Content>itch.io</Header.Content>
                    <Header.Subheader>
                      <a href="https://concode-studio.itch.io/the-way-home">https://concode-studio.itch.io/the-way-home</a>
                    </Header.Subheader>
                  </Header>


                </p>

              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment secondary as="footer" className="footer">
            <Container textAlign="center">
              <p>
                Copyright{" "}
                <a href="https://concode.co">@CONCODE</a>
              </p>
            </Container>
          </Segment>
        </div>
    );
  }
}

export default App;
