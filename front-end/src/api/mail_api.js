import * as requester from './requester'

const BaseUrl = 'http://127.0.0.1:8000/rest'



export const sentEmail = async (data) => requester.post(`${BaseUrl}/sent-email/`, data)