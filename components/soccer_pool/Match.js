import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { timestampToDayHoursAndMinutes } from "../../util/Utils";
import Options from "./Options";

export default function Match( { match }) {

    return (<View>
        {match && <View style={styles.matchContainer}>
            <Text style={styles.matchIdText}>{match.match_id}</Text>
            <View style={styles.teamsContainer}>
                <Text style={styles.textLeft}>{match.home_team} - {match.visitor}</Text>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.dateContainer}>{renderDate(timestampToDayHoursAndMinutes(match.datetime))}</View>
                <Options options={match.options} matchId={match.match_id}/>
            </View>
        </View>}
    </View>
        
    )

    function renderDate(date) {
        const dateItems = date.split(" - ")
        return dateItems.map(item => {
            return <Text style={styles.textCenter}>{item}</Text>
        })
    }
}

const styles = StyleSheet.create({
    matchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#6c88c1',
        borderStyle: 'dotted'
    },
    matchIdText: {
        color: '#6c88c1',
        paddingLeft: 5,
        paddingRight: 10,
        width: '8%'
    },
    teamsContainer: {
        width: '56%'
    },
    optionsContainer: {
        flexDirection: "row"
    },
    textCenter: {
        textAlign: "center",
        fontSize: 10
    },
    dateContainer: {
        flexDirection: "column",
        paddingRight: 5,
        paddingLeft: 5,
        width: '25%'
    },
});