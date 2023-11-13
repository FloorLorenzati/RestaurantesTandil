import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { UserLoginScreen } from "./UserLoginScreen";
import { UserNoLogin } from "./UserNoLogin/UserNoLogin";
import { LoadingModal } from '../../components';

export function CuentaScreen() {
    const [hasLogged, setHasLogged] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true : false)
        })
    }, [])

    if (hasLogged === null) {
        return <LoadingModal show text="Cargando"/>
    }

    return hasLogged ? <UserLoginScreen /> : <UserNoLogin />
}