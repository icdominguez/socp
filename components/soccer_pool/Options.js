import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../../store/auth-context";
import OptionButton from "./OptionButton";

export default function Options( { options, matchId } ) {

    const [optionsObj, setOptionsObj] = useState([]);
    const [update, setUpdate] = useState(false);

    const authContext = useContext(AuthContext);

    const createOptionsObject = () => {
        var optionsArray = [];

        options.forEach(option => {
            optionsArray.push({
                title: option,
                pressed: false
            });
        });

        setOptionsObj(optionsArray);
        console.log(`options created: ${optionsObj}`);
    }

    useEffect(() => {
        createOptionsObject();
    }, [setOptionsObj]);

    function onOptionPressed(children) {

        console.log(`Option clicked: ${children}, match_id ${matchId}`);

        if(matchId < 15) {
            authContext.addOption({
                value: children,
                match_id: matchId
            });
    
            optionsObj.forEach(option => {
                if(option.title === children) {
                    option.pressed = true
                } else {
                    option.pressed = false
                }
            });
    
            setOptionsObj(optionsObj);
            setUpdate(!update);
        }
    }

    return (
        optionsObj.map(option => {
            return <OptionButton onOptionPressed={onOptionPressed} isPressed={option.pressed}>{option.title}</OptionButton>
        })
    )

}

const styles = StyleSheet.create({

});