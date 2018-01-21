import React from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import styled from 'styled-components/native';

import {
  StackNavigator,
} from 'react-navigation';



const LogoContainer = styled.Image`
  width: 92%;
  height: 92%;
`;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: 'white'
  },
  touchableopacity: {
    height: '100%',
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    height: 130,
    padding: '2%',
    width: '100%'
  },
  paathlogocontainer: {
    flex: 0.5
  }
});

var paaths = {
  japjisahib: {
    base: 'japjisahib',
    name: 'Japji Sahib',
    uri: require('./assets/images/japjisahib.png')
  },
  jaapsahib: {
    base: 'jaapsahib',
    name: 'Jaap Sahib',
    uri: require('./assets/images/jaapsahib.png')
  },
  tavparsadsavaiye: {
    base: 'tavparsadsavaiye',
    name: 'Tav Parsad Savaiye',
    uri: require('./assets/images/tavparsadsavaiye.png')
  },
  chaupaisahib: {
    base: 'chaupaisahib',
    name: 'Chaupai Sahib',
    uri: require('./assets/images/chaupaisahib.png')
  },
  anandsahib: {
    base: 'anandsahib',
    name: 'Anand Sahib',
    uri: require('./assets/images/anandsahib.png')
  },
  rehraassahib: {
    base: 'rehraassahib',
    name: 'Rehraas Sahib',
    uri: require('./assets/images/rehraassahib.png')
  },
  kirtansohaila: {
    base: 'kirtansohaila',
    name: 'Kirtan Sohaila',
    uri: require('./assets/images/kirtansohaila.png')
  },
  sukhmanisahib: {
    base: 'sukhmanisahib',
    name: 'Sukhmani Sahib',
    uri: require('./assets/images/sukhmanisahib.png')
  }
}

function buttonClicked(paath, navigation) {
  navigation.navigate('SinglePaath', {"name": paath.name});
}

function PaathContainer(paath, navigation) {
  return (<View style={styles.paathlogocontainer} >
    <TouchableOpacity style={styles.touchableopacity} onPress={() => buttonClicked(paath, navigation)}>
      <LogoContainer source={paath.uri} />
    </TouchableOpacity>
  </View>);
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Gurbani Prayers'
  };
  render() {
    return (

      <View style={styles.main}>

        <View style={styles.container}>

          {PaathContainer(paaths.japjisahib, this.props.navigation)}
          {PaathContainer(paaths.jaapsahib, this.props.navigation)}

        </View>

        <View
          style={styles.container}>

          {PaathContainer(paaths.tavparsadsavaiye, this.props.navigation)}
          {PaathContainer(paaths.chaupaisahib, this.props.navigation)}

        </View>

        <View style={styles.container}>

          {PaathContainer(paaths.anandsahib, this.props.navigation)}
          {PaathContainer(paaths.rehraassahib, this.props.navigation)}

        </View>

        <View
          style={styles.container}>

          {PaathContainer(paaths.kirtansohaila, this.props.navigation)}
          {PaathContainer(paaths.sukhmanisahib, this.props.navigation)}

        </View>

      </View>
    );
  }
}

class SinglePaath extends React.Component {
  static navigationOptions = {
    header: 'SinglePaath'
  };

  render() {
    return (
      <Text></Text>
    )
  }
}

SinglePaath.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
  };
};

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  SinglePaath: {
    screen: SinglePaath,
  },
});
