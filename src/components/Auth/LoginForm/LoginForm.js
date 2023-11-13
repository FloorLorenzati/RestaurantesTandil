import React, { useState } from 'react'
import { View } from 'react-native'
import { style } from './LoginForm.style'
import { Input, Icon, Button } from 'react-native-elements'
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Toast from 'react-native-toast-message';
import { screen } from '../../../utils'
import { initialValues, validationSchema } from './LoginForm.data'
import { useNavigation } from '@react-navigation/native';

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const showHiddenPassword = () => setShowPassword(prevState => !prevState)
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
                navigation.navigate(screen.cuenta.cuenta)
            } catch (error) {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Usuaio o contraseña incorrectos.'
                })
            }
        },
    });

    return (
        <View style={style.container}>
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
            <Button
                title='Iniciar sesión'
                containerStyle={style.btnContainer}
                buttonStyle={style.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}