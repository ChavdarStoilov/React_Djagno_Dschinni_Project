const BaseUrl = 'http://127.0.0.1:8000/rest'


export const register = async (data) => {
    try {
        const response = await fetch(
            `${BaseUrl}/register/`, 
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
            )
        
        const result = await response.json()
        return [response.status, result]
    } catch (err) {
        return err
    }

}


export const login = async (data) => {
    try {
        const response = await fetch(
            `${BaseUrl}/login/`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
        )
        const result = await response.json()
        return result
    } catch (err) {
        return err
    }
}