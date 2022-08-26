import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { timestampToDate } from "../../util/Utils";
import AccurateResult from "./AccurateResult";
import Match from "./Match";
import PoolTitle from "./PoolTitle";

export default function SoccerPool({ pool, fallBackText }) {

    const renderMatch = ({ item }) => (
        <Match match={item}/>
    );

    let content = <Text>{fallBackText}</Text>

    if (pool != undefined) {
        content = <SafeAreaView>
            <PoolTitle title={pool.title} date={timestampToDate(pool.datetime_start)} />

            <View>
                <FlatList
                    data={pool.matches}
                    renderItem={renderMatch}
                    keyExtractor={item => item.match_id} />
                <AccurateResult accurate_result={pool.accurate_result} />
            </View>

        </SafeAreaView>
    }

    return (
        <View style={styles.container}>
            <View style={styles.matchContainer}>
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    matchContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#6c88c1',
        borderStyle: 'dotted'
    },
    matchContainerBottom: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#6c88c1'
    },
    matchIdText: {
        color: '#6c88c1',
        paddingLeft: 5,
        paddingRight: 10,
        width: '8%'
    },
    textLeft: {
        textAlign: "left"
    },
    optionsContainer: {
        flexDirection: "row"
    },
    dateContainer: {
        flexDirection: "column",
        paddingRight: 5,
        paddingLeft: 5,
        width: '25%'
    },
    textCenter: {
        textAlign: "center",
        fontSize: 10
    },
    teamsContainer: {
        width: '56%'
    },
    accurate_result_options_container : {
        flexDirection: "column"
    },
    accurate_result_options: {
        flexDirection: "row"
    }
});