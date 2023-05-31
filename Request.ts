import axios from 'axios';

const API_URL = 'https://api.etherscan.io';

class RequestHandler { 

    protected axiosClient: any;

    constructor(timeoutMiliseconds: number = 1000) {
        
        this.axiosClient = axios.create({
            baseURL: API_URL,
            timeout: timeoutMiliseconds
          });
    }

    public async getRequest(query: string): Promise<string> { 

        let url: string = '/api?' + query;
        try
        {
            let response = await this.axiosClient.get(url);
            if (response.data && response.data.status != 1) {
                return Promise.reject(response.data.message || 'NOTOK');
            }
            else
            {
                return Promise.resolve(response.data.result);
            }
        }
        catch (error) { 
            return Promise.reject(`Error on executing get request: ${ error }.`);
        }
    }
}

export { RequestHandler };