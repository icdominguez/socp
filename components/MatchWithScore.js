import { StyleSheet, Text, View } from "react-native";

export default function MatchWithScore({ match }) {

    console.log("match" + match.match_id)

    return (
        <View>
            {match && <Text>{match.datetime}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({

});