import { clearUserData, getUserData } from "../util.js";

const host = 'https://parseapi.back4app.com';
const appId ='gEOBfqGNVKaJq5SOZGXjHAlrnUHCN0gWaK4mDqJ9';
const apiKey= '7yOY7a7uJjFswAuNAP7HqKbMinmrTOgTTE6kwcdr'

async function request(method, url, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    };

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    const sessionToken = userData?.sessionToken

    if(sessionToken){
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if(!response.ok){
            const err = await response.json();
            throw new Error(err.message);
        }

        if(response.status == 204){
            return response;
        }else{
            return response.json()
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = (url) => request('GET', url);
export const post = (url, data) => request('POST', url, data);
export const put = (url, data) => request('PUT', url, data);
export const del = (url) => request('DELETE', url);
