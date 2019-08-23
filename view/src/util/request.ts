import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    timeout: 1000,
});
// 全是any 我的亲娘啊 回来好好看看吧
instance.interceptors.response.use( (res: any) : any => {
    const {status, data} = res;
    return {
        status,
        data,
    };
})

export default instance;
