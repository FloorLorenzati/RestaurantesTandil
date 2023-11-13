import React from 'react'
import { View, Text } from 'react-native'
import { style } from './ChangeDisplayNameForm.style'
import { Button, Input } from 'react-native-elements'
import { useFormik } from 'formik'
import { getAuth, updateProfile } from 'firebase/auth'
import Toast from 'react-native-toast-message'
import { initialValues, validationSchema } from './ChangeDisplayNameForm.data'

export function ChangeDisplayNameForm(props) {
    const { onClose,onReload } = props;

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const { displayName } = formValue;
                const currentUser = getAuth().currentUser;
                await updateProfile(currentUser, { displayName: displayName });
                onReload();
                onClose();
            } catch (error) {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Error al cambiar el nombre y apellido.'
                })
            }
        }
    });

    return (
        <View style={style.content}>
            <Input
                placeholder='Nombre y apellido'
                rightIcon={{
                    type: 'material-community',
                    name: 'account-circle-outline',
                    color: '#c2c2c2'
                }}
                onChangeText={(text) => formik.setFieldValue('displayName', text)}
                errorMessage={formik.errors.displayName}
            />
            <Button
                title='Cambiar nombre y apellido'
                containerStyle={style.btnContainer}
                buttonStyle={style.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}