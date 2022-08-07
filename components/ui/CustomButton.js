import { Pressable, StyleSheet, Text, View } from "react-native";

function CustomButton( { children, onPress } ) {

    return( 
        <Pressable onPress={onPress}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#1E319D',
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 16,
        elevation: 2,
        marginTop: 12
    },
    text: {
        color: 'white',
        textAlign: "center"
    }
})

export default CustomButton;