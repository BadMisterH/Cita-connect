import styled from "styled-components";
import Home from "../screens/HomePage"
import { useState, useEffect, ImageBackground } from "react";
// import { Checkbox } from "react-native-paper";
import {firebase} from "../../firebase";
import Styles from "../../styles/styles.scss";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";



export default function Connnexion({ navigation }) {

  
  const CheckFormulaire = Yup.object().shape({
    //LoginFromSchema
    // Prenom: Yup.string()
    //   .min(2, "trop petit")
    //   // .max(50, "trop Grand")
    //   .required("Ce champ est obligatoire"),
    Email: Yup.string()
      .email("email Invalide").trim()
      .required("L'email est obligatoire"),
    Password: Yup.string()
      .required("Mot de passe est obligatoire")
      .min(6, "Mot de passe doit etre plus grand que 6 caracteres")
      .max(50, "Mot de passe doit plus petit que 50 caracteres"),
    // acceptTerms : Yup.bool().oneOf([true], "Accepter les conditions")

    // ConfirmMdp: Yup.string()
    //   .required("Le confirmMdpDePasse doit etre saisie obligatoirement")
    //   .oneOf(
    //     [Yup.ref("Password"), null],
    //     "Le mot de passe de confirmation ne correspond pas"
    //   ),
    // acceptTerms: Yup.bool().oneOf(
    //   [true],
    //   `Accepter les conditions générales d'utilisation`
    // ),
  });

  //Checker si l'email et le password sont dispo dans la base de données
  const ConnexionReussie = async (Email, Password) => {

    try {
      await firebase.auth().signInWithEmailAndPassword(Email, Password);
      console.log(
        "Connexion réussi de la part de l'utilisateur",
        Email,
        Password, 
      );
    } 
    catch (error) {
      Alert.alert(
        `L'utilisateur n'est pas reconnu dans notre base de donnée`, //title
        "" + `\n\nL'utilisateur n'existe pas`,
        [
          {
            text: "OK",
            onPress: () => console.log("OK"),
            style: "cancel",
          },
          {
            text: "Inscription",
            onPress: () => navigation.push("Inscription"),
          },
        ]
      );
    }

  };



  const initialValuesDonnee = {
    Email: "",
    Password: "",
    // acceptTerms : false
    //formik qui est un formulaire recupérant les champs saisies par les utilisateurs
  };

  return (
    <Container>
      <View style={Formulaire.Container}>

      <View>
          <Image
            style={Logo.ImgSize}
            source={require("../../assets/img/logo_cita_connect_orange_transparent.png")}
          />
        </View>
        <View>
          <Text style={Logo.Title}>Connexion</Text>
        </View>

        <Formik
          initialValues={initialValuesDonnee}
          onSubmit={(values) => {
            ConnexionReussie(values.Email, values.Password); //onSubmit on recuperer l'id et le mdp du champs saisie par le user
          }}
          validationSchema={CheckFormulaire} //props  //valudationSchema permet de faire la verification de checkFormulaire
          validateOnMount={true}
          // onSubmit={(values) => console.log(values)}
        >
          {/* chaque element stocker dans une view */}

          {/* formil permet de recuperer les valeurs grace au handles et à la values dans chaque champs du formulaire et mettre de nouveau argument */}
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
            errors,
            touched,
          }) => (
            <>
              {/* <Forum>
                <TextInput
                  style={[FormStyles.ChampStyle,
                    {
                      // borderColor : 
                      // values.Prenom.length > 1 ? '#f4f3' : "red"
                    }      
                  ]}
                  placeholder="Telephone"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  secureTextEntry={false}
                  textContentType="Telephone"
                  onChangeText={handleChange("Telephone")}
                  onBlur={handleBlur("Telephone")}
                  value={values.Telephone}
                ></TextInput>
              {errors.Telephone && <Text style={{fontSize:10, color: "red"}}>{errors.Telephone}</Text>}
              </Forum> */}

              <Forum>
                {/* text input for email */}
                <TextInput
                  style={[
                    Styles.input

                    // {
                    //   // borderColor :
                    //   // values.Email.match(regEmailCheck) ?
                    //   // 'blue' : "red"
                    // },
                  ]}
                  placeholder="Adresse mail"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  secureTextEntry={false}
                  textContentType="emailAddress"
                  onChangeText={handleChange("Email")}
                  onBlur={handleBlur("Email")}
                  value={values.Email}
                ></TextInput>
                {errors.Email && touched.Email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.Email}
                  </Text>
                )}
                {/* verification propre en css si errors est true */}
              </Forum>

              <Forum>
                <TextInput
                  style={Styles.input}
                  placeholder="Mot de passe"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={handleChange("Password")}
                  onBlur={handleBlur("Password")}
                  value={values.Password}
                ></TextInput>
                {errors.Password && touched.Password && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.Password}
                  </Text>
                )}
              </Forum>

              {/* <Forum>
                <TouchableOpacity style={{
                  display : "flex",
                  width : "100%",
                  alignItems : "flex-end",
                }

                }>
                  <Pressable>
                    <Text style={
                      {
                        color : "blue",
                        fontSize : 12
                      }
                      
                    }>Mot de passe oublié ?</Text>
                  </Pressable>
                </TouchableOpacity>
              </Forum> */}

              {/* <Case>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() =>{
                    setChecked(!checked)
                  }}
                />
                <Text style={{fontSize : 12}}>J'ai lu et jaccepte les conditions d'utilisations</Text>
              </Case> */}

              {/* <Forum>
                <TextInput
                  style={FormStyles.ChampStyle}
                  placeholder="confirmMdp"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  secureTextEntry={true}
                  textContentType="ConfirmPassword"
                  onChangeText={handleChange("ConfirmMdp")}
                  onBlur={handleBlur("ConfirmMdp")}
                  value={values.ConfirmMdp}
                ></TextInput>
              </Forum> */}

              {/* button press */}

              <Pressable
                titleSize={20}
                style={FormStyles.Button(isValid)}
                onPress={handleSubmit}
                disabled={!isValid} //empeche le click sur le bouton
              >
                {/* eren */}
                <TouchableOpacity>
                  <Text style={FormStyles.Txt}>Connexion</Text>
                </TouchableOpacity>
              </Pressable>

              <View style={FormStyles.Log}>
                <Text style={{ fontSize: 12 }}>
                  Si vous n'avez pas de compte : {""}
                </Text>
                <Pressable>
                  <TouchableOpacity
                    onPress={() => navigation.goBack("Inscription")}
                  >
                    <Text style={{ color: "blue", fontSize: 12 }}>
                      Inscription
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </View>
    </Container>
  );
}

