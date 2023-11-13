import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { InfoUser, CuentaOptions } from '../../../components/Cuenta'
import { style } from './UserLoginScreen.style'
import { getAuth, signOut } from 'firebase/auth'
import { LoadingModal } from '../../../components/'


export function UserLoginScreen() {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);

  const onReload = () => setReload((prevSatate) => !prevSatate)

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth)
  }

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <CuentaOptions onReload={onReload} />
      <Button
        title='Cerrar Sesión'
        buttonStyle={style.cerrarSesion}
        titleStyle={style.txtStyle}
        onPress={logout}
      />
      <LoadingModal show={loading} text={loadingText} />
    </View>
  )
}