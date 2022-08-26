import { StyleSheet, Text, View } from "react-native";

export default function PoolTitle( { title, date }) {

    console.log(`title: ${title}, data: ${date}`)

    return(
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: '#1E319D',
        borderBottomWidth: 2
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        padding: 10
    },
    date: {
        position: "absolute",
        right: 10
    }
});