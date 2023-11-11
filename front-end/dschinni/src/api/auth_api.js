const BaseUrl = 'http://127.0.0.1:8000/rest/register/'


export const login = async (data) => {
    try {
        const response = await fetch(
            BaseUrl, 
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
            )
        
        const status = response.status
        const result = await response.json()
        return (status, result)
    } catch (err) {
        return err
    }

}