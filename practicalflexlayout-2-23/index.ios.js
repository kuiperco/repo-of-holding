import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import Pin from './app/components/Pin'

let windowwidth = Dimensions.get('window').width;
let columnCount = 2

export default class practicalFlexLayout extends Component {
  constructor(props){
    super(props)
    this.state = {
      columns: columnCount,
      pin : {
        harley: {
          imagesource: require('./app/assets/images/harley.jpg'),
          originalHeight: 1199,
          originalWidth: 800
        },
        ange: {
          imagesource: require('./app/assets/images/ange.png'),
          originalHeight: 667,
          originalWidth: 1000
        },
        ivy: {
          imagesource: require('./app/assets/images/ivy.jpg'),
          originalHeight: 2048,
          originalWidth: 1366
        },
        harley2: {
          imagesource: require('./app/assets/images/harley.jpg'),
          originalHeight: 1199,
          originalWidth: 800
        },
        ange2: {
          imagesource: require('./app/assets/images/ange.png'),
          originalHeight: 667,
          originalWidth: 1000
        },
        ivy2: {
          imagesource: require('./app/assets/images/ivy.jpg'),
          originalHeight: 2048,
          originalWidth: 1366
        },
        harley3: {
          imagesource: require('./app/assets/images/harley.jpg'),
          originalHeight: 1199,
          originalWidth: 800
        },
        ange3: {
          imagesource: require('./app/assets/images/ange.png'),
          originalHeight: 667,
          originalWidth: 1000
        },
        ivy3: {
          imagesource: require('./app/assets/images/ivy.jpg'),
          originalHeight: 2048,
          originalWidth: 1366
        }
      }
    }
  }

  // receive pins
  // loop over with index
  // create two arrays
  // if index /2 = 0 send to second array
  // render arrays into columns

  render() {

    var pins = Object.entries(this.state.pin)
    var columnOne =[], columnTwo=[]

    for (var i=0;i<pins.length;i++){
        if ((i+2)%2==0) {
            columnOne.push(pins[i]);
        }
        else {
            columnTwo.push(pins[i]);
        }
    }
    columnMaker = function(content, key){
      if(content.length > 0){
        console.log("CONTENT OBJECTS: ", content)
        return (
          <Pin key={key} pinsource={content[1]} columns={this.state.columns}/>
        )
      }
    }

  //  columnMaker(columnOne)

    console.log("entries: ", Object.entries(this.state.pin))
    console.log ("columnOne: ", columnOne)
    console.log ("columnTwo: ", columnTwo)
    console.log("width: ", windowwidth/2)
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.pincontainer}>
          {columnOne.map(columnMaker, this)}

        </View>
        <View style={styles.pincontainer}>
          {columnTwo.map(columnMaker, this)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {

    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pincontainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    alignItems: 'flex-start'
  }
});

AppRegistry.registerComponent('practicalFlexLayout', () => practicalFlexLayout);
