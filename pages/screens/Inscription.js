import React from "react";
import styled from "styled-components";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  useState,
  Pressable,
} from "react-native";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

export default function Inscription() {
  //vérification coordonnée
  const CheckFormulaire = Yup.object().shape({
    Prenom: Yup.string()
      .min(5, "trop petit")
      .max(50, "trop Grand")
      .required("Ce champ est obligatoire"),
    Nom: Yup.string()
      .min(1, "Trop petit")
      .max(5, "Trop Grand")
      .required("Ce champ est obligatoire"),
    Email: Yup.string()
      .email("email Invalide")
      .required("L'email est obligatoire"),
    Password: Yup.string()
      .email("email invalide")
      .required("Mot de passe est obligatoire")
      .min(8, "Mot de passe doit etre plus grand que 8 caracteres")
      .max(40, "Mot de passe doit etre plus petit que 40 caracteres"),
    ConfirmMdp: Yup.string()
      .required("Le confirmMdpDePasse doit etre saisie obligatoirement")
      .oneOf(
        [Yup.ref("Password"), null],
        "Le mot de passe de confirmation ne correspond pas"
      ),
    acceptTerms: Yup.bool().oneOf(
      [true],
      `Accepter les conditions générales d'utilisation`
    ),
  });

  return (
    <Container>
      <View style={Formulaire.Container}>
        <View>
          <Image
            style={Logo.ImgSize}
            source={require("../../assets/img/logo_cita_connect_orange_transparent.png")}
          />
        </View>

        <Formik
          initialValues={{
            Prenom: "",
            Nom: "",
            Email: "",
            Password: "",
            ConfirmMdp: "",
          }}
          onSubmit={(values) => console.log(values)}
          validation={CheckFormulaire} //props
          validateOnMount={true}
        >
          {/* chaque element stocker dans une view */}

          {/* formil permet de recuperer les valeurs grace au handles et à la values dans chaque champs du formulaire */}
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <Forum>
                <TextInput
                  style={FormStyles.ChampStyle}
                  placeholder="Nom"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  secureTextEntry={false}
                  autoCapitalize="none"
                  onChangeText={handleChange("Nom")}
                  onBlur={handleBlur("Nom")}
                  value={values.Nom}
                ></TextInput>
              </Forum>

              <Forum>
                <TextInput
                  style={FormStyles.ChampStyle}
                  placeholder="Prenom"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  secureTextEntry={false}
                  textContentType="name"
                  onChangeText={handleChange("Prenom")}
                  onBlur={handleBlur("Prenom")}
                  value={values.Prenom}
                ></TextInput>
              </Forum>

              <Forum>
                <TextInput
                  style={FormStyles.ChampStyle}
                  placeholder="Adresse mail"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  secureTextEntry={false}
                  textContentType="emailAddress"
                  onChangeText={handleChange("Email")}
                  onBlur={handleBlur("Email")}
                  value={values.Email}
                ></TextInput>
              </Forum>

              <Forum>
                <TextInput
                  style={FormStyles.ChampStyle}
                  placeholder="mot de passe"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={handleChange("Password")}
                  onBlur={handleBlur("Password")}
                  value={values.Password}
                ></TextInput>
              </Forum>

              <Forum>
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
              </Forum>

              {/* button press */}

              <Pressable
                titleSize={20}
                style={FormStyles.Button(isValid)}
                onPress={handleSubmit}
              >
                {/* eren */}
                <TouchableOpacity>
                  <Text style={FormStyles.Txt}>S'inscrire</Text>
                </TouchableOpacity>
              </Pressable>

              {/* <Button onPress={handleSubmit} value="Eren" /> */}
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
  border: solid 2px red;
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

const Logo = StyleSheet.create({
  ImgSize: {
    height: 200,
    width: 200,
  },
});

const FormStyles = StyleSheet.create({
  ChampStyle: {
    marginTop: 20,
    borderBottomWidth: 1,
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 1,
    padding: 5,
  },

  Button: (isValid) => ({
    margin: 10,
    backgroundColor: isValid ? "#0096F6" : "#f1f1f1",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
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
