import React from "react";
import styled from "styled-components";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import {firebase, db} from "../../firebase";
import Styles from "../../styles/styles.scss";

export default function Inscription({navigation}) {
  const CheckFormulaire = Yup.object().shape({
    UserName: Yup.string()
      .min(3, "Trop petit")
      // .max(50, "Trop Grand")
      .required("Ce champ est obligatoire"),
    Email: Yup.string()
      .email("email Invalide")
      .required("L'email est obligatoire"),
    Password: Yup.string()
      .required("Mot de passe est obligatoire")
      .min(8, "Mot de passe doit etre plus grand que 8 caracteres")
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

  const InscriptionReussie = async (Email, Password, UserName) =>{

    try{
       const authUser = await firebase.auth().createUserWithEmailAndPassword(Email, Password)
       console.log("Utilisateur créer dans notre base de donnée", 
       Email, Password
       );

       firebase.firestore().collection('users').add({
         owner_iud : authUser.user.uid,
         username : UserName,
         email : authUser.user.email
       })

    } catch(error){
      Alert.alert(error.message);
    }
  }

  const initialValuesDonnee = {
    UserName: "",
    Email: "",
    Password: "",
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
          <Text style={Logo.Title}>Inscription</Text>
        </View>

        <Formik
          initialValues={initialValuesDonnee}
          validationSchema={CheckFormulaire} //props  //valudationSchema permet de faire la verification de checkFormulaire
          validateOnMount={true}
          onSubmit={(values) => InscriptionReussie(values.Email, values.Password, values.UserName)}
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
              <Forum>
                {/* text input id */}
                <TextInput
                  style={[
                    Styles.input, //second style grace au tableau d'objet
                    {
                      // borderColor :
                      // values.Nom.length > 1 ? '#f4f3' : "red"
                    },
                  ]}
                  placeholder="Saisir un nom complet"
                  placeholderTextColor="#1E3D59"
                  autoFocus={false}
                  secureTextEntry={false}
                  autoCapitalize="none"
                  onChangeText={handleChange("UserName")}
                  onBlur={handleBlur("UserName")}
                  value={values.UserName}
                ></TextInput>
                {errors.UserName && touched.UserName && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.UserName}
                  </Text>
                )}
              </Forum>

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
                    Styles.input,

                    {
                      // borderColor :
                      // values.Email.match(regEmailCheck) ?
                      // 'blue' : "red"
                    },
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
                <TouchableOpacity onPress={() =>{
                    // console.log("eren")
                }}>
                  <Text style={FormStyles.Txt}>S'inscrire</Text>
                </TouchableOpacity>
              </Pressable>

              <View style={FormStyles.Log}>
                <Text style={{fontSize : 12}}>Si vous avez déjà un compte : </Text>
              <Pressable>
                <TouchableOpacity onPress={() => navigation.push('Connexion')}> 
                  <Text style={{color : "blue", fontSize : 12}}>Connexion</Text>
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

{/* <const Case = styled.View`
  width: 100%;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  alignitems: center;
`;> */}

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
  // ChampStyle: {
  //   marginTop: 20,
  //   borderBottomWidth: 1,
  //   borderColor: "#010392",
  //   marginBottom: 10,
  //   borderWidth: 1,
  //   padding: 5,
  // },

  Log : {
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
    marginTop : 10
  },

  Button: (isValid) => ({
    backgroundColor: isValid ? "#1E3D59" : "#E2801B", // achanger
    margin: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
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

