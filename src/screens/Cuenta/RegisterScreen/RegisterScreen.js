import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { RegisterForm } from '../../../components/Auth'
import { style } from './RegisterScreen.style'

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image 
      source={require('../../../../assets/img/LogoRestoTandil.jpg')} 
      style={style.img} 
      />

      <View style={style.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>




  )
}