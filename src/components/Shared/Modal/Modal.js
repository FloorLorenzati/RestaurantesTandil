import React from 'react'
import { style } from './Modal.style'
import { Overlay } from 'react-native-elements';

export function Modal(props) {
    const {show, close, children} = props;
  return (
    <Overlay isVisible={show} overlayStyle={style.overlay} onBackdropPress={close}>
      {children}
    </Overlay>
  )
}