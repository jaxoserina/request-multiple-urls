const fetch = require("node-fetch");

module.exports = async function getMultipleUrlResponses(urls) {
    try {
        let data = await Promise.all(
            urls.map(
                url =>
                    fetch(url).then(
                        (response) => {
                            if (response && response.status === 200) {
                                // success response
                                return response.json();
                            } else {
                                // failure response
                                let errorResponse = errorHandling(response)
                                return errorResponse;
                            }
                            
                        }
                    )));                   
        return (data);

    } catch (error) {
        throw (error);
    }
}

function errorHandling(errorResponse) {
    // resolve with an error message to the client
    return {
        status: errorResponse && errorResponse.status ? errorResponse.status :  500,
        statusText: errorResponse && errorResponse.statusText ? errorResponse.statusText: 'Server error',
        message: errorResponse && errorResponse.message ? errorResponse.message : 'Unexpected error occured'
    };
}
