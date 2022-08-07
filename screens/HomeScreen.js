import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { timestampToDate } from "../util/Utils";

function HomeScreen() {

    const [soccerPool, setSoccerPool] = useState({});

    useEffect(() => {
        axios.get("https://icdominguez-soccer-pools.herokuapp.com/api/pools/opened").then((response) => {
            if(response.status === 200) {
                const data = response.data;
                setSoccerPool(data);
            }
        }, (error) => {
            console.log(error)
        })
    }, {});

    useEffect(() => {

        console.log("Changed soccer pool: ", soccerPool);

    }, {});

    return (
        <View>
            <Text>Pool date: {timestampToDate(soccerPool.pool.datetime_start)}</Text>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

});