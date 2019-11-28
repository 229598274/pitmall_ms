import requestHeaders from './RequestHeaders'

const get = (url) => {
    return fetch(url, {
        method: 'GET',
        // credentials: 'include',
        credentials: 'include',
        headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/x-www-form-urlencoded' }, 
    }).then((response) => response.json())
}

const post = (url, params) => {
    return fetch(url, {
        method: 'POST',
        // credentials: 'include',
        credentials: 'include',
        headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/x-www-form-urlencoded' }, 
        body: JSON.stringify(params)
    }).then((response) => response.json())
}

const put = (url, params) => {
    return fetch(url, {
        method: 'PUT',
        // credentials: 'include',
        credentials: 'include',
        headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/x-www-form-urlencoded' }, 
        body: JSON.stringify(params)
    }).then((response) => response.json())
}

const del = (url) => {
    return fetch(url, {
        method: 'DELETE',
        // credentials: 'include',
        credentials: 'include',
        headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/x-www-form-urlencoded' }, 
    }).then((response) => response.json())
}

export default { get, post, put, del }
