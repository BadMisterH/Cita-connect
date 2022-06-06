import React, { useEffect, useState } from 'react'
import { Deconnexion, ConnexionEffectue } from './pages/components/Navigation'
import {firebase} from './firebase'


const AutoNav = () => {
    const [UtilisateurCourant, setUtilisateurCourant ] = useState(null);

    const GestionnaireUtilisateur = user => user ? setUtilisateurCourant(user) : setUtilisateurCourant(null);

        useEffect(
            () =>
            firebase.auth().onAuthStateChanged(user => GestionnaireUtilisateur(user)), []
        )
    

    return <>{UtilisateurCourant ? <ConnexionEffectue/> : <Deconnexion/>}</>
}

export default AutoNav;