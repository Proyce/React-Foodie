import {API_URL} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_URL}${path}?${query}`, {
        headers: {
            Origin: 'localhost',
        }
    });
}