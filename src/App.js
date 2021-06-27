import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header, Image,
  List,
  Menu,
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
                <Header as="h1" size="huge" id="h1">
                  <Header.Content>The Way Home</Header.Content>
                  <Header.Subheader>
                    A rogue-like dungeon crawler
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4} floated="left">
                <Segment secondary>
                  <Header as="h4">Release Date:</Header>
                  <p>
                    2021
                  </p>
                  <Header as="h4">Platforms:</Header>
                  <p>
                    Mobile
                  </p>
                  <Header as="h4">Regular Price:</Header>
                  <p>
                    To be decided
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column width={11}>
                <Header as="h3" size="medium">
                  Description
                </Header>
                <Divider hidden />
                <p>
                  This game is a rogue-like dungeon crawler playable on mobile. Explore dungeons, gather resources, construct buildings, and follow the story. It is currently under development and is targeted for release in 2021.
                </p>


                <Header as="h3" size="medium">
                  History
                </Header>
                <p>
                  The way home은 2021년 2월 부터 개발되기 시작했습니다. 모든것들 부터 완전하게 독립되어 개발되고 있습니다. 개발자의 반려묘 마루가 주인공인 게임입니다.
                </p>


                <Header as="h3" size="medium">
                  Features
                </Header>
                <ul>
                  <li>
                    Rogue-like dungeons that are newly created every time
                  </li>
                  <li>Journey through the story</li>
                  <li>Collection of resources and artifacts</li>
                  <li>Building construction</li>
                </ul>

                <Header as="h3" size="medium">
                  Videos
                </Header>

                <Header as="h3" size="medium">
                  Images
                </Header>

                <Header as="h3" size="medium">
                  Logo
                </Header>

                <Header as="h3" size="medium">
                  About CONCODE
                </Header>
                <p>
                  CONCODE는 현재 1인 팀입니다.
                </p>

                <Header as="h3" size="medium">
                  Contact
                </Header>
                <p>
                Inquiries
                dev@concode.co

                Twitter
                https://twitter.com/concodestudio
                </p>

              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment secondary as="footer">
            <Container textAlign="center">
              <p>
                Blog template built for Semantic-UI by{" "}
                <a href="https://semantic-ui-forest.com">@Semantic-UI-Forest</a>.
              </p>
              <a href="#root">Back to top</a>
            </Container>
          </Segment>
        </div>
    );
  }
}

export default App;
