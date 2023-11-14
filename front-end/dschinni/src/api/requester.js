const request = async (method, url, data) => {

    try {
        let builderRequest;

        if (method === 'GET') {
            builderRequest = fetch(url);
        }
        else {
            builderRequest = fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
        
                },
                body: JSON.stringify(data),
            });
        }

        const response = await builderRequest;

        const result = await response.json();

        return {data: result, status: response.status}
    } catch (err) {
        return err
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');