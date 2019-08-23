import req from '@/util/request';

const discover = {} as any;

discover.getBanner = (data: any) => {
    return req.post('/banner?type=2', data)
}

const api = {
    discover,
}

export default api;
