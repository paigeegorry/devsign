import { get, getById, post, del } from './request';

export const getHums = () => get('hums');
export const postHums = (body) => post('hums', body);
export const getHumsById = (id) => getById(`hums/users/${id}`);
export const deleteHum = (id) => del(`hums/${id}`);
