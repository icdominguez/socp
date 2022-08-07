import { Image, StyleSheet, View } from "react-native";


function Icon( { resource } ) {
    return (
        <View style={styles.container}>
            <Image source={resource} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        elevation: 1
    },
    image: {
        width: 40,
        height: 40
    }
})

export default Icon;