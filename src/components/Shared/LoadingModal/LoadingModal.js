import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Overlay, Text } from 'react-native-elements'
import { style } from './LoadingModal.style'

export function LoadingModal(props) {
  const { show, text } = props;

  return (
    <Overlay isVisible={show} 
    // windowBackgroundColor="rgba(0,0,0,0.5)" 
    // overlayBackgroundColor="transparent"
    overlayStyle={style.overlay}
    >
      <View style={style.view}>
        <ActivityIndicator size="large" color='#00a680'></ActivityIndicator>
        {text && <Text style={style.text}>{text}</Text>}
      </View>
    </Overlay>
  )
}

LoadingModal.defaultProps = {
  show: false,
}