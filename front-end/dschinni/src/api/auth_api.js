import * as requester from './requester'

const BaseUrl = 'http://127.0.0.1:8000/rest'


export const register = async (data) => requester.post(`${BaseUrl}/register/`, data);


export const login = async (data) => requester.post(`${BaseUrl}/login/`, data);


export const GetProfileInfo = async (id) => requester.get(`${BaseUrl}/profile/${id}`);


export const UpdateProfileInfo = async (id, data) => requester.put(`${BaseUrl}/profile/${id}`, data);