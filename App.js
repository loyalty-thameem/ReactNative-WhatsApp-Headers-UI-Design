import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Tabs, Tab, TabHeading, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import { StatusBar } from 'react-native';
import AppStyles from './AppStyles';
import Status from './screens/Status'
import Chats from './screens/Chats';
import Calls from './screens/Calls';
import Camera from './screens/Camera';



export default class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      StatusBar.setBackgroundColor("#128C7E")
    }, 100
    )
  }
  render() {
    return (
      <Container>
        <Header noLeft style={AppStyles.headerBackgroundColor}>
          <Body>
            <Text style={AppStyles.appTitle}>
              WhatsApp
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button transparent>
              <Icon type="MaterialIcons" name="more-vert" />
            </Button>
          </Right>
        </Header>
        <Tabs initialPage={1}
          tabBarBackgroundColor='#075E54'
          tabContainerStyle={{ elevation: 0 }}
          tabBarUnderlineStyle={AppStyles.tabBarUnderline}>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#075E54' }}>
              <Icon name="photo-camera" type='MaterialIcons' />
            </TabHeading>
          }>
            <Camera />

          </Tab>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#075E54' }}>
              <Text style={AppStyles.tabsText}>Chats</Text>
              <Badge style={AppStyles.badge}>
                <Text style={AppStyles.badgeText}>7
                </Text>
              </Badge>
            </TabHeading>
          }>
            <Chats />


          </Tab>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#075E54' }}>
              <Text style={AppStyles.tabsText}>Status</Text>
            </TabHeading>
          }>
            <Status />
          </Tab>

          <Tab heading={
            <TabHeading style={{ backgroundColor: '#075E54' }}>
              <Text style={AppStyles.tabsText}>Calls</Text>
            </TabHeading>
          }>
            <Calls />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}

