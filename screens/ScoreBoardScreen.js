import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MatchWithScore from "../components/MatchWithScore";
import { AuthContext } from "../store/auth-context";

export default function ScoreBoardScreen() {

    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [userParticipation, setUserParticipation] = useState();

    const authContext = useContext(AuthContext);

    useEffect(() => {
        try {
            var data = JSON.stringify({
                "pool_id": "63024963a87f0075c48a8ccb"
            });

            var config = {
                method: 'post',
                url: 'https://icdominguez-soccer-pools.herokuapp.com/api/games/puntuation',
                headers : {
                    'Authorization': `Bearer ${authContext.token}`,
                    'Content-Type': 'application/json'
                },
                data: data
            }

            axios(config).then(function (response) {
                setUserParticipation(response.data);
            }).catch(function (error) {
                console.log(error)
            });
        } catch (error) {
            
        }
    }, []);

    const renderMatch = (match) => (
        <MatchWithScore match={match} />
    )

    return(
        <View>
            { userParticipation &&
            <View>
                <Text>{userParticipation.title}</Text>

                <View>
                    <FlatList 
                        data={userParticipation.pool.matches}
                        extraData={userParticipation.pool.matches}
                        renderItem={({item}) => <MatchWithScore match={item} />}
                         />
                </View>
            </View>}            
        </View>
    )
}

const styles = StyleSheet.create({

});