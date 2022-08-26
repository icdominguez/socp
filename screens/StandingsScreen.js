import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";
import axios from "axios";

const StandingsScreen = () => {

    const authContext = useContext(AuthContext);

    const [participations, setParticipations] = useState([]);

    useEffect(() => {
        const getParticipationsByPoolId = async () => {

            try {

                var data = JSON.stringify({
                    "pool_id": "63024963a87f0075c48a8ccb"
                });

                var config = {
                    method: 'get',
                    url: 'https://icdominguez-soccer-pools.herokuapp.com/api/games/getParticipationsInSoccerPool',
                    headers : {
                        'Authorization': `Bearer ${authContext.token}`,
                        'Content-Type': 'application/json'
                    },
                    data: data
                }

                axios(config).then(function (response) {
                    setParticipations(response.data.participations);
                }).catch(function (error) {
                    console.log(error)
                });
                
            } catch (error) {
                console.log(error);
            }
        }

        getParticipationsByPoolId();
    }, []);

    return(
        <View>
            <Text>{participations.length > 0 ? "Participaciones" : "No se han encontrado participaciones"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default StandingsScreen;