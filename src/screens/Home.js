import React, { useState } from "react";
import Colors from "../colors/Colors";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

const Home = () => {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.pageHeader}>
       
          <Text style={styles.LoginText}>Log In</Text>
          
        </View>
      </SafeAreaView>
      <View>
       
        <TextInput style={styles.inputEmail} placeholder="Email" />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={styles.showText}>{"showPassword" ? "Show" : "Hide"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            /* Do something like authenticate*/
          }}
        >
          <Text style={styles.btnLoginText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  //Header
  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "5%",
  },
 
  LoginText: {
    fontWeight: "bold",
    fontSize: 35,
  },
 

  //TextInputs
  inputEmail: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.gray01,
    borderColor: Colors.gray02,
    borderRadius: 10,
    fontWeight: "500",
    fontSize: 18,
  },

  passwordContainer: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray01,
    borderColor: Colors.gray02,
    borderRadius: 8,
    paddingHorizontal: 14,
  },

  inputPassword: {
    flex: 1,
    backgroundColor: Colors.gray01,
    paddingVertical: 10,
    paddingRight: 10,
    borderColor: Colors.gray02,
    fontSize: 18,
    fontWeight: "500",
  },
  showText: {
    color: Colors.greenPrimary,
    fontSize: 17,
  },

  //Log in button

  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
    
  },
  btnLogin: {
    backgroundColor: Colors.greenPrimary,
    height: 60,
    width: "95%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLoginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  
  //forgot password
  forgotPasswordContainer: {
    alignItems: "center",
    margin:10,
  },
  forgotPasswordText: {
    color: Colors.greenPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Home;
