import axios from "axios";

const baseUrl = "https://icdominguez-soccer-pools.herokuapp.com/api/";

export function getUserParticipation(token, poolId) {

    console.log("Going to getUserParticipation on http");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const bodyParameters = {
        pool_id: poolId
    }

    try{
        const response = axios.post(`${baseUrl}games/puntuation`, bodyParameters, config);    
    } catch(error) {
        console(`error: ${error}`);
    }
    
    
    return response;
}

export async function getPool(token) {

    console.log("getPool");

    try {
        const response = await axios.get(`${baseUrl}pools/opened`, { headers: { Authorization : `Bearer ${token}`} });
        console.log("response " + response.data);
    } catch(error) {
        console.log("error: " + error)
    }
    return response;
}

export async function login(user, pass) {

    console.log(`user :${user} pass: ${pass}`);

    const bodyParameters = {
        username: user,
        password: pass 
    }

    const response = await axios.post(`${baseUrl}auth/login`, bodyParameters);
    return response;

}

export function signIn(user, mail, pass) {
    const bodyParameters = {
        username: user,
        email: mail,
        password: pass
    }

    const response = axios.post(`${baseUrl}api/users/create`, bodyParameters);
    return response;
}

export function play(token, soccerPool, userParticipation) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const bodyParameters = {
        pool_id: soccerPool,
        participation: userParticipation
    }

    const response = axios.post(`${baseUrl}games/play`, bodyParameters. headers);

    return response;
}