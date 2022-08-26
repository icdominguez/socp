import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import SoccerPool from "../components/soccer_pool/SoccerPool";
import CustomButton from "../components/ui/CustomButton";
import { AuthContext } from "../store/auth-context";
import { getPool } from "../util/http";
import LoadingOverlay from "../components/LoadingOverlay";

export default function HomeScreen() {

    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState('');
    const [soccerPool, setSoccerPool] = useState();

    const authContext = useContext(AuthContext);

    useEffect(() => {
        axios.get("https://icdominguez-soccer-pools.herokuapp.com/api/pools/opened", { headers: { Authorization : `Bearer ${authContext.token}`} })
            .then((response) => {
                if(response.status === 200) {
                    setSoccerPool(response.data.pool);
                } else {
                    
                }
            });
    }, []);

    function onSendParticipationClicked() {
        console.log(`sendParticipation clicked with ids: ${authContext.options}`);

        var data = JSON.stringify({
            "pool_id": soccerPool.pool_id,
            "participation": authContext.options
        });

        var config = {
            method: 'post',
            url: 'https://icdominguez-soccer-pools.herokuapp.com/api/games/play',
            headers: {
                'Authorization': `Bearer ${authContext.token}`,
                'Content-Type': 'application/json'
            },
            data: dta
        };

        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
        }).catch(function (error) {
            console.log(error)
        })


    }

    return (
        <View style={styles.container}>
            {soccerPool && 
                <View style={styles.soccerPoolContainer}>
                    <SoccerPool style={styles.soccerPool} pool={soccerPool} fallBackText="No se ha encontrado ninguna quiniela disponible"/>
                    <CustomButton style={styles.sendParticipationButton} onPress={onSendParticipationClicked}>Enviar participacion</CustomButton>
                </View>
                }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },  
    text: {
        textAlign: "center"
    },
    sendParticipationButton: {
        flex: 1
    },
    soccerPoolContainer: {
        flex: 2
    },
    sendParticipationButton: {
        margin: 10
    }
});