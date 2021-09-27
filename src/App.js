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
import sbService from "./Services/StringBundleService";

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
                      <a href="https://play.google.com/store/apps/details?id=io.concode.p3">Android</a>, iOS
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
                  {sbService.get('desc')}
                </p>


                <Header as="h3" size="medium">
                  History
                </Header>
                <p>
                  {sbService.get('history')}
                </p>


                <Header as="h3" size="medium">
                  Features
                </Header>
                <ul>
                  <li>{sbService.get('feature1')}</li>
                  <li>{sbService.get('feature2')}</li>
                  <li>{sbService.get('feature3')}</li>
                  <li>{sbService.get('feature4')}</li>
                  <li>{sbService.get('feature5')}</li>
                </ul>

                <Header as="h3" size="medium">
                  Awards
                </Header>
                <ul>
                  <li><a href="https://events.withgoogle.com/indie-games-festival-korea-2021/2021-top-3-users-choice/">Google Indie Game Festival Korea 2021 Top3</a></li>
                </ul>

                <Header as="h3" size="medium">
                  Videos
                </Header>
                <p>
                  <Message info size="small">
                    <a href="/video.mov.zip">Download video (52.6MB)</a>
                  </Message>
                  <Embed
                      id='g2HB0Hr3B70'
                      placeholder='/Video.png'
                      source='youtube'
                  />
                </p>

                <Header as="h3" size="medium">
                  Images
                </Header>
                <Message info size="small">
                  <a href="/screenshots.zip">Download screenshots (7.3MB)</a>
                </Message>
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
                  <Image src="/Icon512.png" size="small"/>
                  <Message info size="small">
                    <a href="/images.zip">Download logo (4MB)</a>
                  </Message>
                </p>

                <Header as="h3" size="medium">
                  About CONCODE
                </Header>
                <p>
                  {sbService.get('about')}
                </p>
                <p>
                  <Image src="/concode_w.png" size="small"/>
                  <Message info size="small">
                    <a href="/concode.zip">Download CI (0.1MB)</a>
                  </Message>
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
              <p>
                <a href="" onClick={()=>sbService.changeLang("ko")}>KO</a> | <a href="" onClick={()=>sbService.changeLang("en")}>EN</a>
              </p>
            </Container>
          </Segment>
        </div>
    );
  }
}

export default App;
