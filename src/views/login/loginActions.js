import { api_host } from '../../utils/hostConfg'
import httpRequest from '../../utils/HttpRequest'
import { async } from 'q'

export const login = () => async (dispatch, getState) => {
    try {
        // console.log('login')
        const url = `${api_host}/login`
        console.log('url', url)
        const res = await httpRequest.post(url, {
            username: "admin",
            password: "123"
        })
        console.log('res', res)
        // const url = `${api_host}/hello`
        // console.log('url',url)
        // const res = await httpRequest.get(url)
        // console.log('res', res)

    } catch (err) {
        console.log('err', err)
    }
}

export const getHello = () => async (dispatch, getState) => {
    try {
        const url = `${api_host}/hello`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
    } catch (err) {

    }
}