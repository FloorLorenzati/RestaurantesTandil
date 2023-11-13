import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { screen } from "../../utils";


export function RestauranteScreen(props) {
  const { navigation } = props;

  const irCrearRestaurante = () => {
    navigation.navigate(screen.restaurante.nuevoRestaurante);
  }
  return (
    <View>
      <Text>Ranking Screen</Text>

      <Button title="Crear Restaurante" onPress={irCrearRestaurante} />
    </View>
  )
}