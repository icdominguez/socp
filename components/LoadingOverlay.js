import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../util/Constants";

export default function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.primaryDarkColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: 'white'
    }
});