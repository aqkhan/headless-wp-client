import axios from 'axios';
import { API_PATH } from '../config';

export function generateUrl (path) {
    return API_PATH + path;
}

export function apiReq (endPoint, data, method, rawHeaders, config) {
    return new Promise ((res, rej) => {
        if(method === 'get') {
            data = {
                params: data,
                rawHeaders,
                ...config
            }
        }

        axios[method](endPoint, data, {...config, ...rawHeaders}).then((result) => {
            let {data} = result;
            return res(data)
        }).catch((err) => {
            return rej(err);
        });
    })
}

export function apiPost (endPoint, data = {}, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'post', headers, config);
}

export function apiDelete (endPoint, data = {}, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'delete', headers, config);
}

export function apiGet (endPoint, data = {}, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'get', headers, config);
}

export function apiPut (endPoint, data = {}, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'put', headers, config);
}