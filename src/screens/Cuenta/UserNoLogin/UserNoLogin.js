import React from 'react'
import { ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {screen} from '../../../utils'
import { style } from './UserNoLogin.style'

export function UserNoLogin() {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.cuenta.login)
  }

  return (
    <ScrollView centerContent={true} style={style.contenido}>
      <Image source={require("../../../../assets/img/user-guest.png")}
        style={style.image}
      />
      <Text style={style.title}>Consulta tu perfil de Restaurantes Tandil</Text>

      <Text style={style.descripcion}>Busca y visualiza los mejores restaurantes de una forma sensilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.</Text>


      <Button title='Ver tu perfil' onPress={goToLogin} buttonStyle={style.btn}></Button>

    </ScrollView>

  )
}