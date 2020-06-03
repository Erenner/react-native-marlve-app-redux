import axios from 'axios';
import md5 from 'md5';

const ts = new Date().getTime()
const hash8 = "e26db995070f0c398ae40817594dc6d5de9df100";
const PUBLIC_KEY = "7e852b7670b4fea9a759e54ade928121";
const hash = md5(ts + hash8 + PUBLIC_KEY)

const instance = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&offset=1&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
});

export default instance;