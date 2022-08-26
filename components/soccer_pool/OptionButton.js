import { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function OptionButton( { children, onOptionPressed, isPressed } ) {

    var touchProps = {
        activeOpacity: 1,
        underlayColor: '#6c88c1',
        style: isPressed ? styles.btnPress : styles.btnNormal,
        onPress: () => {
            onOptionPressed(children)
        }
    }

    return(
        <View style={styles.inputContainer}>
            <TouchableHighlight {...touchProps}>
                <Text style={isPressed ? styles.textWhite : styles.textBlue}>{children}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: '#1E319D'
    },
    text: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },
    textWhite: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        color: 'white'
    },
    textBlue: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        color: '#1E319D'
    },
    btnPress: {
        backgroundColor: '#1E319D'
    },
    btnNormal: {
        backgroundColor: 'white'
    }
});