const Container = styled.View`
  background-color: #fffedc;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Forum = styled.View`
  width: 100%;
  margin-top: 0px;
`;

{
  /* <const Case = styled.View`
  width: 100%;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  alignitems: center;
`;> */
}

const Logo = StyleSheet.create({
  ImgSize: {
    height: 200,
    width: 200,
  },
  Title: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 20,
  },
  checkbox: {
    display: "flex",
  },
});

const FormStyles = StyleSheet.create({
  ChampStyle: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "#010392",
    marginBottom: 10,
    borderWidth: 1,
    padding: 5,
  },

  Log: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  Button: (isValid) => ({
    backgroundColor: isValid ? "#1E3D59" : "#E2801B", // achanger
    margin: 10,
    height: 50,
    width: 150,
    // paddingRight: 40,
    // paddingTop: 10,
    // paddingBottom: 10,
    borderRadius: 15,
    textAlign : "center",
    justifyContent: "center",
    alignItems: "center",
  }),

  Txt: {
    color: "white",
  },
});

const Formulaire = StyleSheet.create({
  Container: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

//main contenant le texte

// const miseEnForme = StyleSheet.create({
//   container : {
//     backgroundColor : "blue",
//     flex : 1,
//     justifyContent : "center",
//     alignItems : "center",
//   }
// })
