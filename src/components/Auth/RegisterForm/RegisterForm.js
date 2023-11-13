import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { initialValues, validationSchema } from './RegisterForm.data'
import Toast from 'react-native-toast-message'
import { screen } from '../../../utils'
import { style } from './RegisterForm.style'

export function RegisterForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
        navigation.navigate(screen.cuenta.cuenta)
      } catch (error) {
        Toast.show({
        type:'error',
        position:'bottom',
        text1:'Error al registrarse, vuelva a intentarlo.'
        })
      }
    }
  })

  const showHiddenPassword = () => setShowPassword(prevState => !prevState)
  const showHiddenRepeatPassword = () => setShowRepeatPassword(prevState => !prevState)


  return (
    <View style={style.content}>
      <Input
        placeholder='Correo electronico'
        containerStyle={style.input}
        rightIcon={
          <Icon
            type='material-community'
            name='at'
            iconStyle={style.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />

      <Input
        placeholder='Contraseña'
        containerStyle={style.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={style.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}

      />

      <Input
        placeholder='Repetir contraseña'
        containerStyle={style.input}
        secureTextEntry={showRepeatPassword ? false : true}
        rightIcon={
          <Icon
            type='material-community'
            name={showRepeatPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={style.icon}
            onPress={showHiddenRepeatPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}

      />

      <Button
        title='Unirse'
        containerStyle={style.bntContainer}
        buttonStyle={style.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />

    </View>
  )
}