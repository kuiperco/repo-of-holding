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

let windowwidth = Dimensions.get('window').width

export default class PinContent extends Component {
  constructor(props){
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.newheight !== this.props.newheight) {
     return true
    }
  }

  render(){
    console.log("props: ",this.props.columns)
    var columnCount = this.props.columns;
    windowSize = function() {
      if(columnCount){
        return {
          width: (windowwidth/columnCount)-50
        }
      }
   }



   var newPinHeight = this.props.newheight
   pinHeight = function(){
     if(newPinHeight){
       console.log("PINHEIGHT")
       return
         newPinHeight

     }else{
       console.log("PINHEIGHT FALSE")
       return null
     }
   }

  console.log("PIN CONTENT PROPS: ", this.props)
    return (

      <View style={[styles.PinContainer, {width:windowwidth/this.props.columns, height: pinHeight()}]}>

        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <UtilityNavButton icon="Back"/>
            <UtilityNavButton icon="Heart"/>
            <UtilityNavButton icon="Share"/>
            <UtilityNavButton icon="More"/>
          </View>
          <View style={styles.PinButtonContainer}>
            <Button red icon text="Save"/>
          </View>
        </View>

        <View style={styles.PinContent}>
          <LocalImage
            source={this.props.source}
            originalWidth={this.props.originalWidth}
            originalHeight={this.props.originalHeight}
            columns={this.props.columns}
            />
        </View>

        <View style={[styles.PinMeta]}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
          </View>
          <View style={styles.PinButtonContainer}>
            <Button text="Watch"/>
          </View>
        </View>

        <View style={[styles.PinUser, windowSize()]}>
          <View style={styles.PinUserAvatar}>

          </View>
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>User Name </Text>saved to<Text style={styles.TextBold}> Space</Text>
            </Text>
            <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
          </View>
        </View>

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
