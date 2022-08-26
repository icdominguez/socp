import axios from "axios";
import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import LoadingOverlay from "../components/LoadingOverlay";
import CustomButton from "../components/ui/CustomButton";
import Icon from "../components/ui/Icon";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/http";

function LoginScreen({ navigation }) {

    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");

    const [isLoading, setIsLoading] = useState();

    const [passwordVisible, setPasswordVisible] = useState(true);

    const authContext = useContext(AuthContext);

    const PressHandler = () => {

        const bodyParameters = {
            username: username,
            password: password
        }

        axios.post("https://icdominguez-soccer-pools.herokuapp.com/api/auth/login", bodyParameters)
            .then((response) => {
                if(response.status === 200)
                authContext.authenticate(response.data.token);
            });
    }

    function navigateToSignUp() {
        navigation.navigate("SignUp");
    }

    if(isLoading) {
        return <LoadingOverlay/>
    }

    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <TextInput style={styles.textInput} placeholder="Username" onChangeText={onChangeUsername} value={username} autoCapitalize='none'></TextInput>

                <View>
                    <TextInput style={styles.textInput} 
                        placeholder="Password" 
                        onChangeText={onChangePassword} 
                        value={password} 
                        autoCapitalize='none' 
                        secureTextEntry={true} />
                       
                </View>

                <CustomButton onPress={PressHandler}>Login</CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        width: '100%'
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
    signInText: {
        marginTop: 50,
        marginBottom: 20,
        textAlign: "center"
    }
});

export default LoginScreen;