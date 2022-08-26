import { StyleSheet, Text, View } from "react-native";
import { timestampToDayHoursAndMinutes } from "../../util/Utils";
import OptionButton from "./OptionButton";
import Options from "./Options";

export default function AccurateResult({ accurate_result }) {

    return (
        <View style={styles.accurate_result_container}>
            <Text style={styles.matchIdText}>15</Text>
            <View style={styles.teamsContainer}>
                <Text>{accurate_result.home_team} - {accurate_result.visitor}</Text>
            </View>
            <View style={styles.dateContainer}>{renderDate(timestampToDayHoursAndMinutes(accurate_result.datetime))}</View>
            <View style={styles.optionsContainer}>
                <View style={styles.options}>
                    <Options options={accurate_result.options} matchId={15} />
                </View>
                <View style={styles.options}>
                    <Options options={accurate_result.options} matchId={15} />
                </View>
            </View>
        </View>)

    function renderDate(date) {
        const dateItems = date.split(" - ")
        return dateItems.map(item => {
            return <Text style={styles.dateText}>{item}</Text>
        })
    }

    function renderOptions(options) {
            return options.map(option => {
            return <OptionButton >{option}</OptionButton>
        })
    }
}

const styles = StyleSheet.create({
    accurate_result_container: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: '#6c88c1'
    },
    matchIdText: {
        color: '#6c88c1',
        paddingLeft: 5,
        paddingRight: 10,
        width: '8%'
    },
    teamsContainer: {
        width: '50%'
    },
    optionsContainer: {
        flexDirection: "column"
    },
    options: {
        flexDirection: "row"
    },
    dateText: {
        textAlign: "center",
        fontSize: 10
    },
    dateContainer: {
        padding: 10
    }
});