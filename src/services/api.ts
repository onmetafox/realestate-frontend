import axios from 'axios'
import { pathJoin } from '../utils';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? '';




export default class Api {

    constructor() {

    }


    static async getReq(url: string,) {
        return await axios.get(pathJoin(API_BASE_URL, url));
    }
    static async postReq(url: string, data: any) {
        return await axios.post(pathJoin(API_BASE_URL, url), data);
    }
    static async putReq(url: string, data: any) {
        return await axios.put(pathJoin(API_BASE_URL, url), data);
    }
    static async deleteReq(url: string) {
        return await axios.delete(pathJoin(API_BASE_URL, url),);
    }


    static async sendEmail(data: {
        receiver: string,
        html: string,
        text: string,
        subject: string
    }) {
        return await this.postReq('email/send', data);
    }

}

