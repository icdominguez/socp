import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    token: '',
    options: [],
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
    savePool: () => {},
    addOption: () => {},
    poolId: ''
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
    const [storedPoolId, setStoredPoolId] = useState();
    const [optionsClicked, setOptionsClicked] = useState([]);
    const [accurate_result, setAccurateResult] = useState();

    function addOption(optionObj) {

        let option = optionsClicked.find(option => option.match_id === optionObj.match_id)

        if(!option) {
            console.log('Going to add element to array');

            if(optionsClicked.length == 0) {
                var array = [optionObj.value]
                setOptionsClicked(array)
            } else {
                setOptionsClicked(optionsClicked => [...optionsClicked, optionObj.value]);
            }
        } else {
            console.log('Going to update element on array');
        }
    }

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    function savePool(poolId) {
        setStoredPoolId(poolId);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
        savePool: savePool,
        addOption: addOption,
        options: optionsClicked,
        poolId: storedPoolId
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;