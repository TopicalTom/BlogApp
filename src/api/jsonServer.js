import axios from 'axios';
import { NGROK_URL } from '@env';

export default axios.create({
    baseURL: `${NGROK_URL}`
});