import axios from "axios";
import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import Icon from "../components/ui/Icon";
import { AuthContext } from "../store/auth-context";

function LoginScreen({ navigation }) {

    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");

    const authContext = useContext(AuthContext);

    function PressHandler() {
        console.log(`Username: ${username} and password: ${password}`);

        axios.post('https://icdominguez-soccer-pools.herokuapp.com/api/auth/login', {
            username: username,
            password: password
        }).then((response) => {
            if(response.status === 200) {
                navigation.navigate('Home');
                authContext.authenticate(response.data.token);
            }

        }, (error) => {
            console.log(error);
        });
    }
    
    function navigateToSignUp() {
        navigation.navigate("SignUp");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login into your account</Text>
            
            <View style={styles.form}>
                <TextInput style={styles.textInput} placeholder="Username" onChangeText={onChangeUsername} value={username}></TextInput>
                <TextInput style={styles.textInput} placeholder="Password" onChangeText={onChangePassword} value={password}></TextInput>

                <CustomButton onPress={PressHandler}>Login</CustomButton>
            </View>

            <Text style={styles.signInText}>- Or sign in with -</Text>

            <View style={styles.iconContainer}>
                <Icon resource={require('./../assets/icons/ic_apple.png')} />
                <Icon resource={require('./../assets/icons/ic_facebook.png')} />
                <Icon resource={require('./../assets/icons/ic_google.png')} />
            </View>

            <View style={styles.signUpContainer}>
                <Text>Don't have an account? </Text>
                <Pressable onPress={navigateToSignUp}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        height: 50,
        padding: 10,
        opacity: 0.5,
        borderRadius: 4,
        backgroundColor: 'white',
        marginVertical: 12,
        elevation: 1
    },
    form: {
        margin: 12
    },
    signInText: {
        textAlign: "center"
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    signUpContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    signUpText: {
        color: '#1E319D'
    },
    loginButton: {
        marginTop: 200
    },
    loginText: {
        marginTop: 40,
        marginStart: 12
    },
    signInText: {
        marginTop: 50,
        marginBottom: 20,    
        textAlign: "center"
    }
});

export default LoginScreen;