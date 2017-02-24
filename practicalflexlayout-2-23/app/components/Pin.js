import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'

import UtilityNavButton from './UtilityNavButton'
import Button from './Button'
import LocalImage from './LocalImage'
import PinContent from './PinContent'

let windowwidth = Dimensions.get('window').width

export default class Pin extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    var columnCount = this.props.columns;
    windowSize = function() {
      if(columnCount){
        return {
          width: (windowwidth/columnCount)-50
        }
      }
   }
    return (

      <View style={[styles.PinContainer, {width:windowwidth/this.props.columns}, this.changeheight ]} onLayout={(event) => {
          this.setState({
              height: event.nativeEvent.layout.height
          })
        }
      }>

      <PinContent
        source={this.props.pinsource.imagesource}
        originalWidth={this.props.pinsource.originalWidth}
        originalHeight={this.props.pinsource.originalHeight}
        columns={this.props.columns}
        newheight={this.state.height}
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  PinContainer: {

  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    minHeight: 50,
    padding: 8
  },
  UtilityNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'space-between',
    width: 60
  },
  PinButtonText: {
    color: 'white'
  },
  PinButtonContainer: {
    alignItems: 'flex-end'
  },
  PinContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  ImagePlaceholder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  PinMeta: {
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  PinMetaTextContainer: {

  },
  UtilityButton: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center'
  },
  UtilityButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },
  PinUserContainer: {

  },
  PinUser: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginRight: 8
  },
  TextBold: {
    fontWeight: 'bold',

  }
})
