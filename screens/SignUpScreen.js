import axios from "axios";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import Icon from "../components/ui/Icon";


function SignUpScreen() {

    const [username, onChangeUsername] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [repeatedPassword, onChangeRepeatedPassword] = useState("");

    function PressHandler() {
        console.log(`email: ${email}, password: ${password}, repeated password: ${repeatedPassword}`);

        axios.post('https://icdominguez-soccer-pools.herokuapp.com/api/users/create', {
            username: username,
            email: email,
            password: password
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <View>
            <Text style={styles.loginText}>Login into your account</Text>

            <View style={styles.form}>
                <TextInput style={styles.textInput} placeholder="Username" onChangeText={onChangeUsername} value={username}></TextInput>
                <TextInput style={styles.textInput} placeholder="Email" onChangeText={onChangeEmail} value={email}></TextInput>
                <TextInput style={styles.textInput} placeholder="Password" onChangeText={onChangePassword} value={password}></TextInput>
                <TextInput style={styles.textInput} placeholder="Repeat password" onChangeText={onChangeRepeatedPassword} value={repeatedPassword}></TextInput>

                <CustomButton onPress={PressHandler}>Sign up</CustomButton>

                <Text style={styles.signInText}>- Or sign in with -</Text>

                <View style={styles.iconContainer}>
                    <Icon resource={require('./../assets/icons/ic_apple.png')} />
                    <Icon resource={require('./../assets/icons/ic_facebook.png')} />
                    <Icon resource={require('./../assets/icons/ic_google.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        color: 'grey',
        height: 50,
        padding: 10,
        opacity: 0.5,
        borderRadius: 4,
        backgroundColor: 'white',
        marginVertical: 12,
        elevation: 1
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    signInText: {
        textAlign: "center"
    },
    form: {
        margin: 12
    },
    loginText: {
        marginTop: 40,
        marginStart: 12
    }
});

export default SignUpScreen;