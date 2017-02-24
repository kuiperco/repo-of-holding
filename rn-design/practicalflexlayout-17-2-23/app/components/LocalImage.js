import React, { Component } from 'react'

import {
  Image,
  Dimensions
} from 'react-native'


const LocalImage = ({source, originalWidth, originalHeight, columns}) => {

  if(columns){
    var windowWidth = (Dimensions.get('window').width)/columns
    console.log(columns)
    console.log("windowWidth true: ", windowWidth)

  } else {
    var windowWidth = (Dimensions.get('window').width)
    console.log("windowWidth false: ", windowWidth)

  }
  let widthChange = (windowWidth-16)/originalWidth
  let newWidth = originalWidth * widthChange
  let newHeight = originalHeight * widthChange

  return (
    <Image source={source} style={{width: newWidth, height: newHeight}}/>
  )
}

export default LocalImage
