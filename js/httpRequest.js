/**
 * Generic function to make a http request and get the json data.
 * @param {string} url - The URL wich the request will be made. 
 * @param {Array} params - A list of the parameter that will be send as get request.
 * @returns The json data response of the request.
 */
async function httpRequest(url, params=[]){
    url = url = url +
    params.reduce((params, param) => params+'/'+param, '')
    const response = await fetch(url)
    return await response.json()
}