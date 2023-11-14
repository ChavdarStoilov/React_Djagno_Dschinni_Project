import * as requester from './requester'

const BaseUrl = 'http://127.0.0.1:8000/rest'


export const register = async (data) => requester.post(`${BaseUrl}/register/`, data);


export const login = async (data) => requester.post(`${BaseUrl}/login/`, data);


export const GetProfileInfo = async (id, token) => {
    try {
        const response = await fetch(
            `${BaseUrl}/profile/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': "Token " + token,
                }
            }
            )

        const result = await response.json()

        return {data: result, status: response.status}
    }catch (err) {
        return err
    }
}

export const UpdateProfileInfo = async (id, data, token) => {
    try {
        const response = await fetch(
            `${BaseUrl}/profile/${id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': "Token " + token,
                },
                body: JSON.stringify(data)
            }
        )

        const result = await response.json()

        return {data: result, status: response.status}
        
    } catch (err) {
        return err
    }
}