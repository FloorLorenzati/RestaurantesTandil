import React from 'react'
import { View, ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils'
import { style } from './LoginScreen.style';
import { LoginForm } from '../../../components/Auth'

export function LoginScreen() {

  const navigation = useNavigation();


  const goToRegister = () => {
    navigation.navigate(screen.cuenta.registrarse)
  }

  return (
    <ScrollView>
      <Image source={require('../../../../assets/img/LogoRestoTandil.jpg')} style={style.img} />

      <View style={style.content}>
        <LoginForm />
        <Text style={style.textRegister}>
          Aún no tienes cuenta <Text style={style.btnRegister} onPress={goToRegister}>Regristarse</Text>
        </Text>
      </View>

    </ScrollView>
  )
}